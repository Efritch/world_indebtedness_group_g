function readLendingBorrowingDataGroups() {

    // Load data from hours-of-tv-watched.csv
    d3.csv("data/imf_lending_borrowing_data_groups.csv").then(function(lendingBorrowingDataGroups) {
        // console.log(lendingBorrowingDataGroups);
        // for (var i = 0; i < lendingBorrowingDataGroups.length; i++) {
        //     let category = lendingBorrowingDataGroups[i]["Net lending/borrowing (also referred as overall balance) (% of GDP)"]
        //     console.log(lendingBorrowingDataGroups[i]["Net lending/borrowing (also referred as overall balance) (% of GDP)"]);
        // }

        for (var i = 0; i < lendingBorrowingDataGroups.length; i++) {
            let category = lendingBorrowingDataGroups[i]["Net lending/borrowing (also referred as overall balance) (% of GDP)"]

            if (category !== "" && category !== "©IMF, 2020") {
                console.log(category);

                for (yearIndex = 1990; yearIndex < 2026; yearIndex++) {
                    console.log(yearIndex);
                    console.log(lendingBorrowingDataGroups[i][yearIndex])
                };
            };
        };
    })
    .catch(function(error){
        console.log(error);  
     });
}

readLendingBorrowingDataGroups();

