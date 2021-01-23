import pandas as pd
import os
import csv
import pyMongo


expenditure = pd.read_csv("data/Expenditure_Data_IMF.csv")
expenditure = expenditure.dropna(axis=0)
expenditure_df = pd.DataFrame(expenditure)
#print(expenditure_df)
revenue = pd.read_csv("data/Revenue_Data_IMF.csv")
revenue= revenue.dropna(axis=0)
revenue_df=pd.DataFrame(revenue)
merged = expenditure_df.merge(revenue_df, on="Country")
merged.to_csv("data/Rev_Exp_output.csv", index=False)
#print(merged)
merged_years = merged[["2017_x", "2018_x", "2019_x", "2020_x", "2017_y","2018_y", "2019_y","2020_y"]]
#print(merged_years)
merged_years.to_csv("data/Rev_Exp_years_output.csv", index=False)