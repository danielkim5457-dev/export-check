"""export-check API 진입점."""
from fastapi import FastAPI

from .routers import products, reviews

app = FastAPI(title="export-check API", version="0.4.0")
app.include_router(products.router, prefix="/api/v1")
app.include_router(reviews.router, prefix="/api/v1")


@app.get("/healthz")
def healthz() -> dict:
    return {"ok": True}
