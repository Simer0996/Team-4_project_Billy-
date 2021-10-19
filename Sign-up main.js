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

/*var messageRef=firebase.database().ref('messages');

document.getElementById('signup').addEventListener('click', submitform);

function submitform(e){
    e.preventDefault();

let fullname=getInputVal('fullname');
let email=getInputVal('email');
let password=getInputVal('password');
let confirmpassword=getInputVal('confirmpassword');
let mobile=getInputVal('mobile');

saveMessage(fullname, email, password, confirmpassword, mobile);
}

function getinput(id){
    return document.getElementById(id).value;
}

function saveMessage(fullname, email, password, confirmpassword, mobile){
    var newmessageref=messageRef.push();
    newmessageref.set({
        fullname:fullname,
        email:email,
        passwoed:password,
        confirmpassword:confirmpassword,
        mobile:mobile
    });
}*/

/*signup.addEventListener('click', ()=>{
let name=document.getElementById('fullname').value;
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;
let confirmpass=document.getElementById('confirmpassword').value;
let number=document.getElementById('mobile').value;
if(name==='' || email==='' || password==='' || confirmpass==='' || number===''){
    alert('All fields are required');
    return false;
}
else if(password!=confirmpass){
    alert('Check your confirm password field again')
    return false;
}

const promise=auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e=>alert(e.message));
alert("SignUp successfully");

    fullname.value="";
    email.value="";
    password.value="";
    confirmpassword.value="";
    mobile.value="";
})*/

signup.addEventListener('click', ()=>{
    var email=document.getElementById("email");
    var password=document.getElementById("password");

    const promise=auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e=>alert(e.message));
    alert("SignUp successfully");
})
