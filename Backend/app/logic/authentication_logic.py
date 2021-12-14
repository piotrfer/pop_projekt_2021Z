from pydantic.error_wrappers import ValidationError
from uuid import uuid4
from models.token_dto import TokenDto

from interfaces.authentication_logic import IAuthenticationLogic
from dao_imp.authentication_dao_imp import AuthenticationDaoImp


class AuthenticationLogic(IAuthenticationLogic):
    def generateToken() -> str:
        token = uuid4()
        return AuthenticationDaoImp.generateToken(token)

    def isValid(token: str) -> bool:
        try:
            token_dto = TokenDto(token=token)
        except ValidationError:
            raise
        return AuthenticationDaoImp.tokenExists(token_dto.token)
