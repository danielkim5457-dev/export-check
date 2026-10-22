from api.app.scoring.readiness_score import grade_of, score_review

from .helpers import item


def test_all_met_is_100():
    items = [item("certification", "met"), item("document", "met"), item("chemical", "met"), item("labeling", "met")]
    assert score_review(items) == (100, "출하 가능")


def test_missing_category_is_reweighted():
    items = [item("certification", "met"), item("document", "missing")]
    score, _ = score_review(items)
    assert score == round(100 * 30 / 55)


def test_same_input_same_score():
    items = [item("certification", "met", 1), item("certification", "missing", 2), item("chemical", "met")]
    assert score_review(items) == score_review(list(items))


def test_grades():
    assert grade_of(90) == "출하 가능"
    assert grade_of(72) == "조건부"
    assert grade_of(60) == "보완 필요"
    assert grade_of(10) == "재검토"


def test_empty_is_zero():
    assert score_review([]) == (0, "재검토")
