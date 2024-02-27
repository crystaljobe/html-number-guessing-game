from flask import Flask, jsonify, Response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

guessing_game_app = Flask(__name__)
guessing_game_app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://crystaljobe@localhost/guessing_game'
cors = CORS(guessing_game_app)
db = SQLAlchemy(guessing_game_app)

class LowResponses(db.Model):
    __tablename__='low_responses'
    id = db.Column(db.Integer, primary_key = True)
    response = db.Column(db.String(255))
    
class HighResponses(db.Model):
    __tablename__='high_responses'
    id = db.Column(db.Integer, primary_key = True)
    response = db.Column(db.String(255))
    
@guessing_game_app.route('/lowResponses/', methods=['GET'])
def get_low_responses():
    low_responses = LowResponses.query.all()
    json_low_responses = [{'id': resp.id, 'response': resp.response} for resp in low_responses]
    return jsonify(json_low_responses)

@guessing_game_app.route('/highResponses/', methods=['GET'])
def get_high_responses():
    high_responses = HighResponses.query.all()
    json_high_responses = [{'id': resp.id, 'response': resp.response} for resp in high_responses]
    return jsonify(json_high_responses)

guessing_game_app.run(debug=True, port=5000)