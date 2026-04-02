# Backend Deployment Guide

## Free Hosting Options

- Render and Railway can host the FastAPI app on free tiers (subject to provider limits and sleep behavior).
- GitHub Pages cannot host this backend because it only serves static files.

## OpenAI Compatibility

This backend uses the OpenAI API for both embeddings and chat generation.

Important:
- You do not need to host your own model server.
- You must provide a valid `OPENAI_API_KEY`.
- You can optionally point to an OpenAI-compatible endpoint with `OPENAI_BASE_URL`.

Recommended environment variables:
- `OPENAI_API_KEY=<your-secret-key>`
- `LLM_MODEL=gpt-4o-mini`
- `EMBEDDING_MODEL=text-embedding-3-small`
- `OPENAI_BASE_URL=` (optional)
- `CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173,https://dolamquan.github.io`

## Render Blueprint

A blueprint is provided at [render.yaml](../render.yaml).

1. In Render, create a new Blueprint service from your GitHub repo.
2. Select branch `main`.
3. Deploy.

## Frontend Configuration

Set this variable for your frontend build:

- `VITE_API_BASE_URL=https://<your-backend-domain>`

In GitHub:
1. Repository Settings
2. Secrets and variables
3. Actions
4. Add repository variable `VITE_API_BASE_URL`

Then update your pages workflow build step to pass that variable if needed.

## CORS

The backend now supports comma-separated origins through `CORS_ORIGINS`.
Default includes:
- `http://localhost:5173`
- `http://127.0.0.1:5173`
- `https://dolamquan.github.io`
