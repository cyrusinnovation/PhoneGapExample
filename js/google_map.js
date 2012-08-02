$(document).ready(function () {
    var cyrusPosition = {lat:40.728657, long:-74.004722};


    $('#page2').live("pageshow", function () {
        $('#map_canvas').gmap('refresh');
    });

    $('#page2').live("pageinit", function () {
        getCurrentPosition();
    });

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    function updateMap(lat, long) {
        var yourStartLatLng = new google.maps.LatLng(lat, long);
        $('#map_canvas').gmap({'center':yourStartLatLng});
    }

    function addMarker(lat, long) {
        $('#map_canvas').gmap('addMarker', { 'position':new google.maps.LatLng(lat, long) });
    }

    var onSuccess = function (position) {
        updateMap(position.coords.latitude, position.coords.longitude);
        addMarker(position.coords.latitude, position.coords.longitude);
    };

    function onError(error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    $("#get_directions").click(function () {
        $("#loading_overlay").show();
        navigator.geolocation.getCurrentPosition(function (position) {
            $('#map_canvas').gmap('displayDirections', {
                    'origin':new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    'destination':new google.maps.LatLng(cyrusPosition.lat, cyrusPosition.long),
                    'travelMode':google.maps.DirectionsTravelMode.WALKING },
                {'panel':document.getElementById('directions')},
                function (success, result) {
                    $("#get_directions span span").html("Refresh Directions to Cyrus");
                    $("#loading_overlay").hide();
                }
            );
        }, onError);
    });
});
