const coordinates = []

function myMap(coordinates) {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(coordinates),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

navigator.geolocation.watchPosition(data => {
        console.log(data)
        coordinates.push(data.coords.latitude,data.coords.longitude)
        window.localStorage.setItem("coordinates",JSON.stringify(coordinates))
        myMap(data.coords.latitude,data.coords.longitude)
    },(error)=> console.log(error), {
        enableHighAccuracy: true
    })