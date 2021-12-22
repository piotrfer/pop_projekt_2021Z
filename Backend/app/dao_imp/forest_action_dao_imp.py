from dao_imp.forestry_dao_imp import polygonStringToCoordinates
from dao_imp.sensor_dao_imp import coordinateToPointString
from pydantic.types import UUID1
from interfaces.forest_action_dao import ForestActionDao
from models.forest_action_dto import ForestActionDto
from database import Database

with Database() as db:
    class ForestActionDaoImp(ForestActionDao):

        def getAll():
            forest_action_dtos = []
            for forest_action_row in db.session.query(db.ForestActionRow).all():
                coordinates = polygonStringToCoordinates(str(forest_action_row.location))
                forest_action_dtos.append(
                    ForestActionDto(
                        id = forest_action_row.id,
                        location = coordinates,
                        type = forest_action_row.type,
                        subtype = forest_action_row.subtype,
                        forestry_id = forest_action_row.forestry_id
                    )
                )
            return forest_action_dtos


        def save(forestActionDto: ForestActionDto):
            location = coordinateToPointString(forestActionDto.location)
            forest_action_row = db.ForestActionRow(
                location=location, type=forestActionDto.type, subtype=forestActionDto.subtype, forestry_id=forestActionDto.forestry_id
            )
            db.session.add(forest_action_row)
            db.session.commit()
            return forest_action_row.id

