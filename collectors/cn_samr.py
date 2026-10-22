"""CN 고시 · 관보 수집기."""
COUNTRY = "CN"
BASE = "https://www.samr.gov.cn/"
PATHS = ["rzjgs/"]


def plan() -> list[str]:
    return [BASE + p for p in PATHS]


def fetch(dry: bool = True) -> list[dict]:
    if dry:
        return [{"country": COUNTRY, "url": u, "status": "planned"} for u in plan()]
    raise NotImplementedError("운영 수집은 GitHub Actions 환경에서만 실행합니다")
