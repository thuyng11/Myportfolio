# Prepares data and loads it into the vector database
# Raw Data -> load -> split -> embed -> store in Chroma


import os
import shutil
from typing import List

from langchain_core.documents import Document
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders.pdf import PyPDFDirectoryLoader

from app.config import (
    CHROMA_PATH,
    COLLECTION_NAME,
    EMBEDDING_MODEL,
    OPENAI_BASE_URL,
    CHUNK_SIZE,
    CHUNK_OVERLAP,
    DATA_DIR,
    require_openai_api_key,
)

def load_documents() -> List[Document]:
    """
    Load all supported documents from the data directory and return them as a list of Document objects.
    """

    if not os.path.exists(DATA_DIR):
        raise FileNotFoundError(f"Data directory '{DATA_DIR}' does not exist.")

    documents: List[Document] = []

    pdf_loader = PyPDFDirectoryLoader(DATA_DIR)
    pdf_documents = pdf_loader.load()
    for document in pdf_documents:
        source = document.metadata.get("source", "")
        if source:
            document.metadata.setdefault(
                "section",
                os.path.splitext(os.path.basename(source))[0],
            )
    documents.extend(pdf_documents)

    for entry in os.listdir(DATA_DIR):
        file_path = os.path.join(DATA_DIR, entry)
        if not os.path.isfile(file_path) or not entry.lower().endswith(".txt"):
            continue

        with open(file_path, "r", encoding="utf-8") as file:
            text = file.read().strip()

        if not text:
            continue

        documents.append(
            Document(
                page_content=text,
                metadata={
                    "source": file_path,
                    "section": os.path.splitext(entry)[0],
                },
            )
        )

    if not documents:
        raise ValueError(f"No supported documents found in the '{DATA_DIR}' directory.")
    
    return documents


def split_documents(documents: List[Document]) -> List[Document]:
    """
    Split loaded documents into smaller chunks for retrieval.
    """
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP,
        length_function=len,
        add_start_index=True,
    )

    return splitter.split_documents(documents)


def calculate_chunk_ids(chunks: List[Document]) -> List[Document]:
    """
    Give each chunk a stable ID based on source file + page + chunk index.

    Example:
    resume.pdf:0:0
    resume.pdf:0:1
    resume.pdf:1:0
    """
    last_page_id = None
    current_chunk_index = 0

    for chunk in chunks:
        source = chunk.metadata.get("source", "unknown")
        page = chunk.metadata.get("page", 0)

        source_name = os.path.basename(source)
        current_page_id = f"{source_name}:{page}"

        if current_page_id == last_page_id:
            current_chunk_index += 1
        else:
            current_chunk_index = 0

        chunk_id = f"{current_page_id}:{current_chunk_index}"
        chunk.metadata["id"] = chunk_id
        chunk.metadata["source_name"] = source_name

        last_page_id = current_page_id

    return chunks


def get_embedding_function():
    """
    Create the embedding function using OpenAI-compatible embeddings.
    """
    return OpenAIEmbeddings(
        model=EMBEDDING_MODEL,
        api_key=require_openai_api_key(),
        base_url=OPENAI_BASE_URL,
    )


def clear_database():
    """
    Delete the local Chroma database directory.
    """
    if os.path.exists(CHROMA_PATH):
        shutil.rmtree(CHROMA_PATH)
        print(f"Deleted existing Chroma database at: {CHROMA_PATH}")


def add_to_chroma(chunks: List[Document]) -> int:
    """
    Add only new chunks to Chroma.
    """
    db = Chroma(
        collection_name=COLLECTION_NAME,
        persist_directory=CHROMA_PATH,
        embedding_function=get_embedding_function(),
    )

    existing_items = db.get(include=[]) # Get all existing document IDs without fetching embeddings or metadata
    existing_ids = set(existing_items["ids"]) # Convert list of existing IDs to a set for faster lookup

    print(f"Number of existing documents in DB: {len(existing_ids)}")

    new_chunks = []
    new_chunk_ids = []

    for chunk in chunks:
        chunk_id = chunk.metadata["id"]
        if chunk_id not in existing_ids:
            new_chunks.append(chunk)
            new_chunk_ids.append(chunk_id)

    if not new_chunks:
        print("No new documents to add.")
        return 0

    print(f"Adding {len(new_chunks)} new chunks...")
    db.add_documents(new_chunks, ids=new_chunk_ids)
    print("Done adding documents.")

    return len(new_chunks)


def ingest_documents(reset: bool = False) -> int:
    """
    Main ingestion pipeline.
    """
    if reset:
        clear_database()

    documents = load_documents()
    print(f"Loaded {len(documents)} documents from data sources.")

    chunks = split_documents(documents)
    print(f"Split into {len(chunks)} chunks.")

    chunks = calculate_chunk_ids(chunks)

    added_count = add_to_chroma(chunks)
    return added_count


if __name__ == "__main__":
    count = ingest_documents(reset=True)
    print(f"Ingestion complete. Added {count} chunks.")