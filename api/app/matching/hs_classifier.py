"""HS 코드 후보 추천 (샘플 구현: 키워드 겹침 점수).

운영에서는 다국어 문장 임베딩 유사도로 바꾸고, 담당자가 최종 확정한다.
"""
HS_TABLE = {
    "8509.40": ("식품 분쇄기 · 믹서", {"블렌더", "믹서", "분쇄", "착즙"}),
    "8509.80": ("기타 가정용 전기기기", {"칫솔", "전동", "가정용"}),
    "8516.79": ("기타 전열기기", {"전열", "가열", "포트"}),
    "8423.10": ("체중계 · 가정용 저울", {"체중계", "저울"}),
    "8504.40": ("정지형 변환기 · 충전기", {"충전", "어댑터", "패드"}),
    "9405.21": ("전기식 탁상 조명", {"조명", "무드등", "램프", "LED"}),
}


def suggest_hs(name: str, materials: list[str] | None = None, top: int = 3) -> list[dict]:
    words = set(name.replace("·", " ").split()) | set(materials or [])
    scored = []
    for code, (label, keys) in HS_TABLE.items():
        hit = sum(1 for k in keys if any(k in w for w in words))
        scored.append((hit, code, label))
    scored.sort(key=lambda x: (-x[0], x[1]))
    best = scored[:top]
    total = sum(h for h, _, _ in best) or 1
    return [{"code": c, "label": lbl, "confidence": round(h / total, 2)} for h, c, lbl in best]
