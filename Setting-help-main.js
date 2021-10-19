// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration*/
const firebaseConfig = {
  
  apiKey: "AIzaSyA588GyaRwUeolD6zmxbjvS8EU7Lq-EF_s",
  authDomain: "billy-payment-app.firebaseapp.com",
  projectId: "billy-payment-app",
  storageBucket: "billy-payment-app.appspot.com",
  messagingSenderId: "716948441529",
  appId: "1:716948441529:web:d7d954ed60d569ddcf0e68"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();

var messageRef=firebase.database().ref('messages');

document.getElementById('sett').addEventListener('click', submitform);

function submitform(e){
    e.preventDefault();

let subject=getInputVal('subject');
let input=getInputVal('input');

saveMessage(subject, input);
}

function getinput(id){
    return document.getElementById(id).value;
}

function saveMessage(subject, input){
    var newmessageref=messageRef.push();
    newmessageref.set({
        subject:subject,
        input:input
    });
}

