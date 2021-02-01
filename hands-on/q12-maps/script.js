//ONEMAP
let singapore = [1.29, 103.85]; // #1 Singapore latlng
let map = L.map('mapid').setView(singapore, 12); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
  detectRetina: true,
  maxZoom: 18,
  minZoom: 11,
}).addTo(map);

// let singaporeMarker = L.marker([1.29, 103.85]);
// singaporeMarker.addTo(map);
// singaporeMarker.bindPopup('<p>Singapore</p>');

// let jurongBirdPark = L.marker([1.3187, 103.7064]);
// jurongBirdPark.addTo(map);
// jurongBirdPark.bindPopup('<p>Jurong Bird Park</p>');

window.addEventListener('DOMContentLoaded', () => {
  let getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  let showPosition = (position) => {
    new L.Marker([position.coords.latitude, position.coords.longitude], {
      bounceOnAdd: true,
    }).addTo(map);
    let popup = L.popup()
      .setLatLng([position.coords.latitude, position.coords.longitude])
      .setContent('You are here!')
      .openOn(map);
  };

  getLocation();

  (async () => {
    let response = await axios.get('sso.geojson');
    console.log(response.data);

    let layer = L.geoJson(response.data, {
      onEachFeature: (feature, layer) => {
        console.log(feature);
        new L.marker([
          feature.geometry.coordinates[1],
          feature.geometry.coordinates[0],
        ]).addTo(map);
      },
    });

    layer.bindPopup('<p>${feature.properties.Description}</p>');
    layer.addTo(map);
  })();
});

//OPEN STREET MAP
// let singapore = [1.29, 103.85]; // #1 Singapore latlng
// let map = L.map('mapid').setView(singapore, 13); // #2 Set the center point

// // setup the tile layers
// L.tileLayer(
//   'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken:
//       'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', //demo access token
//   }
// ).addTo(map);

// let singaporeMarker = L.marker([1.29, 103.85]);
// singaporeMarker.addTo(map);
// singaporeMarker.bindPopup('<p>Singapore</p>');

// let jurongBirdPark = L.marker([1.3187, 103.7064]);
// jurongBirdPark.addTo(map);
// jurongBirdPark.bindPopup('<p>Jurong Bird Park</p>');
