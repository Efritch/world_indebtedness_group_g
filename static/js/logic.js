//Navbar Logic
// $(document).ready(function() {
//   $("#sidebarCollapse").on("click", function() {
//     $("#sidebar").toggleClass("active");
//     $(this).toggleClass("active");
//   });
// });

// set the dimensions and margins of the graph
var svgWidth = 1200;
var svgHeight = 750;
var margin = {top: 100, right: 100, bottom: 200, left: 200},
    chartWidth = svgWidth - margin.left - margin.right,
    chartHeight = svgHeight - margin.top - margin.bottom;

// append the svg object to the body of the page


function loadScatterplot(Year) { 
  d3.select("#my-dataviz").html("");
  var svg = d3.select("#my-dataviz")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr("transform",
          `translate(${margin.left}, ${margin.top})`);
 
//Read the data
  d3.csv("data/Revenue_Expenditure_data.csv", function(data) {    
      // var max = d3.max(data, d=> d.Revenue);
      // var min = d3.min(data, d=> d.Revenue)
      //var max = d3.max(data, d=> d.Expenditure)
      //console.log(max)
      // Add X axis
      
    var xScale = d3.scaleLinear()
      .domain(d3.extent(data, d =>d.Expenditure))
      .range([0, chartWidth]);
    svg.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(xScale))
      .append("text")
      .attr("transform", `translate(${chartWidth/2}, 60)`)
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .style("fill", "black")
      .text("Expenditure");

    
    // Add Y axis
    var yScale = d3.scaleLinear()
      // .domain(d3.extent(data, d =>d.Revenue))
      .domain([0,100])
      .range([chartHeight, 0]);
    svg.append("g")
      .call(d3.axisLeft(yScale))
      .append("text")
      .attr("transform", `translate(-50, ${chartHeight/2})`)
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .style("fill", "black")
      .text("Revenue");
    
    // -1- Create a tooltip div that is hidden by default:
    // var toolTip = d3.tip()
    //     .attr("class", "tooltip")
    //     .offset([80,-60])
    //     .html("Country: " + d.Country + d.Revenue + d.Expenditure);

    // svg.call(toolTip);

    // circleGroup.on("mouseover", d => toolTip.show(d,this));
    // circleGroup.on("mouseout", d =>toolTip.hide(d));

    //     .style("opacity", 0)
    //     .attr("class", "tooltip")
    //     .style("background-color", "black")
    //     .style("border-radius", "5px")
    //     .style("padding", "10px")
    //     .style("color", "white")

    // // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
    // var showTooltip = function(d) {
    //   tooltip
    //     .transition()
    //     .duration(200)
    //   tooltip
    //     .style("opacity", 1)
    //     .html("Country: " + d.Country + d.Revenue + d.Expenditure)
    //     .style("left", (d3.mouse(this)[0]+30) + "px")
    //     .style("top", (d3.mouse(this)[1]+30) + "px")
    // }
    // var moveTooltip = function(d) {
    //   tooltip
    //     .style("left", (d3.mouse(this)[0]+30) + "px")
    //     .style("top", (d3.mouse(this)[1]+30) + "px")
    // }
    // var hideTooltip = function(d) {
    //   tooltip
    //     .transition()
    //     .duration(200)
    //     .style("opacity", 0)
    // }

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
    
   
    //var data20 = data.filter(d => d.Year==yearSwitcher.currentYear);
    var yearData = data.filter(d => d.Year==Year);
    // Add circles
    circleGroup = svg.append("g")
      .attr("id", "circles")
      .selectAll("circle")
      .attr("transform", `translate(${chartHeight}, ${chartWidth})`)
      .data(yearData)
      .enter()
      .append("circle")
      .attr("cx", function (d) { 
        //console.log(d.Expenditure)
        return xScale(+d.Expenditure) } )
      .attr("cy", function (d) { return yScale(+d.Revenue) } )
      .attr("r", 10)
      .attr("stroke", "black")
      .style("fill", "blue")
      //.style("fill", myColor())
      .append("text")
      .text(function(d) {
        return `${d.Country}`;
      })
      .attr("dx", function(d) {           
          return xScale(+d.Expenditure);
      })
      .attr("text-anchor", "middle")
      .attr("dy", function(d) {
          return yScale(+d.Revenue);
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "10px")
      .style("fill", "black");
    svg.append("text")
      .attr("transform","translate(" + chartWidth/2 + ",0)")
      .style("text-anchor","middle")
      .attr("font-size", "30px")
      .text("The World's Expenditure vs Revenue in "+currentYear)
      .classed("title",true);
      
      //-1- Create a tooltip div that is hidden by default:
    var toolTip = d3.select("body")
        .append("div")
        .attr("class", "tooltip");
    circleGroup.on("mouseover", function(yearData){
      toolTip.style("display", "block");
      toolTip.html(`Country:<strong>${d.country}`)
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + "px");
    })
    .on("mouseout", function() {
      toolTip.style("display", "none");
    });

        // .offset([80,-60])
        // .html("Country: " + d.Country + d.Revenue + d.Expenditure);
  
      // svg.call(toolTip);
  
      // circleGroup.on("mouseover", d => toolTip.show(d,this));
      // circleGroup.on("mouseout", d =>toolTip.hide(d));

         
      // .on("mouseover", showTooltip )
      // .on("mousemove", moveTooltip )
      // .on("mouseleave", hideTooltip )
         
  })};
    ////////////////////////////////////On click update with new data////////////////////////////////////
  
d3.selectAll("button").on("click", function(){
        currentYear = d3.select(this).text()
        // console.log(currentYear);
        loadScatterplot(currentYear);
        });
      
    loadScatterplot(2020);