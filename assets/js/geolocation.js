function showLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  localStorage.setItem("longtitude", longitude);
  localStorage.setItem("latitude", latitude);
  var latlongvalue = position.coords.latitude + "," + position.coords.longitude;

  var img_url =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    latlongvalue +
    "&amp;zoom=14&amp;size=800x600&amp;key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o";
  document.getElementById("mapholder").innerHTML =
    "<img src='" + img_url + "'>";
}
function errorHandler(err) {
  if (err.code == 1) {
    alert("Error: Access is denied!");
  } else if (err.code == 2) {
    alert("Error: Position is unavailable!");
  }
}
function getLocation() {
  if (navigator.geolocation) {
    // timeout at 60000 milliseconds (60 seconds)
    var options = { timeout: 60000 };
    navigator.geolocation.getCurrentPosition(
      showLocation,
      errorHandler,
      options
    );
  } else {
    alert("Sorry, browser does not support geolocation!");
  }
}

getLocation();
