// Loop through the lending borrowing data groups
// collect all of the categories in one array and
// and all of the year data and then output for 
// whatever data is passed
function outputData(data) {
  // console.log(data.columns);
  let categoryColumn = data.columns[0];

  for (var i = 0; i < data.length; i++) {
    yearData = {};
    let category = data[i][categoryColumn]

    // rowData["category"] = category;

    if (category !== "" && category !== "©IMF, 2020") {
      console.log(category);
      for (yearIndex = 1990; yearIndex < 2026; yearIndex++) {
        // console.log(yearIndex);
        // console.log(data[i][yearIndex])
        yearData[yearIndex] = data[i][yearIndex];
      };
      console.log(yearData)
    };
  };
}

$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
    $(this).toggleClass("active");
  });
});


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
        console.log("imf_lending_borrowing_data_groups.csv");
        console.log('----------------------------------------------------');
        outputData(lendingBorrowingDataGroups);
        console.log("imf_lending_borrowing_data.csv");
        console.log('----------------------------------------------------');
        outputData(lendingBorrowingData);
        console.log("Expenditure_Data_IMF.csvv");
        console.log('----------------------------------------------------');
        outputData(expenditureData);
        console.log("Revenue_Data_IMF.csv");
        console.log('----------------------------------------------------');
        outputData(revenueData);
    }
});