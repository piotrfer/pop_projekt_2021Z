from abc import ABCMeta, abstractmethod

from models.forest_action_dto import ForestActionDto


class ForestActionDao(metaclass=ABCMeta):
    @abstractmethod
    def save(forestActionDto: ForestActionDto):
        ...

    @abstractmethod
    def getAll():
        ...
