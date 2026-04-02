import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.config import CORS_ORIGINS, EMBEDDING_MODEL, LLM_MODEL
from app.ingest import ingest_documents
from app.rag import get_vector_db, query_rag

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Auto-ingest resume data on startup if the vector store is empty."""
    try:
        db = get_vector_db()
        if db._collection.count() == 0:
            logger.info("Vector store empty — running initial ingest...")
            count = ingest_documents(reset=False)
            logger.info("Ingest complete: %d chunks loaded.", count)
    except Exception as exc:
        logger.warning("Startup ingest skipped: %s", exc)
    yield


app = FastAPI(title="Thuy Portfolio RAG API", lifespan=lifespan)


app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)


class SourceItem(BaseModel):
    id: str
    source: str
    section: str
    text: str
    score: float


class ChatResponse(BaseModel):
    answer: str
    sources: list[SourceItem]


class IngestResponse(BaseModel):
    success: bool
    count: int
    message: str


def _format_service_error_message(error: Exception) -> str | None:
    message = str(error)

    if "The vector store is empty" in message:
        return (
            "No portfolio data has been ingested into the vector store yet. "
            "Run '/api/ingest?reset=true' before using chat."
        )

    if "Collection expecting embedding with dimension" in message:
        return (
            "Your local Chroma collection was built with a different embedding model. "
            "Reset and re-ingest the vector store by calling '/api/ingest?reset=true', "
            "or delete the backend/chroma folder and ingest again."
        )

    if "OPENAI_API_KEY is not set" in message:
        return (
            "OPENAI_API_KEY is not configured. "
            "Set it in your backend environment before calling ingest or chat."
        )

    if "Incorrect API key" in message or "401" in message or "authentication" in message.lower():
        return (
            "OpenAI authentication failed. "
            "Check OPENAI_API_KEY and verify the configured models "
            f"'{EMBEDDING_MODEL}' and '{LLM_MODEL}' are available to your account."
        )

    if "Connection error" in message or "timed out" in message.lower():
        return (
            "The backend could not reach the OpenAI API. "
            "Check outbound network access and OPENAI_BASE_URL if you configured one."
        )

    return None


@app.get("/")
def root():
    return {"message": "Thuy Portfolio RAG API is running"}


@app.post("/api/ingest", response_model=IngestResponse)
def ingest(reset: bool = False):
    try:
        count = ingest_documents(reset=reset)
        return IngestResponse(
            success=True,
            count=count,
            message=f"Added {count} chunks to Chroma."
        )
    except Exception as e:
        service_error = _format_service_error_message(e)
        if service_error:
            raise HTTPException(status_code=503, detail=service_error)
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    try:
        result = query_rag(request.message)
        return ChatResponse(
            answer=result["answer"],
            sources=result["sources"],
        )
    except Exception as e:
        service_error = _format_service_error_message(e)
        if service_error:
            raise HTTPException(status_code=503, detail=service_error)
        raise HTTPException(status_code=500, detail=str(e))