from flask import Flask
from api.forestry_api_imp import forestry_api
from api.sensors_api_imp import sensor_api
from api.authentication_api_imp import authentication_api
from api.sensor_registrator_api_imp import sensor_registrator_api
from api.forest_action_api_imp import forest_action_api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True
app.register_blueprint(forestry_api)
app.register_blueprint(sensor_api)
app.register_blueprint(authentication_api)
app.register_blueprint(sensor_registrator_api)
app.register_blueprint(forest_action_api)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
