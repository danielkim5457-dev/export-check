from collectors import run


def test_dry_run_lists_all_countries():
    rows = [r for m in run.MODULES for r in m.fetch(dry=True)]
    assert {r["country"] for r in rows} == {"US", "EU", "JP", "CN", "IN"}
