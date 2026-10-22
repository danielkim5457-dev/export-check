"""리포트 문장 생성: 점수 구간 + 근거 항목 -> 템플릿 문장.

LLM 다듬기(LLM_SUMMARY_ENABLED)는 선택 기능이며, 입력에 없는 숫자가 출력에 있으면 버린다.
"""
from ..schemas import RequirementStatus

BANNED = ("반드시 통과", "100% 승인", "무조건")
NOTICE = "참고용 리포트이며 통관을 보장하지 않습니다."


def summarize(items: list[RequirementStatus], score: int) -> list[str]:
    notes = []
    missing_cert = [i for i in items if i.requirement.category == "certification" and i.status != "met"]
    docs = [i for i in items if i.requirement.category == "document"]
    if missing_cert:
        names = ", ".join(i.requirement.title for i in missing_cert[:2])
        notes.append(f"필수 인증이 부족해 통관이 보류될 수 있습니다. (근거: {names})")
    if docs and all(i.status == "met" for i in docs):
        notes.append("필요 서류가 모두 준비되어 바로 승인 요청이 가능합니다.")
    if score < 55:
        notes.append("요건 대부분이 미충족 상태입니다. 국가별 체크리스트부터 확인하세요.")
    notes.append(NOTICE)
    return [n for n in notes if not any(b in n for b in BANNED)]
