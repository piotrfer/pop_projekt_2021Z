from abc import ABCMeta, abstractmethod
from typing import List
from pydantic.types import UUID1

from models.message import Message


class ISensorLogic(metaclass=ABCMeta):
    @abstractmethod
    def save(sensor_data: dict) -> UUID1:
        ...

    @abstractmethod
    def getAll() -> List[dict]:
        ...

    @abstractmethod
    def assignToForestry(assign_data: dict) -> Message:
        ...
