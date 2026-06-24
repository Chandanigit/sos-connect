function sendSOS(){

    navigator.geolocation.getCurrentPosition(function(position){

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        alert("SOS Alert Activated!");

        let mapsLink =
        `https://www.google.com/maps?q=${lat},${lon}`;

        window.open(mapsLink,"_blank");

    });

}
function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(
            function(position){

                document.getElementById("location").innerHTML =
                "Latitude: " +
                position.coords.latitude +
                "<br>Longitude: " +
                position.coords.longitude;

            }
        );

    }
    else{
        alert("Location not supported");
    }

}
function findHospital(){

window.open(
"https://www.google.com/maps/search/hospitals+near+me",
"_blank"
);

}
function firstAid(){

alert(
"Emergency First Aid:\n\nBurn = Cool water\nBleeding = Apply pressure\nFracture = Keep still and call ambulance"
);

}
