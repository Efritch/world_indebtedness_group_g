// Create a map object
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

// Use this link to get the geojson data.
var link = "imf_lending_borrowing_world_data.geojson";

// Our style object
var mapStyle = {
    color: "white",
    fillColor: "blue",
    fillOpacity: 0.5,
    weight: 1.5
  };

var world_data_2020

// Grabbing our GeoJSON data..
d3.json(link, function(worldData) {

//    world_data_2020 = L.choropleth(data, {

//       valueProperty: "2020",

//        scale: ["#ffffb2", "#b10026"],

//        onEachFeature: function(feature, layer) {
//            layer.bindPopup("Country: " + feature.properties.Country + feature.properties.year);
//        }
//    })
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(worldData, {
      style: mapStyle
  }).addTo(myMap);

//console.log(worldData)
});