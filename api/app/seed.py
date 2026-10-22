"""샘플 품목을 MongoDB에 넣는다: python -m api.app.seed data/sample/sample_products.json"""
import json
import os
import sys

from pymongo import MongoClient


def main(path: str) -> None:
    with open(path, encoding="utf-8") as fh:
        rows = json.load(fh)
    url = os.environ.get("MONGO_URL", "mongodb://localhost:27017/exportcheck")
    db = MongoClient(url).get_default_database()
    db.products.delete_many({"sample": True})
    db.products.insert_many([{**r, "sample": True} for r in rows])
    print(f"seeded {len(rows)} products")


if __name__ == "__main__":
    main(sys.argv[1])
