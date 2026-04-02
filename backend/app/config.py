import os


def _get_optional_env(name: str) -> str | None:
	value = os.getenv(name, "").strip()
	return value or None


def require_openai_api_key() -> str:
	api_key = _get_optional_env("OPENAI_API_KEY")
	if not api_key:
		raise ValueError("OPENAI_API_KEY is not set.")
	return api_key


# Default configuration for the application.
# Environment variables can override all values below.

CHROMA_PATH = os.getenv("CHROMA_PATH", "chroma") # Directory where ChromaDB will store its data

LLM_MODEL = os.getenv("LLM_MODEL", "gpt-4o-mini")
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "text-embedding-3-small")
OPENAI_BASE_URL = _get_optional_env("OPENAI_BASE_URL")

_default_collection_name = f"quan_portfolio_{EMBEDDING_MODEL}".replace("-", "_")
COLLECTION_NAME = os.getenv("COLLECTION_NAME", _default_collection_name) # Name of the ChromaDB collection to use for storing and retrieving embeddings

# Number of top relevant chunks to retrieve from ChromaDB for each query
TOP_K = int(os.getenv("TOP_K", "5"))
CHUNK_SIZE = int(os.getenv("CHUNK_SIZE", "800"))
CHUNK_OVERLAP = int(os.getenv("CHUNK_OVERLAP", "80"))

DATA_DIR = os.getenv("DATA_DIR", "data")

_default_cors_origins = "http://localhost:5173,http://127.0.0.1:5173,https://dolamquan.github.io"
CORS_ORIGINS = [origin.strip() for origin in os.getenv("CORS_ORIGINS", _default_cors_origins).split(",") if origin.strip()]