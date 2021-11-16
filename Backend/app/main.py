from flask import Flask
from api.forestry_api_imp import forestry_api
from api.sensors_api_imp import sensor_api

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True
app.register_blueprint(forestry_api)
app.register_blueprint(sensor_api)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
