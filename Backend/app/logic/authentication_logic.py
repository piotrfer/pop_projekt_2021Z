from abc import ABCMeta, abstractmethod
from typing import List
from pydantic.error_wrappers import ValidationError
from pydantic.types import UUID1
from uuid import uuid1
from models.token_dto import TokenDto

from interfaces.authentication_logic import IAuthenticationLogic
# from interfaces.authentication_dao_imp import AuthenticationDaoImp  # TODO


class AuthenticationLogic(IAuthenticationLogic):
    def generateToken() -> str:
        token = uuid1()
        # AuthenticationDaoImp.saveToken(token)
        return token

    def isValid(token: str) -> bool:
        try:
            token_dto = TokenDto(token=token)
        except ValidationError:
            raise
        # return AuthenticationDaoImp.tokenExists(token_dto.token)
