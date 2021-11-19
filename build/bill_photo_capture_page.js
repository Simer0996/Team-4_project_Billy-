// const Webcam = require("./webcamjs");
// import Webcam, { set } from "./webcamjs/webcam.min";
// set({
//     width: 320,
//     height: 240,
//     image_format: 'jpeg',
//     jpeg_quality: 90
// });
console.log('Hello Capture');


const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');

const constraints = {
    // audio: true,
    video: {
        video:{facingMode: "user"},
        video: { facingMode: { exact: "environment" } },
        width: { min:1024, ideal: 1280,max:1920 },
        height: { min:576, ideal:720, max:1080 }
    }
}

async function startWebCam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        window.stream = stream;
    } catch (error) {
        console.log(error.toString());
    }
}

var context = canvas.getContext('2d');

snap.addEventListener('click', () => {
    context.drawImage(video, 0, 0, 640, 480);
});

startWebCam();

saveButton.addEventListener('click', (e) => {
        console.log("savebutton function");
        const link = document.createElement('a');
        link.download = 'download.png';
        link.href = canvas.toDataURL();
        link.click();
        link.delete;
    //     Webcam.snap( function(data_uri) {
    //     console.log(data_uri);
    //     } )
    //     Webcam.snap( function(data_uri) {
    //     document.getElementById('canvas').innerHTML = 
    //        '<img id="imageprev" src="'+data_uri+'"/>';
    // } )

    // Webcam.reset();

});
