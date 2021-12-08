from abc import ABCMeta, abstractmethod
from typing import List

from sqlalchemy.orm import session
from database import Database
import uuid

with Database() as db:
    class AuthenticationDaoImp(metaclass=ABCMeta):
        def generateToken():
            token_row = db.TokenRow(value=uuid.uuid4())
            db.session.add(token_row)
            db.session.commit()
            return token_row.value
        
        def tokenExists(token: str):
            return db.session.query(db.TokenRow.id).filter_by(value=token).first() is not None