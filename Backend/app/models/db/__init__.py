# coding: utf-8
from sqlalchemy import ARRAY, Column, DateTime, Float, ForeignKey, Integer, String, text
from sqlalchemy.dialects.postgresql import DATERANGE, TSRANGE, UUID
from sqlalchemy.orm import relationship
from geoalchemy2 import Geometry
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.sqltypes import NullType


Base = declarative_base()
metadata = Base.metadata


class ForestAction(Base):
    __tablename__ = 'forest_action'

    id = Column(UUID, primary_key=True,
                server_default=text("uuid_generate_v1mc()"))
    location = Column(Geometry('POLYGON'), nullable=False)
    type = Column(String(100), nullable=False)
    subtype = Column(String(100), nullable=False)
    time_period = Column(DATERANGE, nullable=False)


class Forestry(Base):
    __tablename__ = 'forestry'

    id = Column(UUID, primary_key=True,
                server_default=text("uuid_generate_v1mc()"))
    location = Column(Geometry('POLYGON'), nullable=False)
    name = Column(String(100), nullable=False)


class Sensor(Base):
    __tablename__ = 'sensor'

    id = Column(UUID, primary_key=True,
                server_default=text("uuid_generate_v1mc()"))
    location = Column(Geometry('POINT'), nullable=False)
    type = Column(String(100), nullable=False)
    model = Column(String(100), nullable=False)


class SensorEmergencyEvent(Base):
    __tablename__ = 'sensor_emergency_event'

    id = Column(UUID, primary_key=True,
                server_default=text("uuid_generate_v1mc()"))
    sensor_id = Column(ForeignKey('sensor.id'), nullable=False)
    time_of_reading = Column(DateTime, nullable=False)

    sensor = relationship('Sensor')


class SensorReadingsLog(Base):
    __tablename__ = 'sensor_readings_log'

    id = Column(UUID, primary_key=True,
                server_default=text("uuid_generate_v1mc()"))
    sensor_id = Column(ForeignKey('sensor.id'), nullable=False)
    time_frame = Column(TSRANGE, nullable=False)
    seconds_between_readings = Column(Integer, nullable=False)
    readings = Column(ARRAY(Float()), nullable=False)

    sensor = relationship('Sensor')
