from api.app.schemas import Requirement, RequirementStatus


def item(cat: str, status: str, i: int = 0) -> RequirementStatus:
    req = Requirement(id=f"T-{cat}-{i}", country="EU", title=f"{cat} {i}", category=cat, basis="test")
    return RequirementStatus(requirement=req, status=status)
