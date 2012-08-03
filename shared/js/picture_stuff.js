$(document).ready(function () {
    // Page 3 - picture sharing

    $('#take_picture').click(function(){
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
    });

    function onSuccess(imageData) {
        $.mobile.changePage($('#page4'),{transition: 'slide'});
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

});