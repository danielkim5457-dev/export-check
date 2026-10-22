from api.app.rag.summarizer import BANNED, NOTICE, summarize

from .helpers import item


def test_notice_always_attached():
    assert NOTICE in summarize([], 100)


def test_missing_certification_warns():
    notes = summarize([item("certification", "missing")], 40)
    assert any("필수 인증" in n for n in notes)


def test_no_banned_phrases():
    notes = summarize([item("document", "met")], 95)
    assert not any(b in n for n in notes for b in BANNED)
