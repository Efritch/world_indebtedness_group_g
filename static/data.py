import pandas as pd
import os
import csv
#from pymongo import MongoClient
import pymongo


# expenditure = pd.read_csv("data/Expenditure_Data_IMF.csv")
# expenditure = expenditure.dropna(axis=0)
# expenditure_df = pd.DataFrame(expenditure)
#print(expenditure_df)
# revenue = pd.read_csv("data/Revenue_Data_IMF.csv")
# revenue= revenue.dropna(axis=0)
# revenue_df=pd.DataFrame(revenue)
# merged = expenditure_df.merge(revenue_df, on="Country")
# merged.to_csv("data/Rev_Exp_output.csv", index=False)
#print(merged)
#merged_years = merged[["2017_x", "2018_x", "2019_x", "2020_x", "2017_y","2018_y", "2019_y","2020_y"]]
#print(merged_years)
#merged_years.to_csv("data/Rev_Exp_years_output.csv", index=False)
db_name = "world_indebtedness"
uri = f"mongodb://web_user:Uj3z9lLuFWfxoOfZ@projectcluster.2m1ao.mongodb.net/{db_name}?retryWrites=true&w=majority"
mongo = pymongo.MongoClient(uri)
revenue_expenditure_col = mongo.db.rev_exp
print(revenue_expenditure_col)

revenue_expenditure = pd.read_csv("data/Rev_Exp_years_output.csv")

revenue_expenditure_col.updateMany({}, revenue_expenditure.to_dict(), upsert =True)




