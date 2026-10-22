"""국가별 요건표(rules/requirements_*.yaml)와 품목을 매칭한다."""
import yaml

from ..paths import RULES
from ..schemas import Product, Requirement, RequirementStatus


def load_rules(country: str) -> list[dict]:
    path = RULES / f"requirements_{country.lower()}.yaml"
    return yaml.safe_load(path.read_text(encoding="utf-8"))["requirements"]


def applies(rule: dict, p: Product) -> bool:
    cond = rule.get("when", {})
    if cond.get("food_contact") and not p.food_contact:
        return False
    if cond.get("battery") and not (p.power and "리튬" in p.power):
        return False
    if "hs_prefix" in cond and not (p.hs_code or "").startswith(tuple(cond["hs_prefix"])):
        return False
    return True


def match_requirements(p: Product, country: str, uploaded: set[str]) -> list[RequirementStatus]:
    out = []
    for r in load_rules(country):
        if not applies(r, p):
            continue
        req = Requirement(id=r["id"], country=country, title=r["title"], category=r["category"],
                          basis=r["basis"], url=r.get("url"))
        doc = r.get("document")
        if doc and doc in uploaded:
            status = "met"
        elif r.get("needs_review"):
            status = "check"
        else:
            status = "missing"
        out.append(RequirementStatus(requirement=req, status=status))
    return out
