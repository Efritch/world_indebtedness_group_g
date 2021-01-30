
from flask import Flask, render_template, jsonify,request
import pymongo
import astropy.config.configuration
from config import password
#################################################
# Flask Setup
#################################################
app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

@app.route("/")
def home():
    return render_template('base.html')

@app.route('/line')
def line():
    return render_template('line.html')

@app.route('/map')
def map():
    return render_template('map.html')

@app.route('/bubble')
def bubble():
    return render_template('bubble.html')


# @app.route('/db_data', methods=['GET'])
# def database_data():
#     collection_name = request.args.get('col',default='rev_exp',type=str)
#     # Connecting to the database
#     db_name="world_indebtedness"
#     uri = f"mongodb://web_user:{password}Z@projectcluster-shard-00-00.2m1ao.mongodb.net:27017,projectcluster-shard-00-01.2m1ao.mongodb.net:27017,projectcluster-shard-00-02.2m1ao.mongodb.net:27017/world_indebtedness?ssl=true&replicaSet=atlas-12bec0-shard-0&authSource=admin&retryWrites=true&w=majority"
#     mongo=pymongo.MongoClient(uri)
#     result = []
#     for doc in mongo.db[collection_name].find():
#         result.append(doc)
#     return result


if __name__ == '__main__':
    app.run(debug=True)
