$(document).ready(function () {


    $('#page2').live("pageshow", function(){
        $('#map_canvas').gmap('refresh');
    });

    $('#page2').live("pageinit", function(){
        getCurrentPosition();
    });

    function getCurrentPosition(){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    function updateMap(lat, long){
        var yourStartLatLng = new google.maps.LatLng(lat, long);
        $('#map_canvas').gmap({'center':yourStartLatLng});
    }

    function addMarker(lat, long){
        $('#map_canvas').gmap('addMarker', { 'position': new google.maps.LatLng(lat,long) });
    }

    var onSuccess = function(position) {
        updateMap(position.coords.latitude, position.coords.longitude);
        addMarker(position.coords.latitude, position.coords.longitude);
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

});
