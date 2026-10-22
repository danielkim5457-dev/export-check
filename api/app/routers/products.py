import json

from fastapi import APIRouter, HTTPException

from ..matching.hs_classifier import suggest_hs
from ..paths import SAMPLE
from ..schemas import Product

router = APIRouter(tags=["products"])


def load_products() -> list[Product]:
    rows = json.loads((SAMPLE / "sample_products.json").read_text(encoding="utf-8"))
    return [Product(**p) for p in rows]


@router.get("/products")
def list_products() -> list[Product]:
    return load_products()


@router.get("/products/{pid}/hs")
def hs_candidates(pid: str) -> list[dict]:
    prod = next((p for p in load_products() if p.id == pid), None)
    if prod is None:
        raise HTTPException(404, "product not found")
    return suggest_hs(prod.name, prod.materials)
