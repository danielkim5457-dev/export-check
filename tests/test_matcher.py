from api.app.matching.requirement_matcher import load_rules, match_requirements
from api.app.schemas import Product

BLENDER = Product(id="P001", name="휴대용 블렌더 BL-200", materials=["스테인리스", "트라이탄"],
                  power="USB-C 리튬이온 7.4V", food_contact=True, hs_code="8509.40")
LAMP = Product(id="P004", name="LED 무드등 LM-7", materials=["PP"], power="USB 5V", hs_code="9405.21")


def test_every_country_has_rules():
    for c in ["US", "EU", "JP", "CN", "IN"]:
        assert len(load_rules(c)) >= 4


def test_food_contact_rule_only_for_food_products():
    ids_blender = {i.requirement.id for i in match_requirements(BLENDER, "EU", set())}
    ids_lamp = {i.requirement.id for i in match_requirements(LAMP, "EU", set())}
    assert "EU-FCM" in ids_blender
    assert "EU-FCM" not in ids_lamp


def test_uploaded_document_marks_met():
    items = match_requirements(BLENDER, "EU", {"lvd_report"})
    lvd = next(i for i in items if i.requirement.id == "EU-LVD")
    assert lvd.status == "met"


def test_hs_prefix_condition():
    ids = {i.requirement.id for i in match_requirements(BLENDER, "CN", set())}
    assert "CN-CCC" in ids
    ids_lamp = {i.requirement.id for i in match_requirements(LAMP, "CN", set())}
    assert "CN-CCC" not in ids_lamp
