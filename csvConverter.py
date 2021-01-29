# Dependencies
from pymongo import MongoClient
import pandas as pd
import os
import json

# Connecting to the database
db_name = "world_indebtedness"
uri = f"mongodb+srv://web_user:Uj3z9lLuFWfxoOfZ@projectcluster.2m1ao.mongodb.net/{db_name}?retryWrites=true&w=majority"
mongo = MongoClient(uri)


# Defining the database collection
lend_borrow_col = mongo.db.lend_borrow
# print(lend_borrow_col)


# Reading in the .csv files
file_path_1 = os.path.join("data","imf_lending_borrowing_data_transpose.csv")
lend_borrow = pd.read_csv(file_path_1, encoding="utf-8")
lend_borrow["Year"].astype("str", copy=False)


# Loading the .csv file to MongoDB.
# print(lend_borrow.to_dict("records")[0])
for record in lend_borrow.to_dict("records"):
    new_record = {}
    for key, value in record.items():
        new_record[key.replace('.','')] = value
    lend_borrow_col.insert_one(new_record)

