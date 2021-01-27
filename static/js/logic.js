<<<<<<< HEAD


// Navbar Logic
$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
    $(this).toggleClass("active");
  });
});
=======
// Loop through the lending borrowing data groups
// collect all of the categories in one array and
// and all of the year data and then output for 
// whatever data is passed
// function outputData(data) {
//   // console.log(data.columns);
//   let categoryColumn = data.columns[0];

//   for (var i = 0; i < data.length; i++) {
//     yearData = {};
//     let category = data[i][categoryColumn]

//     // rowData["category"] = category;

//     if (category !== "" && category !== "©IMF, 2020") {
//       console.log(category);
//       for (yearIndex = 1990; yearIndex < 2026; yearIndex++) {
//         // console.log(yearIndex);
//         // console.log(data[i][yearIndex])
//         yearData[yearIndex] = data[i][yearIndex];
//       };
//       console.log(yearData)
//     };
//   };
// }


// // Load all 4 data files so we can utilze
// d3.queue()
// .defer(d3.csv, "data/imf_lending_borrowing_data_groups.csv")
// .defer(d3.csv, "data/imf_lending_borrowing_data.csv")
// .defer(d3.csv, "data/Expenditure_Data_IMF.csv")
// .defer(d3.csv, "data/Revenue_Data_IMF.csv")
// .await(function(error, lendingBorrowingDataGroups, lendingBorrowingData,expenditureData,revenueData) {
//     if (error) {
//         console.error('Oh dear, something went wrong: ' + error);
//     }
//     else {
//         console.log("imf_lending_borrowing_data_groups.csv");
//         console.log('----------------------------------------------------');
//         outputData(lendingBorrowingDataGroups);
//         console.log("imf_lending_borrowing_data.csv");
//         console.log('----------------------------------------------------');
//         outputData(lendingBorrowingData);
//         console.log("Expenditure_Data_IMF.csvv");
//         console.log('----------------------------------------------------');
//         outputData(expenditureData);
//         console.log("Revenue_Data_IMF.csv");
//         console.log('----------------------------------------------------');
//         outputData(revenueData);
//     }
// });
>>>>>>> 80c7efc6bdc4a7a7718bdeaf19354385522a9319

//     if (category !== "" && category !== "©IMF, 2020") {
//       console.log(category);
//       for (yearIndex = 1990; yearIndex < 2026; yearIndex++) {
//         // console.log(yearIndex);
//         // console.log(data[i][yearIndex])
//         yearData[yearIndex] = data[i][yearIndex];
//       };
//       console.log(yearData)
//     };
//   };
// }


// // Load all 4 data files so we can utilze
// d3.queue()
// .defer(d3.csv, "data/imf_lending_borrowing_data_groups.csv")
// .defer(d3.csv, "data/imf_lending_borrowing_data.csv")
// .defer(d3.csv, "data/Expenditure_Data_IMF.csv")
// .defer(d3.csv, "data/Revenue_Data_IMF.csv")
// .await(function(error, lendingBorrowingDataGroups, lendingBorrowingData,expenditureData,revenueData) {
//     if (error) {
//         console.error('Oh dear, something went wrong: ' + error);
//     }
//     else {
//         console.log("imf_lending_borrowing_data_groups.csv");
//         console.log('----------------------------------------------------');
//         outputData(lendingBorrowingDataGroups);
//         console.log("imf_lending_borrowing_data.csv");
//         console.log('----------------------------------------------------');
//         outputData(lendingBorrowingData);
//         console.log("Expenditure_Data_IMF.csvv");
//         console.log('----------------------------------------------------');
//         outputData(expenditureData);
//         console.log("Revenue_Data_IMF.csv");
//         console.log('----------------------------------------------------');
//         outputData(revenueData);
//     }
// });



// set the dimensions and margins of the graph
var svgWidth = 1000;
var svgHeight = 800;
var margin = {top: 10, right: 20, bottom: 30, left: 50},
    chartWidth = svgWidth - margin.left - margin.right,
    chartHeight = svgHeight - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
  .append("g")
    .attr("transform",
          `translate(${margin.left}, ${margin.top})`);

//Read the data
d3.csv("data/Revenue_Expenditure_data.csv", function(dataInfo) {

  dataInfo.forEach(function (data){

  // Add X axis
  var xScale = d3.scaleLinear()
    .domain(d3.extent(dataInfo, d =>d.Expenditure))
    .range([0, chartWidth]);
  svg.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(d3.axisBottom(xScale))
    .append("text")
    .text("Expenditure")
    .attr("transform", `translate(${chartWidth/2}, 30)`)
    .attr("font-family", "sans-serif")
    .attr("font-size", "30px")
    .attr("color", "black");


  // Add Y axis
  var yScale = d3.scaleLinear()
    .domain(d3.extent(dataInfo, d =>d.Revenue))
    .range([chartHeight, 0]);
  svg.append("g")
    .call(d3.axisLeft(yScale))
    .append("text")
    .text("Revenue")
    .attr("transform", `translate(${chartHeight/2}, 10)`)
    .attr("font-family", "sans-serif")
    .attr("font-size", "30px")
    .attr("color", "black");

  // Add a scale for bubble size
  // var z = d3.scaleLinear()
  //   .domain([200000, 1310000000])
  //   .range([ 4, 40]);

  // Add a scale for bubble color
  // var myColor = d3.scaleOrdinal()
  //   .domain(["Country"])
  //   .range(d3.schemeSet2);

  // -1- Create a tooltip div that is hidden by default:
  var tooltip = d3.select("#my-dataviz")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")

  // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
  var showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Country: " + d.country)
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

  var myColor = function(value) {
    if (value = "") {  
      fill = 'grey';
  } else if ( value < 15) {  
      fill = 'grey';
  } else if (value => 15 && value < 30) {  
      fill = 'yellow';
  } else if (value => 30 && value < 40) {  
      fill = 'orange';
  } else if (value =>40 && value < 50) {  
      fill = 'red';
  }
  else if (value =>50) {  
    fill = 'purple';
  }
  }

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(dataInfo)
    .enter()
    .append("circle")
<<<<<<< HEAD
      .attr("class", "bubbles")
      .attr("cx", function (d) { return x(d.gdpPercap); } )
      .attr("cy", function (d) { return y(d.lifeExp); } )
      .attr("r", function (d) { return z(d.pop); } )
      .style("fill", function (d) { return myColor(d.continent); } )
    // -3- Trigger the functions
    .on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )

  })
// var someJavaScriptVar = '{{ db_data[0]}}';
// console.log(someJavaScriptVar);
=======
    .attr("class", "bubbles")
    .attr("cx", function (d) { return xScale(d.Expenditure.round(2)); } )
    .attr("cy", function (d) { return yScale(d.Revenue.round(2)); } )
    .attr("r", function (d) { return Math.log(d.Expenditure.round(2));})
    .style("fill", myColor(this))
    .append("text")
    .text(function(d) {
      return `${d.Country}`;
    })
    .attr("dx", function(d) {           
        return xScale(d.Expenditure);
    })
    .attr("text-anchor", "middle")
    .attr("dy", function(d) {
        return yScale(d.Revenue);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
    .attr("fill", "red")

  // -3- Trigger the functions
  .on("mouseover", showTooltip )
  .on("mousemove", moveTooltip )
  .on("mouseleave", hideTooltip )

  })
});
>>>>>>> 80c7efc6bdc4a7a7718bdeaf19354385522a9319
