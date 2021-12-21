from abc import ABCMeta, abstractmethod
from models.sensor_dto import SensorDto, SensorReadingDto


class ISensorRegistrator(metaclass=ABCMeta):
    @abstractmethod
    def registerReading(reading: SensorReadingDto):
        ...

    @abstractmethod
    def registerSensor(sensorDto: SensorDto, token: str):
        ...
