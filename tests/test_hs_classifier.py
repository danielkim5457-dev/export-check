from api.app.matching.hs_classifier import suggest_hs


def test_blender_top_candidate():
    out = suggest_hs("휴대용 블렌더 BL-200", ["스테인리스"])
    assert out[0]["code"] == "8509.40"
    assert len(out) == 3


def test_lamp_top_candidate():
    assert suggest_hs("LED 무드등 LM-7")[0]["code"] == "9405.21"
