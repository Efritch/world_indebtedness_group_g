
from flask import Flask, render_template, jsonify,request
import pymongo

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

@app.route('/bubble')
def bubble():
    return render_template('bubble.html')


@app.route('/db_data', methods=['GET'])
def database_data():
    collection_name = request.args.get('col',default='rev_exp',type=str)
    # Connecting to the database
    db_name="world_indebtedness"
    uri=f"mongodb://web_user:Uj3z9lLuFWfxoOfZ@projectcluster.2m1ao.mongodb.net/{db_name}?retryWrites=true&w=majority"
    mongo=pymongo.MongoClient(uri)
    result = []
    for doc in mongo.db[collection_name].find():
        result.append(doc)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
