from pydantic import BaseModel, Field


class Product(BaseModel):
    id: str
    name: str
    materials: list[str] = Field(default_factory=list)
    power: str | None = None
    food_contact: bool = False
    hs_code: str | None = None


class Requirement(BaseModel):
    id: str
    country: str
    title: str
    category: str  # certification | document | chemical | labeling
    basis: str
    url: str | None = None


class RequirementStatus(BaseModel):
    requirement: Requirement
    status: str  # met | missing | check


class ReviewResult(BaseModel):
    product_id: str
    country: str
    score: int
    grade: str
    items: list[RequirementStatus]
    notes: list[str] = Field(default_factory=list)
