from typing import Literal
from pydantic import BaseModel
from pydantic.types import UUID4, conlist


class Coordinates(BaseModel):
    x: float
    y: float


class Sensor(BaseModel):
    id: UUID4
    location: Coordinates
    type: Literal['FIRE', 'HUMIDITY']
