from flask import Blueprint, request, jsonify
from flask import Response

from pydantic.error_wrappers import ValidationError
from models.message import Message

from logic.sensor_logic import SensorLogic

sensor_api = Blueprint('sensor_api', __name__)


@sensor_api.route("/sensor",  methods=['GET'])
def getAll():
    sensors = SensorLogic.getAll()
    return jsonify(sensors)


@sensor_api.route("/sensor",  methods=['POST'])
def registerSensor():
    # This endpoint should be removed in the future
    content = request.json

    try:
        id = SensorLogic.save(content)
    except ValidationError as e:
        return Response(f"{e.json()}", 400)

    return jsonify({'Message': 'Success', 'Sensor_id': id})


@sensor_api.route("/assign",  methods=['POST'])
def assignToForestry():
    content = request.json

    message: Message = SensorLogic.assignToForestry(content)

    return Response(message.content, content_type="application/json", status=message.code)
