from flask import Blueprint, request, jsonify
from flask import Response

from pydantic.error_wrappers import ValidationError

from models.forestry_dto import ForestryDto
from dao_imp.forestry_dao_imp import ForestryDaoImp

forestry_api = Blueprint('forestry_api', __name__)

@forestry_api.route("/forestry",  methods=['GET'])
def getAll():
    forestries = ForestryDaoImp.getAll()
    return jsonify(list(f.dict() for f in forestries))


@forestry_api.route("/forestry",  methods=['POST'])
def save():
    content = request.json

    try:
        forestry_dto = ForestryDto(**content)
    except ValidationError as e:
        return Response(f"{e.json()}", 400)

    id = ForestryDaoImp.save(forestry_dto)

    return jsonify({'Message': 'Success', 'Forestry_id': id})