// Initialize and add the map
function initMap() {
    // The location of Uluru

    const estacionCentral = { lat: -33.4545813930147, lng: -70.68067246033456 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 15,
        center: estacionCentral,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: estacionCentral,
        map: map,
    });
}

window.initMap = initMap;