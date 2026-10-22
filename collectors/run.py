"""수집기 실행: python -m collectors.run [--dry]"""
import argparse
import json

from . import cn_samr, eu_eurlex, in_bis, jp_meti, us_ecfr

MODULES = [us_ecfr, eu_eurlex, jp_meti, cn_samr, in_bis]


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry", action="store_true", help="수집 대상만 출력")
    args = ap.parse_args()
    rows = [r for m in MODULES for r in m.fetch(dry=args.dry)]
    print(json.dumps(rows, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
