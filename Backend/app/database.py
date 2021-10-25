import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine(os.environ['DATABASE_URL'])
db_session = sessionmaker(autocommit=False,
                          autoflush=False,
                          bind=engine)


# Dependency
def get_db():
    try:
        db = db_session()
        yield db
    finally:
        db.close()
