//Navbar Logic
// $(document).ready(function() {
//   $("#sidebarCollapse").on("click", function() {
//     $("#sidebar").toggleClass("active");
//     $(this).toggleClass("active");
//   });
// });

// set the dimensions and margins of the graph
var svgWidth = 1200;
var svgHeight = 600;
var margin = {top: 50, right: 100, bottom: 80, left: 200},
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
 data = [
  {
    "Country": "Algeria",
    "Year": 2017,
    "Revenue": 32.55787099,
    "Expenditure": 39.2049333
  },
  {
    "Country": "Algeria",
    "Year": 2018,
    "Revenue": 33.6980157,
    "Expenditure": 38.16609902
  },
  {
    "Country": "Algeria",
    "Year": 2019,
    "Revenue": 32.60282382,
    "Expenditure": 38.24069924
  },
  {
    "Country": "Algeria",
    "Year": 2020,
    "Revenue": 28.15190811,
    "Expenditure": 39.63925727
  },
  {
    "Country": "Angola",
    "Year": 2017,
    "Revenue": 17.50183043,
    "Expenditure": 23.80564966
  },
  {
    "Country": "Angola",
    "Year": 2018,
    "Revenue": 21.88347467,
    "Expenditure": 19.69477508
  },
  {
    "Country": "Angola",
    "Year": 2019,
    "Revenue": 20.01459823,
    "Expenditure": 19.22274468
  },
  {
    "Country": "Angola",
    "Year": 2020,
    "Revenue": 17.9250267,
    "Expenditure": 20.73253093
  },
  {
    "Country": "Argentina",
    "Year": 2017,
    "Revenue": 34.42811289,
    "Expenditure": 41.12145402
  },
  {
    "Country": "Argentina",
    "Year": 2018,
    "Revenue": 33.97369761,
    "Expenditure": 39.49045409
  },
  {
    "Country": "Argentina",
    "Year": 2019,
    "Revenue": 33.85902607,
    "Expenditure": 38.32673969
  },
  {
    "Country": "Argentina",
    "Year": 2020,
    "Revenue": 0,
    "Expenditure": 0
  },
  {
    "Country": "Australia",
    "Year": 2017,
    "Revenue": 35.02422793,
    "Expenditure": 36.74072747
  },
  {
    "Country": "Australia",
    "Year": 2018,
    "Revenue": 35.64110326,
    "Expenditure": 36.87566466
  },
  {
    "Country": "Australia",
    "Year": 2019,
    "Revenue": 34.55736222,
    "Expenditure": 38.45089813
  },
  {
    "Country": "Australia",
    "Year": 2020,
    "Revenue": 34.43074779,
    "Expenditure": 44.49445812
  },
  {
    "Country": "Austria",
    "Year": 2017,
    "Revenue": 48.23190271,
    "Expenditure": 48.93109779
  },
  {
    "Country": "Austria",
    "Year": 2018,
    "Revenue": 48.84736452,
    "Expenditure": 48.64965346
  },
  {
    "Country": "Austria",
    "Year": 2019,
    "Revenue": 48.94494124,
    "Expenditure": 48.21019863
  },
  {
    "Country": "Austria",
    "Year": 2020,
    "Revenue": 48.43431801,
    "Expenditure": 58.33449436
  },
  {
    "Country": "Azerbaijan",
    "Year": 2017,
    "Revenue": 34.22697796,
    "Expenditure": 35.59312045
  },
  {
    "Country": "Azerbaijan",
    "Year": 2018,
    "Revenue": 38.61184638,
    "Expenditure": 33.13382073
  },
  {
    "Country": "Azerbaijan",
    "Year": 2019,
    "Revenue": 41.52085625,
    "Expenditure": 33.42273981
  },
  {
    "Country": "Azerbaijan",
    "Year": 2020,
    "Revenue": 35.97488688,
    "Expenditure": 42.28733219
  },
  {
    "Country": "Bangladesh",
    "Year": 2017,
    "Revenue": 10.2199831,
    "Expenditure": 13.55956634
  },
  {
    "Country": "Bangladesh",
    "Year": 2018,
    "Revenue": 9.661141962,
    "Expenditure": 14.30188671
  },
  {
    "Country": "Bangladesh",
    "Year": 2019,
    "Revenue": 9.745337727,
    "Expenditure": 15.10718808
  },
  {
    "Country": "Bangladesh",
    "Year": 2020,
    "Revenue": 8.172987167,
    "Expenditure": 14.9698536
  },
  {
    "Country": "Belarus",
    "Year": 2017,
    "Revenue": 38.70556403,
    "Expenditure": 39.04208857
  },
  {
    "Country": "Belarus",
    "Year": 2018,
    "Revenue": 39.64942071,
    "Expenditure": 37.84462233
  },
  {
    "Country": "Belarus",
    "Year": 2019,
    "Revenue": 39.22450908,
    "Expenditure": 38.59865509
  },
  {
    "Country": "Belarus",
    "Year": 2020,
    "Revenue": 36.03762718,
    "Expenditure": 40.72919556
  },
  {
    "Country": "Belgium",
    "Year": 2017,
    "Revenue": 51.22848167,
    "Expenditure": 51.91917606
  },
  {
    "Country": "Belgium",
    "Year": 2018,
    "Revenue": 51.42908748,
    "Expenditure": 52.23695463
  },
  {
    "Country": "Belgium",
    "Year": 2019,
    "Revenue": 50.36464906,
    "Expenditure": 52.27322786
  },
  {
    "Country": "Belgium",
    "Year": 2020,
    "Revenue": 49.9380529,
    "Expenditure": 61.2915079
  },
  {
    "Country": "Benin",
    "Year": 2017,
    "Revenue": 13.58122705,
    "Expenditure": 17.78497173
  },
  {
    "Country": "Benin",
    "Year": 2018,
    "Revenue": 13.59107181,
    "Expenditure": 16.56750801
  },
  {
    "Country": "Benin",
    "Year": 2019,
    "Revenue": 14.06153341,
    "Expenditure": 14.6011117
  },
  {
    "Country": "Benin",
    "Year": 2020,
    "Revenue": 13.67770203,
    "Expenditure": 17.41977872
  },
  {
    "Country": "Bolivia",
    "Year": 2017,
    "Revenue": 30.77399123,
    "Expenditure": 38.59775622
  },
  {
    "Country": "Bolivia",
    "Year": 2018,
    "Revenue": 28.95110064,
    "Expenditure": 37.09485575
  },
  {
    "Country": "Bolivia",
    "Year": 2019,
    "Revenue": 28.84492728,
    "Expenditure": 36.06655671
  },
  {
    "Country": "Bolivia",
    "Year": 2020,
    "Revenue": 27.57001536,
    "Expenditure": 36.13463283
  },
  {
    "Country": "Brazil",
    "Year": 2017,
    "Revenue": 30.44614524,
    "Expenditure": 38.3028057
  },
  {
    "Country": "Brazil",
    "Year": 2018,
    "Revenue": 30.92500774,
    "Expenditure": 38.08842656
  },
  {
    "Country": "Brazil",
    "Year": 2019,
    "Revenue": 31.84411206,
    "Expenditure": 37.8580438
  },
  {
    "Country": "Brazil",
    "Year": 2020,
    "Revenue": 28.04325076,
    "Expenditure": 44.82456566
  },
  {
    "Country": "Burkina Faso",
    "Year": 2017,
    "Revenue": 19.24651768,
    "Expenditure": 26.13070409
  },
  {
    "Country": "Burkina Faso",
    "Year": 2018,
    "Revenue": 19.4029983,
    "Expenditure": 23.75777019
  },
  {
    "Country": "Burkina Faso",
    "Year": 2019,
    "Revenue": 20.39933589,
    "Expenditure": 23.86765131
  },
  {
    "Country": "Burkina Faso",
    "Year": 2020,
    "Revenue": 22.07560911,
    "Expenditure": 28.16033992
  },
  {
    "Country": "Cambodia",
    "Year": 2017,
    "Revenue": 21.59977876,
    "Expenditure": 22.37486924
  },
  {
    "Country": "Cambodia",
    "Year": 2018,
    "Revenue": 23.85114303,
    "Expenditure": 23.17469665
  },
  {
    "Country": "Cambodia",
    "Year": 2019,
    "Revenue": 26.23390939,
    "Expenditure": 23.0201357
  },
  {
    "Country": "Cambodia",
    "Year": 2020,
    "Revenue": 21.61597859,
    "Expenditure": 24.01780313
  },
  {
    "Country": "Cameroon",
    "Year": 2017,
    "Revenue": 14.95394391,
    "Expenditure": 19.82568887
  },
  {
    "Country": "Cameroon",
    "Year": 2018,
    "Revenue": 16.05866276,
    "Expenditure": 18.54628735
  },
  {
    "Country": "Cameroon",
    "Year": 2019,
    "Revenue": 15.74264523,
    "Expenditure": 19.05396354
  },
  {
    "Country": "Cameroon",
    "Year": 2020,
    "Revenue": 13.2023119,
    "Expenditure": 17.32689338
  },
  {
    "Country": "Canada",
    "Year": 2017,
    "Revenue": 40.43585865,
    "Expenditure": 40.56196164
  },
  {
    "Country": "Canada",
    "Year": 2018,
    "Revenue": 40.65056371,
    "Expenditure": 41.04726205
  },
  {
    "Country": "Canada",
    "Year": 2019,
    "Revenue": 40.81570292,
    "Expenditure": 41.16207542
  },
  {
    "Country": "Canada",
    "Year": 2020,
    "Revenue": 37.39637079,
    "Expenditure": 57.32016826
  },
  {
    "Country": "Chad",
    "Year": 2017,
    "Revenue": 14.64863556,
    "Expenditure": 14.88007968
  },
  {
    "Country": "Chad",
    "Year": 2018,
    "Revenue": 15.28567664,
    "Expenditure": 13.34967233
  },
  {
    "Country": "Chad",
    "Year": 2019,
    "Revenue": 14.24905465,
    "Expenditure": 14.42110198
  },
  {
    "Country": "Chad",
    "Year": 2020,
    "Revenue": 18.67245046,
    "Expenditure": 19.31128047
  },
  {
    "Country": "Chile",
    "Year": 2017,
    "Revenue": 22.81322794,
    "Expenditure": 25.43482273
  },
  {
    "Country": "Chile",
    "Year": 2018,
    "Revenue": 23.89645822,
    "Expenditure": 25.36128968
  },
  {
    "Country": "Chile",
    "Year": 2019,
    "Revenue": 23.20196892,
    "Expenditure": 25.84942649
  },
  {
    "Country": "Chile",
    "Year": 2020,
    "Revenue": 20.64307924,
    "Expenditure": 29.34797886
  },
  {
    "Country": "China, People's Republic of",
    "Year": 2017,
    "Revenue": 27.81138885,
    "Expenditure": 31.64680876
  },
  {
    "Country": "China, People's Republic of",
    "Year": 2018,
    "Revenue": 28.27214333,
    "Expenditure": 32.92704161
  },
  {
    "Country": "China, People's Republic of",
    "Year": 2019,
    "Revenue": 27.65976593,
    "Expenditure": 33.9718687
  },
  {
    "Country": "China, People's Republic of",
    "Year": 2020,
    "Revenue": 24.37515632,
    "Expenditure": 36.26211858
  },
  {
    "Country": "Colombia",
    "Year": 2017,
    "Revenue": 26.82497218,
    "Expenditure": 29.32049071
  },
  {
    "Country": "Colombia",
    "Year": 2018,
    "Revenue": 30.04682014,
    "Expenditure": 34.7232779
  },
  {
    "Country": "Colombia",
    "Year": 2019,
    "Revenue": 29.35106685,
    "Expenditure": 31.85796305
  },
  {
    "Country": "Colombia",
    "Year": 2020,
    "Revenue": 25.9735328,
    "Expenditure": 35.45101283
  },
  {
    "Country": "Congo, Dem. Rep. of the",
    "Year": 2017,
    "Revenue": 11.74251327,
    "Expenditure": 10.38772303
  },
  {
    "Country": "Congo, Dem. Rep. of the",
    "Year": 2018,
    "Revenue": 11.09072573,
    "Expenditure": 11.1388736
  },
  {
    "Country": "Congo, Dem. Rep. of the",
    "Year": 2019,
    "Revenue": 10.8704853,
    "Expenditure": 12.92301373
  },
  {
    "Country": "Congo, Dem. Rep. of the",
    "Year": 2020,
    "Revenue": 10.57167776,
    "Expenditure": 12.46770215
  },
  {
    "Country": "Congo, Republic of ",
    "Year": 2017,
    "Revenue": 22.39253078,
    "Expenditure": 28.32483956
  },
  {
    "Country": "Congo, Republic of ",
    "Year": 2018,
    "Revenue": 25.37558017,
    "Expenditure": 19.61660275
  },
  {
    "Country": "Congo, Republic of ",
    "Year": 2019,
    "Revenue": 27.25127825,
    "Expenditure": 21.42878636
  },
  {
    "Country": "Congo, Republic of ",
    "Year": 2020,
    "Revenue": 22.091766,
    "Expenditure": 24.19772264
  },
  {
    "Country": "Croatia",
    "Year": 2017,
    "Revenue": 46.14067741,
    "Expenditure": 45.34368374
  },
  {
    "Country": "Croatia",
    "Year": 2018,
    "Revenue": 46.51596495,
    "Expenditure": 46.29409031
  },
  {
    "Country": "Croatia",
    "Year": 2019,
    "Revenue": 47.51702455,
    "Expenditure": 47.12380843
  },
  {
    "Country": "Croatia",
    "Year": 2020,
    "Revenue": 42.54268327,
    "Expenditure": 50.62116798
  },
  {
    "Country": "Cyprus",
    "Year": 2017,
    "Revenue": 38.5659466,
    "Expenditure": 36.90424507
  },
  {
    "Country": "Cyprus",
    "Year": 2018,
    "Revenue": 39.21032463,
    "Expenditure": 43.44302624
  },
  {
    "Country": "Cyprus",
    "Year": 2019,
    "Revenue": 41.23187977,
    "Expenditure": 39.49652976
  },
  {
    "Country": "Cyprus",
    "Year": 2020,
    "Revenue": 42.16390897,
    "Expenditure": 47.74016043
  },
  {
    "Country": "Czech Republic",
    "Year": 2017,
    "Revenue": 40.48428966,
    "Expenditure": 38.9831772
  },
  {
    "Country": "Czech Republic",
    "Year": 2018,
    "Revenue": 41.50891349,
    "Expenditure": 40.5981882
  },
  {
    "Country": "Czech Republic",
    "Year": 2019,
    "Revenue": 41.42227382,
    "Expenditure": 41.15483796
  },
  {
    "Country": "Czech Republic",
    "Year": 2020,
    "Revenue": 40.60859149,
    "Expenditure": 47.91113391
  },
  {
    "Country": "C�te d'Ivoire",
    "Year": 2017,
    "Revenue": 15.10073943,
    "Expenditure": 18.43351229
  },
  {
    "Country": "C�te d'Ivoire",
    "Year": 2018,
    "Revenue": 14.85845291,
    "Expenditure": 17.80312486
  },
  {
    "Country": "C�te d'Ivoire",
    "Year": 2019,
    "Revenue": 15.02919102,
    "Expenditure": 17.31716432
  },
  {
    "Country": "C�te d'Ivoire",
    "Year": 2020,
    "Revenue": 14.35964599,
    "Expenditure": 19.75969837
  },
  {
    "Country": "Denmark",
    "Year": 2017,
    "Revenue": 52.7603495,
    "Expenditure": 51.2400091
  },
  {
    "Country": "Denmark",
    "Year": 2018,
    "Revenue": 51.41926326,
    "Expenditure": 50.94271744
  },
  {
    "Country": "Denmark",
    "Year": 2019,
    "Revenue": 53.49938453,
    "Expenditure": 49.69235349
  },
  {
    "Country": "Denmark",
    "Year": 2020,
    "Revenue": 53.0838673,
    "Expenditure": 57.07192466
  },
  {
    "Country": "Dominican Republic",
    "Year": 2017,
    "Revenue": 14.01381645,
    "Expenditure": 17.10134019
  },
  {
    "Country": "Dominican Republic",
    "Year": 2018,
    "Revenue": 14.1558382,
    "Expenditure": 16.31622966
  },
  {
    "Country": "Dominican Republic",
    "Year": 2019,
    "Revenue": 14.39599865,
    "Expenditure": 16.59139188
  },
  {
    "Country": "Dominican Republic",
    "Year": 2020,
    "Revenue": 12.49961716,
    "Expenditure": 20.28568895
  },
  {
    "Country": "Ecuador",
    "Year": 2017,
    "Revenue": 32.04968282,
    "Expenditure": 36.51100796
  },
  {
    "Country": "Ecuador",
    "Year": 2018,
    "Revenue": 35.32482472,
    "Expenditure": 38.50017613
  },
  {
    "Country": "Ecuador",
    "Year": 2019,
    "Revenue": 33.42852131,
    "Expenditure": 36.59769883
  },
  {
    "Country": "Ecuador",
    "Year": 2020,
    "Revenue": 30.09291746,
    "Expenditure": 39.01283512
  },
  {
    "Country": "Egypt",
    "Year": 2017,
    "Revenue": 21.76108934,
    "Expenditure": 32.18980404
  },
  {
    "Country": "Egypt",
    "Year": 2018,
    "Revenue": 20.69677514,
    "Expenditure": 30.10727002
  },
  {
    "Country": "Egypt",
    "Year": 2019,
    "Revenue": 20.12042427,
    "Expenditure": 27.5291152
  },
  {
    "Country": "Egypt",
    "Year": 2020,
    "Revenue": 19.15909585,
    "Expenditure": 26.64786012
  },
  {
    "Country": "Estonia",
    "Year": 2017,
    "Revenue": 38.49432823,
    "Expenditure": 38.87332209
  },
  {
    "Country": "Estonia",
    "Year": 2018,
    "Revenue": 38.65481201,
    "Expenditure": 39.11809916
  },
  {
    "Country": "Estonia",
    "Year": 2019,
    "Revenue": 38.5897715,
    "Expenditure": 38.98495965
  },
  {
    "Country": "Estonia",
    "Year": 2020,
    "Revenue": 33.92727628,
    "Expenditure": 40.75651309
  },
  {
    "Country": "Ethiopia",
    "Year": 2017,
    "Revenue": 14.74335027,
    "Expenditure": 17.98671978
  },
  {
    "Country": "Ethiopia",
    "Year": 2018,
    "Revenue": 13.07028981,
    "Expenditure": 16.09952697
  },
  {
    "Country": "Ethiopia",
    "Year": 2019,
    "Revenue": 12.79334215,
    "Expenditure": 15.32161368
  },
  {
    "Country": "Ethiopia",
    "Year": 2020,
    "Revenue": 11.45633039,
    "Expenditure": 15.0050378
  },
  {
    "Country": "Finland",
    "Year": 2017,
    "Revenue": 53.04979795,
    "Expenditure": 53.73451421
  },
  {
    "Country": "Finland",
    "Year": 2018,
    "Revenue": 52.5258707,
    "Expenditure": 53.38437572
  },
  {
    "Country": "Finland",
    "Year": 2019,
    "Revenue": 52.29196345,
    "Expenditure": 53.19903391
  },
  {
    "Country": "Finland",
    "Year": 2020,
    "Revenue": 53.0936219,
    "Expenditure": 59.93729619
  },
  {
    "Country": "France",
    "Year": 2017,
    "Revenue": 53.54503357,
    "Expenditure": 56.47898654
  },
  {
    "Country": "France",
    "Year": 2018,
    "Revenue": 53.39640537,
    "Expenditure": 55.66337257
  },
  {
    "Country": "France",
    "Year": 2019,
    "Revenue": 52.56457084,
    "Expenditure": 55.56282949
  },
  {
    "Country": "France",
    "Year": 2020,
    "Revenue": 52.32065732,
    "Expenditure": 63.08969853
  },
  {
    "Country": "Germany",
    "Year": 2017,
    "Revenue": 45.55885836,
    "Expenditure": 44.19695938
  },
  {
    "Country": "Germany",
    "Year": 2018,
    "Revenue": 46.29488054,
    "Expenditure": 44.45824557
  },
  {
    "Country": "Germany",
    "Year": 2019,
    "Revenue": 46.6957568,
    "Expenditure": 45.17446833
  },
  {
    "Country": "Germany",
    "Year": 2020,
    "Revenue": 45.73959421,
    "Expenditure": 53.91411899
  },
  {
    "Country": "Ghana",
    "Year": 2017,
    "Revenue": 13.94091538,
    "Expenditure": 18.00190814
  },
  {
    "Country": "Ghana",
    "Year": 2018,
    "Revenue": 14.47895258,
    "Expenditure": 21.45074118
  },
  {
    "Country": "Ghana",
    "Year": 2019,
    "Revenue": 13.73813593,
    "Expenditure": 21.07882368
  },
  {
    "Country": "Ghana",
    "Year": 2020,
    "Revenue": 11.8409025,
    "Expenditure": 28.25723295
  },
  {
    "Country": "Greece",
    "Year": 2017,
    "Revenue": 48.43855775,
    "Expenditure": 47.3967573
  },
  {
    "Country": "Greece",
    "Year": 2018,
    "Revenue": 47.79226263,
    "Expenditure": 46.91902076
  },
  {
    "Country": "Greece",
    "Year": 2019,
    "Revenue": 46.76350717,
    "Expenditure": 46.19750768
  },
  {
    "Country": "Greece",
    "Year": 2020,
    "Revenue": 48.30321689,
    "Expenditure": 57.29740176
  },
  {
    "Country": "Guinea",
    "Year": 2017,
    "Revenue": 15.26670154,
    "Expenditure": 17.32598367
  },
  {
    "Country": "Guinea",
    "Year": 2018,
    "Revenue": 14.54519816,
    "Expenditure": 15.60838987
  },
  {
    "Country": "Guinea",
    "Year": 2019,
    "Revenue": 14.12906004,
    "Expenditure": 14.59356944
  },
  {
    "Country": "Guinea",
    "Year": 2020,
    "Revenue": 13.59445341,
    "Expenditure": 17.30143139
  },
  {
    "Country": "Haiti",
    "Year": 2017,
    "Revenue": 17.73945213,
    "Expenditure": 17.69990244
  },
  {
    "Country": "Haiti",
    "Year": 2018,
    "Revenue": 17.26844682,
    "Expenditure": 18.98695981
  },
  {
    "Country": "Haiti",
    "Year": 2019,
    "Revenue": 12.15300497,
    "Expenditure": 14.43114057
  },
  {
    "Country": "Haiti",
    "Year": 2020,
    "Revenue": 13.82026618,
    "Expenditure": 19.6897991
  },
  {
    "Country": "Honduras",
    "Year": 2017,
    "Revenue": 26.49077552,
    "Expenditure": 26.89915623
  },
  {
    "Country": "Honduras",
    "Year": 2018,
    "Revenue": 26.46096124,
    "Expenditure": 26.26294596
  },
  {
    "Country": "Honduras",
    "Year": 2019,
    "Revenue": 25.80719197,
    "Expenditure": 25.71882011
  },
  {
    "Country": "Honduras",
    "Year": 2020,
    "Revenue": 25.53302473,
    "Expenditure": 28.62443969
  },
  {
    "Country": "Hong Kong SAR",
    "Year": 2017,
    "Revenue": 22.85244978,
    "Expenditure": 17.3600249
  },
  {
    "Country": "Hong Kong SAR",
    "Year": 2018,
    "Revenue": 20.74179818,
    "Expenditure": 18.39194406
  },
  {
    "Country": "Hong Kong SAR",
    "Year": 2019,
    "Revenue": 19.40982047,
    "Expenditure": 20.92031698
  },
  {
    "Country": "Hong Kong SAR",
    "Year": 2020,
    "Revenue": 16.7537656,
    "Expenditure": 28.54680852
  },
  {
    "Country": "Hungary",
    "Year": 2017,
    "Revenue": 44.51721729,
    "Expenditure": 46.97345888
  },
  {
    "Country": "Hungary",
    "Year": 2018,
    "Revenue": 44.52122232,
    "Expenditure": 46.6697792
  },
  {
    "Country": "Hungary",
    "Year": 2019,
    "Revenue": 44.00301934,
    "Expenditure": 46.05071851
  },
  {
    "Country": "Hungary",
    "Year": 2020,
    "Revenue": 43.81142715,
    "Expenditure": 52.08971822
  },
  {
    "Country": "Iceland",
    "Year": 2017,
    "Revenue": 43.51771459,
    "Expenditure": 42.93391262
  },
  {
    "Country": "Iceland",
    "Year": 2018,
    "Revenue": 43.08305358,
    "Expenditure": 42.26520982
  },
  {
    "Country": "Iceland",
    "Year": 2019,
    "Revenue": 40.85080651,
    "Expenditure": 41.84411443
  },
  {
    "Country": "Iceland",
    "Year": 2020,
    "Revenue": 38.04307961,
    "Expenditure": 48.09251372
  },
  {
    "Country": "India",
    "Year": 2017,
    "Revenue": 19.85646853,
    "Expenditure": 26.21723581
  },
  {
    "Country": "India",
    "Year": 2018,
    "Revenue": 20.23898888,
    "Expenditure": 26.50865272
  },
  {
    "Country": "India",
    "Year": 2019,
    "Revenue": 19.30180512,
    "Expenditure": 27.51964907
  },
  {
    "Country": "India",
    "Year": 2020,
    "Revenue": 18.08046765,
    "Expenditure": 31.15742836
  },
  {
    "Country": "Indonesia",
    "Year": 2017,
    "Revenue": 14.05331664,
    "Expenditure": 16.56237752
  },
  {
    "Country": "Indonesia",
    "Year": 2018,
    "Revenue": 14.88115766,
    "Expenditure": 16.6313568
  },
  {
    "Country": "Indonesia",
    "Year": 2019,
    "Revenue": 14.1525352,
    "Expenditure": 16.38156805
  },
  {
    "Country": "Indonesia",
    "Year": 2020,
    "Revenue": 11.8071827,
    "Expenditure": 18.12199438
  },
  {
    "Country": "Iran",
    "Year": 2017,
    "Revenue": 17.53223809,
    "Expenditure": 19.34882486
  },
  {
    "Country": "Iran",
    "Year": 2018,
    "Revenue": 16.1297468,
    "Expenditure": 18.0635819
  },
  {
    "Country": "Iran",
    "Year": 2019,
    "Revenue": 11.5226482,
    "Expenditure": 17.02394263
  },
  {
    "Country": "Iran",
    "Year": 2020,
    "Revenue": 9.378535031,
    "Expenditure": 18.90782707
  },
  {
    "Country": "Ireland",
    "Year": 2017,
    "Revenue": 25.67002505,
    "Expenditure": 25.99435282
  },
  {
    "Country": "Ireland",
    "Year": 2018,
    "Revenue": 25.15586372,
    "Expenditure": 25.03980247
  },
  {
    "Country": "Ireland",
    "Year": 2019,
    "Revenue": 24.57193513,
    "Expenditure": 24.19579437
  },
  {
    "Country": "Ireland",
    "Year": 2020,
    "Revenue": 23.3604252,
    "Expenditure": 29.35563397
  },
  {
    "Country": "Israel",
    "Year": 2017,
    "Revenue": 37.7554791,
    "Expenditure": 38.86926964
  },
  {
    "Country": "Israel",
    "Year": 2018,
    "Revenue": 36.01722521,
    "Expenditure": 39.63985099
  },
  {
    "Country": "Israel",
    "Year": 2019,
    "Revenue": 35.26932202,
    "Expenditure": 39.17929445
  },
  {
    "Country": "Israel",
    "Year": 2020,
    "Revenue": 33.60857637,
    "Expenditure": 46.54518115
  },
  {
    "Country": "Italy",
    "Year": 2017,
    "Revenue": 46.31753094,
    "Expenditure": 48.76254828
  },
  {
    "Country": "Italy",
    "Year": 2018,
    "Revenue": 46.34117479,
    "Expenditure": 48.54051257
  },
  {
    "Country": "Italy",
    "Year": 2019,
    "Revenue": 47.06927752,
    "Expenditure": 48.70834301
  },
  {
    "Country": "Italy",
    "Year": 2020,
    "Revenue": 46.73637423,
    "Expenditure": 59.71767329
  },
  {
    "Country": "Japan",
    "Year": 2017,
    "Revenue": 34.20281907,
    "Expenditure": 37.31926549
  },
  {
    "Country": "Japan",
    "Year": 2018,
    "Revenue": 35.0300822,
    "Expenditure": 37.52635312
  },
  {
    "Country": "Japan",
    "Year": 2019,
    "Revenue": 34.38498988,
    "Expenditure": 37.68613133
  },
  {
    "Country": "Japan",
    "Year": 2020,
    "Revenue": 33.9632155,
    "Expenditure": 48.11376484
  },
  {
    "Country": "Kazakhstan",
    "Year": 2017,
    "Revenue": 19.8224096,
    "Expenditure": 24.08791833
  },
  {
    "Country": "Kazakhstan",
    "Year": 2018,
    "Revenue": 21.4261923,
    "Expenditure": 18.84662792
  },
  {
    "Country": "Kazakhstan",
    "Year": 2019,
    "Revenue": 19.67895037,
    "Expenditure": 20.24849329
  },
  {
    "Country": "Kazakhstan",
    "Year": 2020,
    "Revenue": 17.84640251,
    "Expenditure": 23.12068792
  },
  {
    "Country": "Kenya",
    "Year": 2017,
    "Revenue": 18.22803788,
    "Expenditure": 26.06383417
  },
  {
    "Country": "Kenya",
    "Year": 2018,
    "Revenue": 18.22304973,
    "Expenditure": 25.5992037
  },
  {
    "Country": "Kenya",
    "Year": 2019,
    "Revenue": 17.68009955,
    "Expenditure": 25.4143194
  },
  {
    "Country": "Kenya",
    "Year": 2020,
    "Revenue": 16.73826443,
    "Expenditure": 25.123286
  },
  {
    "Country": "Korea, Republic of",
    "Year": 2017,
    "Revenue": 21.82597454,
    "Expenditure": 19.63786965
  },
  {
    "Country": "Korea, Republic of",
    "Year": 2018,
    "Revenue": 22.94593288,
    "Expenditure": 20.38291583
  },
  {
    "Country": "Korea, Republic of",
    "Year": 2019,
    "Revenue": 22.98795471,
    "Expenditure": 22.615112
  },
  {
    "Country": "Korea, Republic of",
    "Year": 2020,
    "Revenue": 22.8842975,
    "Expenditure": 26.11895491
  },
  {
    "Country": "Kuwait",
    "Year": 2017,
    "Revenue": 57.65091639,
    "Expenditure": 51.38484114
  },
  {
    "Country": "Kuwait",
    "Year": 2018,
    "Revenue": 58.42490132,
    "Expenditure": 49.37991186
  },
  {
    "Country": "Kuwait",
    "Year": 2019,
    "Revenue": 58.12499194,
    "Expenditure": 52.74400387
  },
  {
    "Country": "Kuwait",
    "Year": 2020,
    "Revenue": 56.30105087,
    "Expenditure": 64.79333113
  },
  {
    "Country": "Kyrgyz Republic",
    "Year": 2017,
    "Revenue": 33.28721752,
    "Expenditure": 37.02014382
  },
  {
    "Country": "Kyrgyz Republic",
    "Year": 2018,
    "Revenue": 32.4695953,
    "Expenditure": 33.05969426
  },
  {
    "Country": "Kyrgyz Republic",
    "Year": 2019,
    "Revenue": 34.0450218,
    "Expenditure": 34.18419921
  },
  {
    "Country": "Kyrgyz Republic",
    "Year": 2020,
    "Revenue": 31.76301686,
    "Expenditure": 39.04502272
  },
  {
    "Country": "Lao P.D.R.",
    "Year": 2017,
    "Revenue": 16.07381237,
    "Expenditure": 21.56328153
  },
  {
    "Country": "Lao P.D.R.",
    "Year": 2018,
    "Revenue": 16.24413873,
    "Expenditure": 20.90735367
  },
  {
    "Country": "Lao P.D.R.",
    "Year": 2019,
    "Revenue": 15.36468811,
    "Expenditure": 20.38042442
  },
  {
    "Country": "Lao P.D.R.",
    "Year": 2020,
    "Revenue": 11.83289551,
    "Expenditure": 18.25598272
  },
  {
    "Country": "Latvia",
    "Year": 2017,
    "Revenue": 35.91517701,
    "Expenditure": 36.74238024
  },
  {
    "Country": "Latvia",
    "Year": 2018,
    "Revenue": 37.45486154,
    "Expenditure": 38.19523998
  },
  {
    "Country": "Latvia",
    "Year": 2019,
    "Revenue": 37.45348065,
    "Expenditure": 37.83660884
  },
  {
    "Country": "Latvia",
    "Year": 2020,
    "Revenue": 38.8486066,
    "Expenditure": 44.27980762
  },
  {
    "Country": "Libya",
    "Year": 2017,
    "Revenue": 52.4066459,
    "Expenditure": 95.87059402
  },
  {
    "Country": "Libya",
    "Year": 2018,
    "Revenue": 85.64827175,
    "Expenditure": 85.84252378
  },
  {
    "Country": "Libya",
    "Year": 2019,
    "Revenue": 103.9531983,
    "Expenditure": 101.7605516
  },
  {
    "Country": "Libya",
    "Year": 2020,
    "Revenue": 62.0486443,
    "Expenditure": 164.9863653
  },
  {
    "Country": "Lithuania",
    "Year": 2017,
    "Revenue": 32.86143844,
    "Expenditure": 32.40720807
  },
  {
    "Country": "Lithuania",
    "Year": 2018,
    "Revenue": 33.93594083,
    "Expenditure": 33.33546893
  },
  {
    "Country": "Lithuania",
    "Year": 2019,
    "Revenue": 34.37216102,
    "Expenditure": 34.10519318
  },
  {
    "Country": "Lithuania",
    "Year": 2020,
    "Revenue": 33.15617764,
    "Expenditure": 39.87154145
  },
  {
    "Country": "Luxembourg",
    "Year": 2017,
    "Revenue": 43.46061372,
    "Expenditure": 42.15988257
  },
  {
    "Country": "Luxembourg",
    "Year": 2018,
    "Revenue": 45.37417719,
    "Expenditure": 42.2910724
  },
  {
    "Country": "Luxembourg",
    "Year": 2019,
    "Revenue": 44.77811208,
    "Expenditure": 42.63283598
  },
  {
    "Country": "Luxembourg",
    "Year": 2020,
    "Revenue": 44.53328966,
    "Expenditure": 51.51358794
  },
  {
    "Country": "Madagascar",
    "Year": 2017,
    "Revenue": 12.83949025,
    "Expenditure": 14.94237681
  },
  {
    "Country": "Madagascar",
    "Year": 2018,
    "Revenue": 12.92808727,
    "Expenditure": 14.25716354
  },
  {
    "Country": "Madagascar",
    "Year": 2019,
    "Revenue": 13.92123709,
    "Expenditure": 15.34003454
  },
  {
    "Country": "Madagascar",
    "Year": 2020,
    "Revenue": 12.4932004,
    "Expenditure": 18.0133919
  },
  {
    "Country": "Malaysia",
    "Year": 2017,
    "Revenue": 19.5201136,
    "Expenditure": 21.9318699
  },
  {
    "Country": "Malaysia",
    "Year": 2018,
    "Revenue": 19.41577337,
    "Expenditure": 22.72258119
  },
  {
    "Country": "Malaysia",
    "Year": 2019,
    "Revenue": 20.1773633,
    "Expenditure": 23.87182571
  },
  {
    "Country": "Malaysia",
    "Year": 2020,
    "Revenue": 20.25154512,
    "Expenditure": 26.78373509
  },
  {
    "Country": "Mali",
    "Year": 2017,
    "Revenue": 20.05973875,
    "Expenditure": 22.92139054
  },
  {
    "Country": "Mali",
    "Year": 2018,
    "Revenue": 15.65781309,
    "Expenditure": 20.42804807
  },
  {
    "Country": "Mali",
    "Year": 2019,
    "Revenue": 21.41171957,
    "Expenditure": 23.09151443
  },
  {
    "Country": "Mali",
    "Year": 2020,
    "Revenue": 20.27412964,
    "Expenditure": 26.47412964
  },
  {
    "Country": "Malta",
    "Year": 2017,
    "Revenue": 38.07713763,
    "Expenditure": 34.83594513
  },
  {
    "Country": "Malta",
    "Year": 2018,
    "Revenue": 38.20280076,
    "Expenditure": 36.30462937
  },
  {
    "Country": "Malta",
    "Year": 2019,
    "Revenue": 37.6787382,
    "Expenditure": 37.14849353
  },
  {
    "Country": "Malta",
    "Year": 2020,
    "Revenue": 37.41520174,
    "Expenditure": 46.81049793
  },
  {
    "Country": "Mexico",
    "Year": 2017,
    "Revenue": 24.64244181,
    "Expenditure": 25.70571888
  },
  {
    "Country": "Mexico",
    "Year": 2018,
    "Revenue": 23.46408914,
    "Expenditure": 25.66196281
  },
  {
    "Country": "Mexico",
    "Year": 2019,
    "Revenue": 24.08267962,
    "Expenditure": 26.43132938
  },
  {
    "Country": "Mexico",
    "Year": 2020,
    "Revenue": 24.43866061,
    "Expenditure": 30.23866061
  },
  {
    "Country": "Moldova",
    "Year": 2017,
    "Revenue": 29.84075048,
    "Expenditure": 30.4806735
  },
  {
    "Country": "Moldova",
    "Year": 2018,
    "Revenue": 30.52153367,
    "Expenditure": 31.37040805
  },
  {
    "Country": "Moldova",
    "Year": 2019,
    "Revenue": 29.9617068,
    "Expenditure": 31.40041057
  },
  {
    "Country": "Moldova",
    "Year": 2020,
    "Revenue": 29.86398845,
    "Expenditure": 37.86616167
  },
  {
    "Country": "Mongolia",
    "Year": 2017,
    "Revenue": 28.54842807,
    "Expenditure": 32.33210073
  },
  {
    "Country": "Mongolia",
    "Year": 2018,
    "Revenue": 31.42515524,
    "Expenditure": 28.4560171
  },
  {
    "Country": "Mongolia",
    "Year": 2019,
    "Revenue": 32.63146132,
    "Expenditure": 31.7050496
  },
  {
    "Country": "Mongolia",
    "Year": 2020,
    "Revenue": 26.93111448,
    "Expenditure": 38.40806799
  },
  {
    "Country": "Morocco",
    "Year": 2017,
    "Revenue": 26.55524846,
    "Expenditure": 30.04832835
  },
  {
    "Country": "Morocco",
    "Year": 2018,
    "Revenue": 26.17979734,
    "Expenditure": 29.91592315
  },
  {
    "Country": "Morocco",
    "Year": 2019,
    "Revenue": 25.89022946,
    "Expenditure": 30.01747915
  },
  {
    "Country": "Morocco",
    "Year": 2020,
    "Revenue": 27.51753235,
    "Expenditure": 35.30929361
  },
  {
    "Country": "Mozambique",
    "Year": 2017,
    "Revenue": 27.05481314,
    "Expenditure": 29.97819481
  },
  {
    "Country": "Mozambique",
    "Year": 2018,
    "Revenue": 25.76066086,
    "Expenditure": 32.60574768
  },
  {
    "Country": "Mozambique",
    "Year": 2019,
    "Revenue": 29.8665406,
    "Expenditure": 30.01614272
  },
  {
    "Country": "Mozambique",
    "Year": 2020,
    "Revenue": 24.59196143,
    "Expenditure": 31.65267173
  },
  {
    "Country": "Myanmar",
    "Year": 2017,
    "Revenue": 17.90874296,
    "Expenditure": 20.76670194
  },
  {
    "Country": "Myanmar",
    "Year": 2018,
    "Revenue": 17.62908802,
    "Expenditure": 21.03148532
  },
  {
    "Country": "Myanmar",
    "Year": 2019,
    "Revenue": 16.38787652,
    "Expenditure": 20.30361183
  },
  {
    "Country": "Myanmar",
    "Year": 2020,
    "Revenue": 15.04589173,
    "Expenditure": 21.0622948
  },
  {
    "Country": "Nepal",
    "Year": 2017,
    "Revenue": 24.09914161,
    "Expenditure": 27.19304992
  },
  {
    "Country": "Nepal",
    "Year": 2018,
    "Revenue": 25.27310517,
    "Expenditure": 31.92424041
  },
  {
    "Country": "Nepal",
    "Year": 2019,
    "Revenue": 26.01292442,
    "Expenditure": 30.57441445
  },
  {
    "Country": "Nepal",
    "Year": 2020,
    "Revenue": 20.32070615,
    "Expenditure": 28.24910739
  },
  {
    "Country": "Netherlands",
    "Year": 2017,
    "Revenue": 42.91671295,
    "Expenditure": 41.65652865
  },
  {
    "Country": "Netherlands",
    "Year": 2018,
    "Revenue": 42.78288912,
    "Expenditure": 41.29022839
  },
  {
    "Country": "Netherlands",
    "Year": 2019,
    "Revenue": 43.93197383,
    "Expenditure": 42.26934503
  },
  {
    "Country": "Netherlands",
    "Year": 2020,
    "Revenue": 39.78212013,
    "Expenditure": 48.5390324
  },
  {
    "Country": "New Zealand",
    "Year": 2017,
    "Revenue": 37.05628434,
    "Expenditure": 35.76848764
  },
  {
    "Country": "New Zealand",
    "Year": 2018,
    "Revenue": 37.82380201,
    "Expenditure": 36.39578226
  },
  {
    "Country": "New Zealand",
    "Year": 2019,
    "Revenue": 37.02800526,
    "Expenditure": 39.97409816
  },
  {
    "Country": "New Zealand",
    "Year": 2020,
    "Revenue": 37.47579026,
    "Expenditure": 46.7237412
  },
  {
    "Country": "Nicaragua",
    "Year": 2017,
    "Revenue": 25.47029992,
    "Expenditure": 27.04665283
  },
  {
    "Country": "Nicaragua",
    "Year": 2018,
    "Revenue": 24.52954721,
    "Expenditure": 27.51274191
  },
  {
    "Country": "Nicaragua",
    "Year": 2019,
    "Revenue": 27.11481321,
    "Expenditure": 27.56542551
  },
  {
    "Country": "Nicaragua",
    "Year": 2020,
    "Revenue": 25.98355767,
    "Expenditure": 30.25588698
  },
  {
    "Country": "Niger",
    "Year": 2017,
    "Revenue": 15.38645719,
    "Expenditure": 19.5015283
  },
  {
    "Country": "Niger",
    "Year": 2018,
    "Revenue": 18.09637899,
    "Expenditure": 21.09538403
  },
  {
    "Country": "Niger",
    "Year": 2019,
    "Revenue": 18.01026677,
    "Expenditure": 21.56974052
  },
  {
    "Country": "Niger",
    "Year": 2020,
    "Revenue": 19.03666042,
    "Expenditure": 23.85968143
  },
  {
    "Country": "Nigeria",
    "Year": 2017,
    "Revenue": 6.608237936,
    "Expenditure": 12.00796706
  },
  {
    "Country": "Nigeria",
    "Year": 2018,
    "Revenue": 8.514113508,
    "Expenditure": 12.82046122
  },
  {
    "Country": "Nigeria",
    "Year": 2019,
    "Revenue": 7.86316027,
    "Expenditure": 12.61969737
  },
  {
    "Country": "Nigeria",
    "Year": 2020,
    "Revenue": 5.915443264,
    "Expenditure": 12.65472875
  },
  {
    "Country": "Norway",
    "Year": 2017,
    "Revenue": 54.63918902,
    "Expenditure": 49.64067899
  },
  {
    "Country": "Norway",
    "Year": 2018,
    "Revenue": 56.45995593,
    "Expenditure": 49.23721133
  },
  {
    "Country": "Norway",
    "Year": 2019,
    "Revenue": 58.58182572,
    "Expenditure": 50.80367482
  },
  {
    "Country": "Norway",
    "Year": 2020,
    "Revenue": 53.53494639,
    "Expenditure": 55.3204871
  },
  {
    "Country": "Oman",
    "Year": 2017,
    "Revenue": 31.81334247,
    "Expenditure": 45.77272342
  },
  {
    "Country": "Oman",
    "Year": 2018,
    "Revenue": 37.20590468,
    "Expenditure": 45.09922161
  },
  {
    "Country": "Oman",
    "Year": 2019,
    "Revenue": 37.12241808,
    "Expenditure": 44.18417759
  },
  {
    "Country": "Oman",
    "Year": 2020,
    "Revenue": 30.66287389,
    "Expenditure": 49.37017659
  },
  {
    "Country": "Pakistan",
    "Year": 2017,
    "Revenue": 15.54396313,
    "Expenditure": 21.3033565
  },
  {
    "Country": "Pakistan",
    "Year": 2018,
    "Revenue": 15.20950736,
    "Expenditure": 21.63235692
  },
  {
    "Country": "Pakistan",
    "Year": 2019,
    "Revenue": 12.99294934,
    "Expenditure": 21.97716705
  },
  {
    "Country": "Pakistan",
    "Year": 2020,
    "Revenue": 15.11300095,
    "Expenditure": 23.12429196
  },
  {
    "Country": "Papua New Guinea",
    "Year": 2017,
    "Revenue": 15.89194485,
    "Expenditure": 18.36665426
  },
  {
    "Country": "Papua New Guinea",
    "Year": 2018,
    "Revenue": 17.7903121,
    "Expenditure": 20.37743354
  },
  {
    "Country": "Papua New Guinea",
    "Year": 2019,
    "Revenue": 16.27814489,
    "Expenditure": 21.24204741
  },
  {
    "Country": "Papua New Guinea",
    "Year": 2020,
    "Revenue": 13.970038,
    "Expenditure": 20.23570889
  },
  {
    "Country": "Peru",
    "Year": 2017,
    "Revenue": 18.30448972,
    "Expenditure": 21.2394606
  },
  {
    "Country": "Peru",
    "Year": 2018,
    "Revenue": 19.41936507,
    "Expenditure": 21.42037725
  },
  {
    "Country": "Peru",
    "Year": 2019,
    "Revenue": 19.93061905,
    "Expenditure": 21.29623406
  },
  {
    "Country": "Peru",
    "Year": 2020,
    "Revenue": 18.32294346,
    "Expenditure": 27.73110743
  },
  {
    "Country": "Philippines",
    "Year": 2017,
    "Revenue": 18.68880391,
    "Expenditure": 19.06077477
  },
  {
    "Country": "Philippines",
    "Year": 2018,
    "Revenue": 19.29796814,
    "Expenditure": 20.85044833
  },
  {
    "Country": "Philippines",
    "Year": 2019,
    "Revenue": 19.90359215,
    "Expenditure": 21.68440153
  },
  {
    "Country": "Philippines",
    "Year": 2020,
    "Revenue": 17.21841314,
    "Expenditure": 25.28157634
  },
  {
    "Country": "Poland",
    "Year": 2017,
    "Revenue": 39.76090095,
    "Expenditure": 41.22876638
  },
  {
    "Country": "Poland",
    "Year": 2018,
    "Revenue": 41.28420011,
    "Expenditure": 41.51684088
  },
  {
    "Country": "Poland",
    "Year": 2019,
    "Revenue": 41.28633735,
    "Expenditure": 42.02654344
  },
  {
    "Country": "Poland",
    "Year": 2020,
    "Revenue": 40.70678284,
    "Expenditure": 51.17066136
  },
  {
    "Country": "Portugal",
    "Year": 2017,
    "Revenue": 42.41198475,
    "Expenditure": 45.36799844
  },
  {
    "Country": "Portugal",
    "Year": 2018,
    "Revenue": 42.92367776,
    "Expenditure": 43.36615439
  },
  {
    "Country": "Portugal",
    "Year": 2019,
    "Revenue": 42.86354268,
    "Expenditure": 42.67331196
  },
  {
    "Country": "Portugal",
    "Year": 2020,
    "Revenue": 42.14085495,
    "Expenditure": 50.49192455
  },
  {
    "Country": "Qatar",
    "Year": 2017,
    "Revenue": 32.17511768,
    "Expenditure": 34.66315161
  },
  {
    "Country": "Qatar",
    "Year": 2018,
    "Revenue": 34.81853651,
    "Expenditure": 28.89609823
  },
  {
    "Country": "Qatar",
    "Year": 2019,
    "Revenue": 37.49027842,
    "Expenditure": 32.56288945
  },
  {
    "Country": "Qatar",
    "Year": 2020,
    "Revenue": 35.35352393,
    "Expenditure": 32.32466499
  },
  {
    "Country": "Russian Federation",
    "Year": 2017,
    "Revenue": 33.36124706,
    "Expenditure": 34.83017301
  },
  {
    "Country": "Russian Federation",
    "Year": 2018,
    "Revenue": 35.28340419,
    "Expenditure": 32.38153698
  },
  {
    "Country": "Russian Federation",
    "Year": 2019,
    "Revenue": 35.53994057,
    "Expenditure": 33.61800142
  },
  {
    "Country": "Russian Federation",
    "Year": 2020,
    "Revenue": 32.00965318,
    "Expenditure": 37.29452546
  },
  {
    "Country": "Rwanda",
    "Year": 2017,
    "Revenue": 22.57528832,
    "Expenditure": 25.09193948
  },
  {
    "Country": "Rwanda",
    "Year": 2018,
    "Revenue": 23.82554928,
    "Expenditure": 26.40088408
  },
  {
    "Country": "Rwanda",
    "Year": 2019,
    "Revenue": 23.64429654,
    "Expenditure": 28.8369161
  },
  {
    "Country": "Rwanda",
    "Year": 2020,
    "Revenue": 20.09372374,
    "Expenditure": 27.80955789
  },
  {
    "Country": "Saudi Arabia",
    "Year": 2017,
    "Revenue": 24.06883205,
    "Expenditure": 33.30495421
  },
  {
    "Country": "Saudi Arabia",
    "Year": 2018,
    "Revenue": 30.70395806,
    "Expenditure": 36.57453044
  },
  {
    "Country": "Saudi Arabia",
    "Year": 2019,
    "Revenue": 31.16061372,
    "Expenditure": 35.61309079
  },
  {
    "Country": "Saudi Arabia",
    "Year": 2020,
    "Revenue": 28.35280957,
    "Expenditure": 38.91673
  },
  {
    "Country": "Senegal",
    "Year": 2017,
    "Revenue": 19.49499007,
    "Expenditure": 22.4630224
  },
  {
    "Country": "Senegal",
    "Year": 2018,
    "Revenue": 18.79121752,
    "Expenditure": 22.43477221
  },
  {
    "Country": "Senegal",
    "Year": 2019,
    "Revenue": 20.18921472,
    "Expenditure": 24.01385678
  },
  {
    "Country": "Senegal",
    "Year": 2020,
    "Revenue": 21.47569713,
    "Expenditure": 27.7094498
  },
  {
    "Country": "Singapore",
    "Year": 2017,
    "Revenue": 18.99814577,
    "Expenditure": 13.65695995
  },
  {
    "Country": "Singapore",
    "Year": 2018,
    "Revenue": 17.72896463,
    "Expenditure": 14.01219831
  },
  {
    "Country": "Singapore",
    "Year": 2019,
    "Revenue": 18.18321446,
    "Expenditure": 14.34292959
  },
  {
    "Country": "Singapore",
    "Year": 2020,
    "Revenue": 17.68502992,
    "Expenditure": 28.45845588
  },
  {
    "Country": "Slovak Republic",
    "Year": 2017,
    "Revenue": 40.53480074,
    "Expenditure": 41.48722451
  },
  {
    "Country": "Slovak Republic",
    "Year": 2018,
    "Revenue": 40.80110796,
    "Expenditure": 41.85081563
  },
  {
    "Country": "Slovak Republic",
    "Year": 2019,
    "Revenue": 41.50382283,
    "Expenditure": 42.79907233
  },
  {
    "Country": "Slovak Republic",
    "Year": 2020,
    "Revenue": 42.31268659,
    "Expenditure": 51.15127174
  },
  {
    "Country": "Slovenia",
    "Year": 2017,
    "Revenue": 44.03158157,
    "Expenditure": 44.07973555
  },
  {
    "Country": "Slovenia",
    "Year": 2018,
    "Revenue": 44.28497119,
    "Expenditure": 43.56439106
  },
  {
    "Country": "Slovenia",
    "Year": 2019,
    "Revenue": 44.21850329,
    "Expenditure": 43.67607787
  },
  {
    "Country": "Slovenia",
    "Year": 2020,
    "Revenue": 39.66039362,
    "Expenditure": 48.48031874
  },
  {
    "Country": "South Africa",
    "Year": 2017,
    "Revenue": 28.21973167,
    "Expenditure": 32.59934141
  },
  {
    "Country": "South Africa",
    "Year": 2018,
    "Revenue": 29.04360997,
    "Expenditure": 33.1879281
  },
  {
    "Country": "South Africa",
    "Year": 2019,
    "Revenue": 29.0647892,
    "Expenditure": 35.31874201
  },
  {
    "Country": "South Africa",
    "Year": 2020,
    "Revenue": 27.0477298,
    "Expenditure": 41.09097003
  },
  {
    "Country": "Spain",
    "Year": 2017,
    "Revenue": 38.17362925,
    "Expenditure": 41.19787103
  },
  {
    "Country": "Spain",
    "Year": 2018,
    "Revenue": 39.17856783,
    "Expenditure": 41.71518217
  },
  {
    "Country": "Spain",
    "Year": 2019,
    "Revenue": 39.08631521,
    "Expenditure": 41.91247146
  },
  {
    "Country": "Spain",
    "Year": 2020,
    "Revenue": 38.6344549,
    "Expenditure": 52.7266669
  },
  {
    "Country": "Sri Lanka",
    "Year": 2017,
    "Revenue": 13.80212923,
    "Expenditure": 19.30549306
  },
  {
    "Country": "Sri Lanka",
    "Year": 2018,
    "Revenue": 13.45151661,
    "Expenditure": 18.74709951
  },
  {
    "Country": "Sri Lanka",
    "Year": 2019,
    "Revenue": 12.64511472,
    "Expenditure": 20.82619444
  },
  {
    "Country": "Sri Lanka",
    "Year": 2020,
    "Revenue": 9.254764229,
    "Expenditure": 18.88364956
  },
  {
    "Country": "Sudan",
    "Year": 2017,
    "Revenue": 7.177715242,
    "Expenditure": 13.63204732
  },
  {
    "Country": "Sudan",
    "Year": 2018,
    "Revenue": 8.912617615,
    "Expenditure": 16.83665762
  },
  {
    "Country": "Sudan",
    "Year": 2019,
    "Revenue": 7.893413844,
    "Expenditure": 18.77820079
  },
  {
    "Country": "Sudan",
    "Year": 2020,
    "Revenue": 6.841799474,
    "Expenditure": 13.67322175
  },
  {
    "Country": "Sweden",
    "Year": 2017,
    "Revenue": 49.66638516,
    "Expenditure": 48.23486831
  },
  {
    "Country": "Sweden",
    "Year": 2018,
    "Revenue": 49.62636999,
    "Expenditure": 48.81258562
  },
  {
    "Country": "Sweden",
    "Year": 2019,
    "Revenue": 48.74936168,
    "Expenditure": 48.34578137
  },
  {
    "Country": "Sweden",
    "Year": 2020,
    "Revenue": 47.4452693,
    "Expenditure": 53.34461051
  },
  {
    "Country": "Switzerland",
    "Year": 2017,
    "Revenue": 34.33096468,
    "Expenditure": 33.17535327
  },
  {
    "Country": "Switzerland",
    "Year": 2018,
    "Revenue": 33.99285476,
    "Expenditure": 32.67411912
  },
  {
    "Country": "Switzerland",
    "Year": 2019,
    "Revenue": 34.14393831,
    "Expenditure": 32.66961241
  },
  {
    "Country": "Switzerland",
    "Year": 2020,
    "Revenue": 33.11962016,
    "Expenditure": 37.32773835
  },
  {
    "Country": "Tajikistan",
    "Year": 2017,
    "Revenue": 29.66688871,
    "Expenditure": 35.63188664
  },
  {
    "Country": "Tajikistan",
    "Year": 2018,
    "Revenue": 29.08821565,
    "Expenditure": 31.86886893
  },
  {
    "Country": "Tajikistan",
    "Year": 2019,
    "Revenue": 27.3801474,
    "Expenditure": 29.47952395
  },
  {
    "Country": "Tajikistan",
    "Year": 2020,
    "Revenue": 24.29507925,
    "Expenditure": 30.29375453
  },
  {
    "Country": "Tanzania",
    "Year": 2017,
    "Revenue": 15.41455086,
    "Expenditure": 16.57257469
  },
  {
    "Country": "Tanzania",
    "Year": 2018,
    "Revenue": 14.67429384,
    "Expenditure": 16.60592676
  },
  {
    "Country": "Tanzania",
    "Year": 2019,
    "Revenue": 14.66830959,
    "Expenditure": 16.38451221
  },
  {
    "Country": "Tanzania",
    "Year": 2020,
    "Revenue": 15.14162198,
    "Expenditure": 17.00144275
  },
  {
    "Country": "Thailand",
    "Year": 2017,
    "Revenue": 21.09902696,
    "Expenditure": 21.52395441
  },
  {
    "Country": "Thailand",
    "Year": 2018,
    "Revenue": 21.42474743,
    "Expenditure": 21.36066245
  },
  {
    "Country": "Thailand",
    "Year": 2019,
    "Revenue": 21.02406773,
    "Expenditure": 21.84024832
  },
  {
    "Country": "Thailand",
    "Year": 2020,
    "Revenue": 21.02406773,
    "Expenditure": 26.23475177
  },
  {
    "Country": "Turkey",
    "Year": 2017,
    "Revenue": 31.18903179,
    "Expenditure": 33.37163599
  },
  {
    "Country": "Turkey",
    "Year": 2018,
    "Revenue": 30.96136658,
    "Expenditure": 34.61520351
  },
  {
    "Country": "Turkey",
    "Year": 2019,
    "Revenue": 29.52781652,
    "Expenditure": 35.17594413
  },
  {
    "Country": "Turkey",
    "Year": 2020,
    "Revenue": 28.98817327,
    "Expenditure": 36.86619683
  },
  {
    "Country": "Uganda",
    "Year": 2017,
    "Revenue": 12.80135791,
    "Expenditure": 15.54895347
  },
  {
    "Country": "Uganda",
    "Year": 2018,
    "Revenue": 13.22036161,
    "Expenditure": 15.95549065
  },
  {
    "Country": "Uganda",
    "Year": 2019,
    "Revenue": 13.66193258,
    "Expenditure": 18.67712774
  },
  {
    "Country": "Uganda",
    "Year": 2020,
    "Revenue": 12.90526781,
    "Expenditure": 19.45688358
  },
  {
    "Country": "Ukraine",
    "Year": 2017,
    "Revenue": 39.29127182,
    "Expenditure": 41.48206987
  },
  {
    "Country": "Ukraine",
    "Year": 2018,
    "Revenue": 39.5689799,
    "Expenditure": 41.71872466
  },
  {
    "Country": "Ukraine",
    "Year": 2019,
    "Revenue": 39.40763751,
    "Expenditure": 41.44976
  },
  {
    "Country": "Ukraine",
    "Year": 2020,
    "Revenue": 39.09465515,
    "Expenditure": 46.90465515
  },
  {
    "Country": "United Arab Emirates",
    "Year": 2017,
    "Revenue": 28.55748166,
    "Expenditure": 30.50769998
  },
  {
    "Country": "United Arab Emirates",
    "Year": 2018,
    "Revenue": 30.79898017,
    "Expenditure": 28.87026296
  },
  {
    "Country": "United Arab Emirates",
    "Year": 2019,
    "Revenue": 29.79435509,
    "Expenditure": 30.55746511
  },
  {
    "Country": "United Arab Emirates",
    "Year": 2020,
    "Revenue": 26.01410297,
    "Expenditure": 35.91320849
  },
  {
    "Country": "United Kingdom",
    "Year": 2017,
    "Revenue": 36.64218236,
    "Expenditure": 39.09368639
  },
  {
    "Country": "United Kingdom",
    "Year": 2018,
    "Revenue": 36.51865594,
    "Expenditure": 38.78256068
  },
  {
    "Country": "United Kingdom",
    "Year": 2019,
    "Revenue": 36.40281856,
    "Expenditure": 38.60724257
  },
  {
    "Country": "United Kingdom",
    "Year": 2020,
    "Revenue": 36.6279174,
    "Expenditure": 53.09134885
  },
  {
    "Country": "United States",
    "Year": 2017,
    "Revenue": 30.72583985,
    "Expenditure": 35.31727539
  },
  {
    "Country": "United States",
    "Year": 2018,
    "Revenue": 29.58375936,
    "Expenditure": 35.37014561
  },
  {
    "Country": "United States",
    "Year": 2019,
    "Revenue": 29.38623422,
    "Expenditure": 35.73553116
  },
  {
    "Country": "United States",
    "Year": 2020,
    "Revenue": 28.47014183,
    "Expenditure": 47.18787061
  },
  {
    "Country": "Uruguay",
    "Year": 2017,
    "Revenue": 29.72075604,
    "Expenditure": 32.42552809
  },
  {
    "Country": "Uruguay",
    "Year": 2018,
    "Revenue": 31.1988059,
    "Expenditure": 33.22410349
  },
  {
    "Country": "Uruguay",
    "Year": 2019,
    "Revenue": 30.92380036,
    "Expenditure": 33.92798673
  },
  {
    "Country": "Uruguay",
    "Year": 2020,
    "Revenue": 30.68128666,
    "Expenditure": 36.45021661
  },
  {
    "Country": "Uzbekistan",
    "Year": 2017,
    "Revenue": 24.71991493,
    "Expenditure": 23.43152777
  },
  {
    "Country": "Uzbekistan",
    "Year": 2018,
    "Revenue": 27.77833806,
    "Expenditure": 26.03538653
  },
  {
    "Country": "Uzbekistan",
    "Year": 2019,
    "Revenue": 27.96315317,
    "Expenditure": 28.22050801
  },
  {
    "Country": "Uzbekistan",
    "Year": 2020,
    "Revenue": 24.71777897,
    "Expenditure": 28.85563616
  },
  {
    "Country": "Venezuela",
    "Year": 2017,
    "Revenue": 14.7111968,
    "Expenditure": 37.70205632
  },
  {
    "Country": "Venezuela",
    "Year": 2018,
    "Revenue": 17.42109861,
    "Expenditure": 48.42109861
  },
  {
    "Country": "Venezuela",
    "Year": 2019,
    "Revenue": 11.35913217,
    "Expenditure": 21.35859793
  },
  {
    "Country": "Venezuela",
    "Year": 2020,
    "Revenue": 0,
    "Expenditure": 0
  },
  {
    "Country": "Vietnam",
    "Year": 2017,
    "Revenue": 19.56530889,
    "Expenditure": 21.52930647
  },
  {
    "Country": "Vietnam",
    "Year": 2018,
    "Revenue": 19.48849943,
    "Expenditure": 20.51110518
  },
  {
    "Country": "Vietnam",
    "Year": 2019,
    "Revenue": 19.54259619,
    "Expenditure": 22.83678187
  },
  {
    "Country": "Vietnam",
    "Year": 2020,
    "Revenue": 16.98091164,
    "Expenditure": 23.00327243
  },
  {
    "Country": "Yemen",
    "Year": 2017,
    "Revenue": 3.487907256,
    "Expenditure": 8.392471485
  },
  {
    "Country": "Yemen",
    "Year": 2018,
    "Revenue": 6.41552208,
    "Expenditure": 14.26408483
  },
  {
    "Country": "Yemen",
    "Year": 2019,
    "Revenue": 8.522881028,
    "Expenditure": 13.84232787
  },
  {
    "Country": "Yemen",
    "Year": 2020,
    "Revenue": 5.730996164,
    "Expenditure": 14.94189408
  },
  {
    "Country": "Zambia",
    "Year": 2017,
    "Revenue": 17.47490869,
    "Expenditure": 25.06269054
  },
  {
    "Country": "Zambia",
    "Year": 2018,
    "Revenue": 18.92534462,
    "Expenditure": 27.35295709
  },
  {
    "Country": "Zambia",
    "Year": 2019,
    "Revenue": 19.72427089,
    "Expenditure": 27.86712114
  },
  {
    "Country": "Zambia",
    "Year": 2020,
    "Revenue": 17.99568913,
    "Expenditure": 23.99262086
  },
  {
    "Country": "Zimbabwe",
    "Year": 2017,
    "Revenue": 14.37064405,
    "Expenditure": 22.4838325
  },
  {
    "Country": "Zimbabwe",
    "Year": 2018,
    "Revenue": 13.15425082,
    "Expenditure": 17.65307185
  },
  {
    "Country": "Zimbabwe",
    "Year": 2019,
    "Revenue": 14.69283117,
    "Expenditure": 16.34176509
  },
  {
    "Country": "Zimbabwe",
    "Year": 2020,
    "Revenue": 14.20720025,
    "Expenditure": 16.05470752
  },
  {
    "Country": "Advanced G-20",
    "Year": 2017,
    "Revenue": 35.34409789,
    "Expenditure": 38.29261253
  },
  {
    "Country": "Advanced G-20",
    "Year": 2018,
    "Revenue": 35.05799215,
    "Expenditure": 38.37514867
  },
  {
    "Country": "Advanced G-20",
    "Year": 2019,
    "Revenue": 34.70139763,
    "Expenditure": 38.68407743
  },
  {
    "Country": "Advanced G-20",
    "Year": 2020,
    "Revenue": 33.87161678,
    "Expenditure": 49.34258472
  },
  {
    "Country": "Advanced economies",
    "Year": 2017,
    "Revenue": 36.25195653,
    "Expenditure": 38.63598904
  },
  {
    "Country": "Advanced economies",
    "Year": 2018,
    "Revenue": 36.03099809,
    "Expenditure": 38.72207282
  },
  {
    "Country": "Advanced economies",
    "Year": 2019,
    "Revenue": 35.69207445,
    "Expenditure": 38.99143356
  },
  {
    "Country": "Advanced economies",
    "Year": 2020,
    "Revenue": 34.78324526,
    "Expenditure": 49.17063283
  },
  {
    "Country": "Emerging G-20",
    "Year": 2017,
    "Revenue": 26.95873991,
    "Expenditure": 31.26842013
  },
  {
    "Country": "Emerging G-20",
    "Year": 2018,
    "Revenue": 27.55844466,
    "Expenditure": 31.84788674
  },
  {
    "Country": "Emerging G-20",
    "Year": 2019,
    "Revenue": 27.0779684,
    "Expenditure": 32.55978347
  },
  {
    "Country": "Emerging G-20",
    "Year": 2020,
    "Revenue": 24.21421524,
    "Expenditure": 35.48017711
  },
  {
    "Country": "Emerging Market and Middle-Income Economies",
    "Year": 2017,
    "Revenue": 26.78216107,
    "Expenditure": 30.935391
  },
  {
    "Country": "Emerging Market and Middle-Income Economies",
    "Year": 2018,
    "Revenue": 27.57986654,
    "Expenditure": 31.41303928
  },
  {
    "Country": "Emerging Market and Middle-Income Economies",
    "Year": 2019,
    "Revenue": 27.01590866,
    "Expenditure": 31.92583941
  },
  {
    "Country": "Emerging Market and Middle-Income Economies",
    "Year": 2020,
    "Revenue": 24.27977686,
    "Expenditure": 34.99989577
  },
  {
    "Country": "Emerging and Middle-Income Asia",
    "Year": 2017,
    "Revenue": 25.18510731,
    "Expenditure": 29.15920958
  },
  {
    "Country": "Emerging and Middle-Income Asia",
    "Year": 2018,
    "Revenue": 25.7958533,
    "Expenditure": 30.31786621
  },
  {
    "Country": "Emerging and Middle-Income Asia",
    "Year": 2019,
    "Revenue": 25.19002874,
    "Expenditure": 31.2739184
  },
  {
    "Country": "Emerging and Middle-Income Asia",
    "Year": 2020,
    "Revenue": 22.54496388,
    "Expenditure": 33.94552324
  },
  {
    "Country": "Emerging and Middle-Income Europe",
    "Year": 2017,
    "Revenue": 33.73039145,
    "Expenditure": 35.57229004
  },
  {
    "Country": "Emerging and Middle-Income Europe",
    "Year": 2018,
    "Revenue": 35.10587957,
    "Expenditure": 34.75093033
  },
  {
    "Country": "Emerging and Middle-Income Europe",
    "Year": 2019,
    "Revenue": 34.90681464,
    "Expenditure": 35.63657184
  },
  {
    "Country": "Emerging and Middle-Income Europe",
    "Year": 2020,
    "Revenue": 33.06851689,
    "Expenditure": 40.24738413
  },
  {
    "Country": "Emerging and Middle-Income Latin America",
    "Year": 2017,
    "Revenue": 27.78395652,
    "Expenditure": 33.33386289
  },
  {
    "Country": "Emerging and Middle-Income Latin America",
    "Year": 2018,
    "Revenue": 27.8632624,
    "Expenditure": 33.07519689
  },
  {
    "Country": "Emerging and Middle-Income Latin America",
    "Year": 2019,
    "Revenue": 28.09356122,
    "Expenditure": 32.18695909
  },
  {
    "Country": "Emerging and Middle-Income Latin America",
    "Year": 2020,
    "Revenue": 25.90235892,
    "Expenditure": 36.99181116
  },
  {
    "Country": "Emerging and Middle-Income Middle East and North Africa and Pakistan",
    "Year": 2017,
    "Revenue": 26.911287,
    "Expenditure": 32.65861734
  },
  {
    "Country": "Emerging and Middle-Income Middle East and North Africa and Pakistan",
    "Year": 2018,
    "Revenue": 30.18100162,
    "Expenditure": 32.64985378
  },
  {
    "Country": "Emerging and Middle-Income Middle East and North Africa and Pakistan",
    "Year": 2019,
    "Revenue": 28.44748399,
    "Expenditure": 31.85857723
  },
  {
    "Country": "Emerging and Middle-Income Middle East and North Africa and Pakistan",
    "Year": 2020,
    "Revenue": 24.16677396,
    "Expenditure": 34.01451859
  },
  {
    "Country": "Euro area",
    "Year": 2017,
    "Revenue": 46.13133716,
    "Expenditure": 47.09379805
  },
  {
    "Country": "Euro area",
    "Year": 2018,
    "Revenue": 46.39414806,
    "Expenditure": 46.8516513
  },
  {
    "Country": "Euro area",
    "Year": 2019,
    "Revenue": 46.39459429,
    "Expenditure": 47.03968811
  },
  {
    "Country": "Euro area",
    "Year": 2020,
    "Revenue": 45.60354989,
    "Expenditure": 55.71389563
  },
  {
    "Country": "Low-Income Developing Asia",
    "Year": 2017,
    "Revenue": 16.07030664,
    "Expenditure": 18.80650883
  },
  {
    "Country": "Low-Income Developing Asia",
    "Year": 2018,
    "Revenue": 16.00963184,
    "Expenditure": 18.94357878
  },
  {
    "Country": "Low-Income Developing Asia",
    "Year": 2019,
    "Revenue": 15.92896023,
    "Expenditure": 20.03695555
  },
  {
    "Country": "Low-Income Developing Asia",
    "Year": 2020,
    "Revenue": 13.59455141,
    "Expenditure": 19.91383387
  },
  {
    "Country": "Low-Income Developing Countries",
    "Year": 2017,
    "Revenue": 14.36249359,
    "Expenditure": 17.99719694
  },
  {
    "Country": "Low-Income Developing Countries",
    "Year": 2018,
    "Revenue": 14.83332607,
    "Expenditure": 18.29585546
  },
  {
    "Country": "Low-Income Developing Countries",
    "Year": 2019,
    "Revenue": 14.68279498,
    "Expenditure": 18.69957722
  },
  {
    "Country": "Low-Income Developing Countries",
    "Year": 2020,
    "Revenue": 12.96514644,
    "Expenditure": 19.18867321
  },
  {
    "Country": "Low-Income Developing Latin America",
    "Year": 2017,
    "Revenue": 24.55560246,
    "Expenditure": 25.23631211
  },
  {
    "Country": "Low-Income Developing Latin America",
    "Year": 2018,
    "Revenue": 24.01038579,
    "Expenditure": 25.10347491
  },
  {
    "Country": "Low-Income Developing Latin America",
    "Year": 2019,
    "Revenue": 23.58742614,
    "Expenditure": 24.09168335
  },
  {
    "Country": "Low-Income Developing Latin America",
    "Year": 2020,
    "Revenue": 23.44407641,
    "Expenditure": 27.37752189
  },
  {
    "Country": "Low-Income Developing Oil Producers",
    "Year": 2017,
    "Revenue": 7.189322304,
    "Expenditure": 12.55526632
  },
  {
    "Country": "Low-Income Developing Oil Producers",
    "Year": 2018,
    "Revenue": 9.249715081,
    "Expenditure": 13.36998505
  },
  {
    "Country": "Low-Income Developing Oil Producers",
    "Year": 2019,
    "Revenue": 8.683069564,
    "Expenditure": 13.18574492
  },
  {
    "Country": "Low-Income Developing Oil Producers",
    "Year": 2020,
    "Revenue": 6.674980103,
    "Expenditure": 13.33650897
  },
  {
    "Country": "Low-Income Developing Others",
    "Year": 2017,
    "Revenue": 16.54134608,
    "Expenditure": 19.61862378
  },
  {
    "Country": "Low-Income Developing Others",
    "Year": 2018,
    "Revenue": 19.2945631,
    "Expenditure": 22.79796072
  },
  {
    "Country": "Low-Income Developing Others",
    "Year": 2019,
    "Revenue": 20.21109492,
    "Expenditure": 24.42205283
  },
  {
    "Country": "Low-Income Developing Others",
    "Year": 2020,
    "Revenue": 18.28189959,
    "Expenditure": 24.5874219
  },
  {
    "Country": "Low-Income Developing Sub-Saharan Africa",
    "Year": 2017,
    "Revenue": 12.3735173,
    "Expenditure": 16.85641221
  },
  {
    "Country": "Low-Income Developing Sub-Saharan Africa",
    "Year": 2018,
    "Revenue": 13.03237154,
    "Expenditure": 16.97807127
  },
  {
    "Country": "Low-Income Developing Sub-Saharan Africa",
    "Year": 2019,
    "Revenue": 12.74872917,
    "Expenditure": 16.84238979
  },
  {
    "Country": "Low-Income Developing Sub-Saharan Africa",
    "Year": 2020,
    "Revenue": 11.43553365,
    "Expenditure": 17.69070547
  }
 ]
//Read the data
  // d3.csv("../data/Revenue_Expenditure_data.csv", function(data) {   
    
    console.log(data);
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

  };
    ////////////////////////////////////On click update with new data////////////////////////////////////
  
d3.selectAll("button").on("click", function(){
        currentYear = d3.select(this).text()
        // console.log(currentYear);
        loadScatterplot(currentYear);
        });
      
    loadScatterplot(2020);