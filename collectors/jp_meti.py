"""JP 고시 · 관보 수집기."""
COUNTRY = "JP"
BASE = "https://www.meti.go.jp/policy/consumer/seian/denan/"
PATHS = ["index.html"]


def plan() -> list[str]:
    return [BASE + p for p in PATHS]


def fetch(dry: bool = True) -> list[dict]:
    if dry:
        return [{"country": COUNTRY, "url": u, "status": "planned"} for u in plan()]
    raise NotImplementedError("운영 수집은 GitHub Actions 환경에서만 실행합니다")
