"""EU 고시 · 관보 수집기."""
COUNTRY = "EU"
BASE = "https://eur-lex.europa.eu/legal-content/EN/TXT/"
PATHS = ["CELEX:32011L0065", "CELEX:32011R0010"]


def plan() -> list[str]:
    return [BASE + p for p in PATHS]


def fetch(dry: bool = True) -> list[dict]:
    if dry:
        return [{"country": COUNTRY, "url": u, "status": "planned"} for u in plan()]
    raise NotImplementedError("운영 수집은 GitHub Actions 환경에서만 실행합니다")
