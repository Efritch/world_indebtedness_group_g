# Dependencies
from pymongo import MongoClient
import pandas as pd
import os
import json

# Connecting to the database
db_name = "world_indebtedness"
uri = f"mongodb+srv://web_user:Uj3z9lLuFWfxoOfZ@projectcluster.2m1ao.mongodb.net/{db_name}?retryWrites=true&w=majority"
mongo = MongoClient(uri)


# Defining the database collections
lend_borrow_col = mongo.db.lend_borrow
print(lend_borrow_col)
# lend_borrow_summary_col = db["lend_borrow_summary"]
# expenditure_data_col = db["expenditures"]
# revenue_data_col = db["revenues"]

# Reading in the .csv files
file_path_1 = os.path.join("data","imf_lending_borrowing_data_transpose.csv")
# file_path_2 = os.path.join("world_indebtedness_group_g","data","imf_lending_borrowing_data_groups.csv")
# file_path_3 = os.path.join("world_indebtedness_group_g","data","Expenditure_Data_IMF.csv")
# file_path_4 = os.path.join("world_indebtedness_group_g","data","Revenue_Data_IMF.csv")

lend_borrow = pd.read_csv(file_path_1, encoding="utf-8")
lend_borrow["Year"].astype("str", copy=False)
# lend_borrow_summary = pd.read.csv(file_path_2)
# expenditures = pd.read.csv(file_path_3)
# revenues = pd.read.csv(file_path_4)

# Converting .csv files to JSON objects
# lend_borrow.to_json(r'data/lend_borrow_data.json', orient='records', lines=True)
#lend_borrow_summary.to_json(r'world_indebtedness_group_g\data/lend_borrow_group_data.json')
#expenditures.to_json(r'world_indebtedness_group_g\data/expenditure_data.json')
#revenues.to_json(r'world_indebtedness_group_g\data/revenue_data.json')
#print(lend_borrow.to_dict("records"))
lend_borrow_col.update({}, lend_borrow.to_dict("records"), upsert=True)
