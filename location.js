function geocallback(position) {
  console.log(position.coords.latitude, position.coords.longitude);
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(geocallback, error,
  {enableHighAccuracy: true, timeout: 5000} );

let watchID = navigator.geolocation.watchPosition(geocallback, error, 
  {enableHighAccuracy: true, timeout: 5000, maximumAge: 5000} );

navigator.geolocation.clearWatch(watchID);