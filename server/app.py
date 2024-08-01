from flask import Flask, jsonify
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/datetime', methods=['GET'])
def get_datetime():
    now = datetime.now()
    current_time = now.strftime("%Y-%m-%d %H:%M:%S")
    return jsonify({"datetime": current_time})

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=3000,debug=True)
