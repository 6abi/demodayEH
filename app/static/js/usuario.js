//geolozalização
document.addEventListener('DOMContentLoaded', function(){

    let target = document.querySelector('#map');
    
    navigator.geolocation.getCurrentPosition(function(position) {

        let latitude   = position.coords.latitude;
        let longitude  = position.coords.longitude;
        let coordinate = new google.maps.LatLng(latitude, longitude);

        let optionsMap = {
                    center : coordinate,
                    zoom: 19,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        let map = new google.maps.Map(target, optionsMap);

        let configMarker = {
                             position : coordinate,
                             map : map,
                             title: "Você está aqui!"
                            };

        var marker = new google.maps.Marker(configMarker);

    });
});



