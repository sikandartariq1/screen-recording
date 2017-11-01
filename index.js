

'use strict';
$('#gum-res-local').on('mousedown', function (e) {

    $(this).addClass('active').parents().on('mousemove', function (e) {

        $('.active').offset({

            top: e.pageY - $('.active').outerHeight() / 2,
            left: e.pageX - $('.active').outerWidth() / 2

        }).on('mouseup', function () {

            $(this).removeClass('active');

        });

    });

    return false;
});


var dimensions = document.querySelector('#dimensions');
var video = document.querySelector('video');
var pdf = document.querySelector('#pdf');
var pdfFrame = document.querySelector('#viewer');

var stream;
var stop = document.querySelector('#stop');

var vgaButton = document.querySelector('#vga');
var qvgaButton = document.querySelector('#qvga');

//var hdButton = document.querySelector('#hd');
//var fullHdButton = document.querySelector('#full-hd');



vgaButton.onclick = function () {
    getMedia(vgaConstraints);

    if (pdf.classList.contains('pdfDiv')) {
        pdf.classList.add('pdfDiv2');
        pdf.classList.remove('pdfDiv');

        pdfFrame.classList.add('pdfDiv2');
        pdfFrame.classList.remove('pdfDiv');

    }

};

qvgaButton.onclick = function () {
    getMedia(qvgaConstraints);
    if (pdf.classList.contains('pdfDiv2')) {
        pdf.classList.add('pdfDiv');
        pdf.classList.remove('pdfDiv2');

        pdfFrame.classList.add('pdfDiv');
        pdfFrame.classList.remove('pdfDiv2');

    }

};

//hdButton.onclick = function () {
//    getMedia(hdConstraints);
//};

stop.onclick = function () {
    getMedia(fullHdConstraints);
};

function stop(){
    MediaStream.stop();

}

var qvgaConstraints = {
    video: { width: { exact: 250 }, height: { exact: 250 } }
};

var vgaConstraints = {
    video: { width: { exact: 250 }, height: { exact: 250 } }
};

var hdConstraints = {
    video: { width: { exact: 1280 }, height: { exact: 720 } }
};

var fullHdConstraints = {
    video: { width: { exact: 1920 }, height: { exact: 10080 } }
};

function gotStream(mediaStream) {
    window.stream = mediaStream; // stream available to console
    video.srcObject = mediaStream;
    dimensions.innerHTML = ' ';
}

function displayVideoDimensions() {
    if (!video.videoWidth) {
        setTimeout(displayVideoDimensions, 500);
    }
    //dimensions.innerHTML = 'Actual video dimensions: ' + video.videoWidth +
    //  'x' + video.videoHeight + 'px.';
}

//video.onloadedmetadata = displayVideoDimensions;

function getMedia(constraints) {
    if (stream) {
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
    }

    navigator.mediaDevices.getUserMedia(constraints)
    .then(gotStream)
    .catch(function (e) {
        var message = 'getUserMedia error: ' + e.name;

        console.log(message);
    });
}

