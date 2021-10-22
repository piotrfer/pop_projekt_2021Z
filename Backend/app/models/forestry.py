from pydantic import BaseModel
from pydantic.types import UUID4, conlist


class Coordinates(BaseModel):
    x: float
    y: float


class Forestry(BaseModel):
    id: UUID4
    location: conlist(Coordinates, min_items=3)
    name: str
