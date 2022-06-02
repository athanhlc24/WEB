let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.028286, lng: 105.7817893 },
        zoom: 20.25,
    });
}

window.initMap = initMap;