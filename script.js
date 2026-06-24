function sendSOS(){
    alert("SOS Alert Activated!");
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