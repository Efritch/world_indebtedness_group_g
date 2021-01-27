import pandas as pd
import os
import csv
from pymongo import MongoClient



# expenditure = pd.read_csv("data/Expenditure_Data_IMF.csv")
# expenditure = expenditure.dropna(axis=0)
# expenditure_df = pd.DataFrame(expenditure)
# print(expenditure_df)
# revenue = pd.read_csv("data/Revenue_Data_IMF.csv")
# revenue= revenue.dropna(axis=0)
# revenue_df=pd.DataFrame(revenue)
# merged = expenditure_df.merge(revenue_df, on="Country")
# merged.to_csv("data/Rev_Exp_output.csv", index=False)
# print(merged)
# merged_years = merged[["Country","2017_x", "2018_x", "2019_x", "2020_x", "2017_y","2018_y", "2019_y","2020_y"]]
# print(merged_years)
# merged_years.to_csv("data/Rev_Exp_years_output.csv", index=False)

db_name = "world_indebtedness"
uri = f"mongodb://web_user:Uj3z9lLuFWfxoOfZ@projectcluster.2m1ao.mongodb.net/{db_name}?retryWrites=true&w=majority"
mongo = MongoClient(uri)
rev_exp_col = mongo.db.rev_exp

rev_exp = pd.read_csv("data/Revenue_Expenditure_data.csv", encoding="utf-8")
rev_exp["Year"]astype("str", copy=False)
for record in rev_exp.to_dict("records"):
    new_record = {}
    for key, value in record.items():
        new_record[key.replace('.',"")] = value
    rev_exp_col.insert_one(new_record)





