

mapboxgl.accessToken = 'pk.eyJ1IjoiZGRzZHM4NTUyIiwiYSI6ImNrYjk4ZmNpbzA3dm0yeW5sNjA1Y2dnYzAifQ.TEW2CeqIF7C2CEw10BRY9A';

var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
var openWeatherMapUrlApiKey = 'a39022eba8f6db9bf8e92b54a414818c';



var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ddsds8552/ckb9g3fcx0ywm1iqh9e2jiqw0',
  center: [5.4183, 52.4572],
  zoom: 5
});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  }),
  'bottom-right'
);

map.addControl(new mapboxgl.NavigationControl());

var landingPoints = document.createElement ('div');
landingPoints.style.background = 'url("https://image.flaticon.com/icons/svg/1505/1505471.svg")';
landingPoints.style.backgroundSize = '100%';
landingPoints.style.width = '50px';
landingPoints.style.height = '50px';

var popupLanding = new mapboxgl.Popup().setHTML('<h3>The Spaceship can land here</h3><p>Or find you another better place</p>');
var marker = new mapboxgl.Marker(landingPoints).setLngLat([5.223046, 52.491699]).setPopup(popupLanding).addTo(map);

map.on('load', function(){ 
  map.addLayer({ "id": "simple-tiles", "type": "raster", "source": { "type": "raster", "tiles": ["https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=a39022eba8f6db9bf8e92b54a414818c"], 
    "tileSize": 256 }, "minzoom": 0, "maxzoom": 10 });
});

map.on('mousemove', function(position) {
document.getElementById('coordination').innerHTML =
JSON.stringify(position.point) +
'<br />' +
JSON.stringify(position.lngLat.wrap());
});
