import os
import psycopg2
from dotenv import load_dotenv
from flask import Flask
from forestry_api import forestry_api
from sensors_api import sensor_api
from db import Database

app = Flask(__name__)
app.config["DEBUG"] = True
app.register_blueprint(forestry_api)
app.register_blueprint(sensor_api)

with Database() as db:
    db.execute("SELECT * FROM forestry")
    comments = db.query('SELECT * FROM sensor')
    print(comments)

if __name__ == "__main__":
    app.run()
