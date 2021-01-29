// Create world map object
var worldMap = L.map("map-id", {
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
  }).addTo(worldMap);
/*  
  // Country data
var countries = [
    {
      name: "",
      location: [-14.2350, -51.9253],
      indebtedness: 3
    }
  ];

// Loop through the countries array and create one marker for each country object
for (var i = 0; i < countries.length; i++) {

    // Conditionals for countries points
    var color = "";
    if (countries[i].indebtedness > 3 ) {
      color = "yellow";
    }
    else if (countries[i].indebtedness > 0 ) {
      color = "blue";
    }
    else if (countries[i].indebtedness > -2) {
      color = "green";
    }
    else {
      color = "red";
    }

     // Add circles to map
  L.circle(countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: countries[i].points * 1000
  }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].indebtedness + "</h3>").addTo(worldMap);
}
*/
  
