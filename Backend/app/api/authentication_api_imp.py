from flask import Blueprint, request, jsonify
from flask import Response

from pydantic.error_wrappers import ValidationError

from logic.authentication_logic import AuthenticationLogic


authentication_api = Blueprint('authentication_api', __name__)


@authentication_api.route("/token",  methods=['GET'])
def generateToken():
    token = AuthenticationLogic.generateToken()
    return jsonify({"token": token})


def isValid(token: str):
    return AuthenticationLogic.isValid(token)
