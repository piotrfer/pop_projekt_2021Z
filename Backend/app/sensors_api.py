
from flask import Blueprint, request, jsonify, Response


from pydantic.error_wrappers import ValidationError

from models.sensor import Sensor


sensor_api = Blueprint('sensor_api', __name__)


@sensor_api.route("/sensor",  methods=['GET'])
def get_all_sensors():
    """TODO get all sensors in DB via SensorDao"""

    pass


@sensor_api.route("/sensor",  methods=['POST'])
def register_sensor():
    content = request.json

    # IDK why we need this token while registering sensor
    token = content.pop('token', None)

    try:
        sensor = Sensor(**content)
    except ValidationError as e:
        return Response(f"{e.json()}", 400)

    sensor_id = content.get('id', None)
    location = content.get('location', None)
    type = content.get('type', None)

    """TODO save sensor in DB via SensorDao"""

    return jsonify(content)
