// document.getElementById("button").disabled = false;
// document.getElementById("button").onclick=function(){displaywind()};
var windytyInit = {
          // Required: API key
          key: 'PsL-At-XpsPTZexBwUkO7Mx5I',

          // Optional: Initial state of the map
          lat: 50.4,
          lon: 14.3,
          zoom: 5,
      }  

    // Required: Windyty main function is called after 
    // initialization of API
    //
    // @map is instance of Leaflet maps
    //
function windytyMain(map) {
    var popup = L.popup()
    .setLatLng([50.4, 14.3])
    .setContent("Hello World")
    .openOn( map );
}

function displaywind(){
    var changeInfo=document.getElementById(windyty);
    changeInfo.style.display='none';
}