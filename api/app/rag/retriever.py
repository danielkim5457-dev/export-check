"""조항 검색. 운영: Qdrant 벡터 + 키워드 하이브리드. 샘플: 키워드 겹침."""
import json

from ..paths import SAMPLE


def search(query: str, country: str | None = None, k: int = 5) -> list[dict]:
    rows = json.loads((SAMPLE / "clauses.json").read_text(encoding="utf-8"))
    q = set(query.lower().split())
    scored = []
    for r in rows:
        if country and r["country"] != country:
            continue
        text = (r["title"] + " " + r["summary"]).lower()
        scored.append((sum(1 for w in q if w in text), r))
    scored.sort(key=lambda x: -x[0])
    return [r for s, r in scored[:k] if s > 0]
