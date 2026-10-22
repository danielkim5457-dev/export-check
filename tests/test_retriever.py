from api.app.rag.retriever import search


def test_country_filter():
    rows = search("식품 접촉 이행", country="EU")
    assert rows and all(r["country"] == "EU" for r in rows)
