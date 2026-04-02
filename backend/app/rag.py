from typing import Any

from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from openai import OpenAI

from app.config import (
    CHROMA_PATH,
    COLLECTION_NAME,
    EMBEDDING_MODEL,
    LLM_MODEL,
    OPENAI_BASE_URL,
    TOP_K,
    require_openai_api_key,
)
from app.prompt import PROMPT_TEMPLATE


def _get_openai_client() -> OpenAI:
    return OpenAI(api_key=require_openai_api_key(), base_url=OPENAI_BASE_URL)


def get_vector_db() -> Chroma:
    embedding_function = OpenAIEmbeddings(
        model=EMBEDDING_MODEL,
        api_key=require_openai_api_key(),
        base_url=OPENAI_BASE_URL,
    )

    db = Chroma(
        collection_name=COLLECTION_NAME,
        persist_directory=CHROMA_PATH,
        embedding_function=embedding_function,
    )
    return db


def query_rag(question: str) -> dict[str, Any]:
    db = get_vector_db()

    if db._collection.count() == 0:
        raise ValueError(
            "The vector store is empty. Run '/api/ingest?reset=true' before using chat."
        )

    results = db.similarity_search_with_score(question, k=TOP_K)

    context_parts = []
    sources = []

    for doc, score in results:
        context_parts.append(doc.page_content)
        sources.append({
            "id": doc.metadata.get("id", ""),
            "source": doc.metadata.get("source", "unknown"),
            "section": doc.metadata.get("section", "unknown"),
            "text": doc.page_content,
            "score": float(score),
        })

    context_text = "\n\n---\n\n".join(context_parts)

    prompt = PROMPT_TEMPLATE.format(
        context=context_text,
        question=question,
    )

    response = _get_openai_client().chat.completions.create(
        model=LLM_MODEL,
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
    )

    answer = response.choices[0].message.content or ""

    return {
        "answer": answer,
        "sources": sources,
    }