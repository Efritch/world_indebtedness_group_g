// Load all 4 data files so we can utilze
d3.queue()
.defer(d3.csv, "data/imf_lending_borrowing_data_groups.csv")
.defer(d3.csv, "data/imf_lending_borrowing_data.csv")
.defer(d3.csv, "data/Expenditure_Data_IMF.csv")
.defer(d3.csv, "data/Revenue_Data_IMF.csv")
.await(function(error, lendingBorrowingDataGroups, lendingBorrowingData,expenditureData,revenueData) {
    if (error) {
        console.error('Oh dear, something went wrong: ' + error);
    }
    else {
        // doStuff(file1, file2);
        console.log(lendingBorrowingDataGroups);
        console.log(lendingBorrowingData);
        console.log(expenditureData);
        console.log(revenueData);
    }
});