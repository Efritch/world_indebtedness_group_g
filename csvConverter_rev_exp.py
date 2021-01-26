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
rev_exp_col = mongo.db.rev_exp
# print(rev_exp_col)


# Reading in the .csv files
file_path_1 = os.path.join("data","Rev_Exp_output.csv")
rev_exp = pd.read_csv(file_path_1, encoding="utf-8")
#lend_borrow["Year"].astype("str", copy=False)


# Loading the .csv file to MongoDB.
# print(rev_exp.to_dict("records")[0])
for record in rev_exp.to_dict("records"):
    new_record = {}
    for key, value in record.items():
        new_record[key.replace('.','')] = value
    rev_exp_col.insert_one(new_record)
