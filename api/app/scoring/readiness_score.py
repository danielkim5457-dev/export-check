"""준비도 점수: 항목별 충족률(0~100)의 가중합.

자료 없는 항목은 빼고 비중을 다시 나눈다.
"""
from pathlib import Path

import yaml

from ..schemas import RequirementStatus

W = yaml.safe_load((Path(__file__).parent / "weights.yaml").read_text(encoding="utf-8"))
CATS = ["certification", "document", "chemical", "labeling"]


def category_rates(items: list[RequirementStatus]) -> dict[str, float]:
    rates = {}
    for c in CATS:
        xs = [i for i in items if i.requirement.category == c]
        if xs:
            rates[c] = 100 * sum(1 for i in xs if i.status == "met") / len(xs)
    return rates


def grade_of(score: int) -> str:
    for cut, label in W["grades"]:
        if score >= cut:
            return label
    return "재검토"


def score_review(items: list[RequirementStatus], revision_rate: float | None = None) -> tuple[int, str]:
    rates = category_rates(items)
    if revision_rate is not None:
        rates["revision"] = revision_rate
    if not rates:
        return 0, "재검토"
    total_w = sum(W[c] for c in rates)
    score = round(sum(rates[c] * W[c] for c in rates) / total_w)
    return score, grade_of(score)
