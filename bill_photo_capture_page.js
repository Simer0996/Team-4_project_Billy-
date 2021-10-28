console.log('Hello Capture');


const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');

const constraints = {
    audio: true,
    video: {
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