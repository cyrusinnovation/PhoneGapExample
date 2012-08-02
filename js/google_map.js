$(document).ready(function () {
    $('#page2').live("pageshow", function(){
        $('#map_canvas').gmap('refresh');
    });

    $('#page2').live("pageinit", function(){
        var yourStartLatLng = new google.maps.LatLng(59.3426606750, 18.0736160278);
        $('#map_canvas').gmap({'center':yourStartLatLng});
    });

});
