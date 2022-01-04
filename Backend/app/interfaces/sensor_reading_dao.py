from abc import ABCMeta, abstractmethod
from models.sensor_dto import SensorReadingDto

class SensorReadingDao(metaclass=ABCMeta):

    @abstractmethod
    def registerReading(sensor_reading_dto: SensorReadingDto):
        ...
