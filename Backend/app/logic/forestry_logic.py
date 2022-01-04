from pydantic.error_wrappers import ValidationError

from interfaces.forestry_logic import IForestryLogic
from models.forestry_dto import ForestryDto
from dao_imp.forestry_dao_imp import ForestryDaoImp


class ForestryLogic(IForestryLogic):
    def save(forestry_data: dict):
        try:
            forestry_dto = ForestryDto(**forestry_data)
        except ValidationError:
            raise

        return ForestryDaoImp.save(forestry_dto)

    def getAll():
        forestries = ForestryDaoImp.getAll()
        return list(f.dict() for f in forestries)
