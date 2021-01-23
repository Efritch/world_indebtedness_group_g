import panda as pd
import os
import csv


expenditure = pd.read_csv("data/Expenditure_Data_IMF.csv")
revenue = pd.read_csv("data/Revenue_Data_IMF.csv")
merged = expenditure.merge(revenue, on="")
