from sqlalchemy.orm import session
from sqlalchemy.sql.elements import Null
from .forestry_dao_imp import ForestryDaoImp
from pydantic.types import UUID1

from database import Database
from interfaces.sensor_dao import SensorDao
from models.sensor_dto import SensorDto, Coordinates

import re


with Database() as db:

    class SensorDaoImp(SensorDao):
        def save(sensor_dto: SensorDto):
            pointString = coordinateToPointString(sensor_dto.location)
            sensor_row = db.SensorRow(
                location=pointString, type=sensor_dto.type, model=sensor_dto.model
            )
            db.session.add(sensor_row)
            db.session.commit()
            return sensor_row.id

        def get(id: UUID1):
            sensor_row = (
                db.session.query(db.SensorRow).filter(
                    db.SensorRow.id == id.hex).first()
            )
            point = pointStringToCoordinate(str(sensor_row.location))
            return SensorDto(
                id=sensor_row.id,
                location=point,
                type=sensor_row.type,
                model=sensor_row.model,
            )

        def getAll():
            sensors_dtos = []

            for sensor_row in db.session.query(db.SensorRow).all():
                point = pointStringToCoordinate(str(sensor_row.location))
                sensors_dtos.append(
                    SensorDto(
                        id=sensor_row.id,
                        location=point,
                        type=sensor_row.type,
                        model=sensor_row.model,
                    )
                )
            return sensors_dtos

        def delete(id: UUID1):
            pass

        def update(sensor_dto: SensorDto):
            pass

        def addReadingsLog(sensorLog_dto):
            pass

        def getReadingsLog(id: UUID1):
            pass

        def getAllReadingsLogs():
            pass

        def deleteReadingsLog(id: UUID1):
            pass

        def addEmergencyEvent(emergencyEvent_dto):
            pass

        def getEmergencyEvent(id: UUID1):
            pass

        def getAllEmergencyEvents():
            pass

        def deleteEmergencyEvent(id: UUID1):
            pass

        def sensorExistsById(id: UUID1) -> bool:
            return db.session.query(db.SensorRow.id).filter_by(id=id).first() is not None

        def setForestryForSensor(sensorId: UUID1, forestryId: UUID1):
            if sensorId is not None and forestryId is not None and SensorDaoImp.sensorExistsById(sensorId) and ForestryDaoImp.forestryExistsById(forestryId):
                sensor = db.session.query(db.SensorRow).filter_by(id=sensorId).first()
                sensor.forestry_id = forestryId
                db.session.commit()


def pointStringToCoordinate(pointString: str):
    points = re.findall(r"[\d.-]+", pointString)
    return Coordinates(long=points[0], lat=points[1])


def coordinateToPointString(coordinate):
    return f"({coordinate.long}, {coordinate.lat})"
