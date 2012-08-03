$(document).ready(function () {
    // Page 3 - picture sharing

    $('#take_picture').click(function () {
        navigator.camera.getPicture(onPhotoURISuccess, onCancelOrFail,
            {
                quality:50,
                destinationType: Camera.DestinationType.FILE_URI
            }
        );
    });

    $('#select_picture').click(function () {
        navigator.camera.getPicture(onPhotoURISuccess, onCancelOrFail,
            {
                quality:50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            }
        );
    });

    $('#show-footer-menu').click(function () {
        $('#footer-menu').slideDown('fast');
        $('#hide-footer-menu').show();
        $(this).hide();
    });

    $('#hide-footer-menu').click(function () {
        $('#footer-menu').slideUp('fast');
        $('#show-footer-menu').show();
        $(this).hide();
    });

    function onPhotoURISuccess(imageURI) {
        $.mobile.changePage($('#page4'), {transition:'slide'});
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onCancelOrFail(message) {
        if(message === "no image selected") return;

        alert('Failed because: ' + message);
    }
});