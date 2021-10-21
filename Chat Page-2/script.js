// //Load firebase database 

const firebaseConfig = {
    apiKey: "AIzaSyBJd0zUZ_bPZ3NFAfUwt0NhlsDJMdwhftY",
    authDomain: "billy-langara.firebaseapp.com",
    projectId: "billy-langara",
    storageBucket: "billy-langara.appspot.com",
    messagingSenderId: "809749583925",
    appId: "1:809749583925:web:afe89756b5dcff438e797c",
    measurementId: "G-B85DSNX3C4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = firebase.database();


let input = document.getElementById("message");

$(".btn-send").on('click', () => {
    let messages = document.getElementById("messages");
    let value = message.val().value;

    let addDiv = document.createElement("div");
    let addSpan = document.createElement("span");

    let addP = document.createElement("p");
    messages.innerHTML = value;

    addDiv.appendChild(addSpan);
    addDiv.appendChild(addP);
    messages.appendChild(addDiv);

})

$('.icon-back').on('click', () => {
    window.location.href = '../Chat Page-1/index.html'
})