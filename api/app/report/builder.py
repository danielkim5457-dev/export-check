"""검토 결과 -> 마크다운 리포트 (PDF 변환은 운영 환경에서 처리)."""
from ..schemas import ReviewResult

LABEL = {"met": "충족", "missing": "보완 필요", "check": "확인 필요"}


def to_markdown(r: ReviewResult, product_name: str) -> str:
    lines = [f"# 수출 규제 검토 리포트 - {product_name} · {r.country}", "",
             f"준비도 **{r.score}점** ({r.grade})", "", "| 요건 | 근거 | 상태 |", "|---|---|---|"]
    for i in r.items:
        lines.append(f"| {i.requirement.title} | {i.requirement.basis} | {LABEL[i.status]} |")
    lines += ["", *[f"- {n}" for n in r.notes]]
    return "\n".join(lines)
