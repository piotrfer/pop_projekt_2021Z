from flask import Blueprint, request, jsonify
from flask import Response

from pydantic.error_wrappers import ValidationError

from models.sensor_dto import SensorDto
from dao_imp.sensor_dao_imp import SensorDaoImp

sensor_api = Blueprint('sensor_api', __name__)


@sensor_api.route("/sensor",  methods=['GET'])
def get_all_sensors():
    sensors = SensorDaoImp.getAll()
    return jsonify(list(s.dict() for s in sensors))


@sensor_api.route("/sensor",  methods=['POST'])
def register_sensor():
    content = request.json

    try:
        sensor_dto = SensorDto(**content)
    except ValidationError as e:
        return Response(f"{e.json()}", 400)

    id = SensorDaoImp.save(sensor_dto)

    return jsonify("Success")