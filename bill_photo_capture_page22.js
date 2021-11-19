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