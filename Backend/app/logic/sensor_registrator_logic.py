from pydantic.error_wrappers import ValidationError
from interfaces.sensor_registrator_logic import ISensorRegistratorLogic
from models.sensor_dto import SensorRegistratorDto
from dao_imp.sensor_dao_imp import SensorDaoImp
from api.authentication_api_imp import isValid


class SensorRegistratorLogic(ISensorRegistratorLogic):

    def registerSensor(sensor_data: dict) -> bool:
        try:
            sensor_registrator_dto = SensorRegistratorDto(**sensor_data)
        except ValidationError:
            raise

        if not isValid(sensor_registrator_dto.token):
            return False

        # Tu jeszcze powinniśmy skorztstać z nowego wewnętrznego interfejsu, który zdefiniują architekci
        SensorDaoImp.save(sensor_registrator_dto.sensor_dto)
        return True
