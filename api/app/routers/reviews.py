from fastapi import APIRouter, HTTPException

from ..matching.requirement_matcher import match_requirements
from ..rag.summarizer import summarize
from ..schemas import ReviewResult
from ..scoring.readiness_score import score_review
from .products import load_products

router = APIRouter(tags=["reviews"])


@router.get("/reviews/{pid}/{country}")
def review(pid: str, country: str, uploaded: str = "") -> ReviewResult:
    prod = next((p for p in load_products() if p.id == pid), None)
    if prod is None:
        raise HTTPException(404, "product not found")
    have = {x for x in uploaded.split(",") if x}
    items = match_requirements(prod, country.upper(), have)
    score, grade = score_review(items)
    return ReviewResult(product_id=pid, country=country.upper(), score=score, grade=grade,
                        items=items, notes=summarize(items, score))
