//const array=[];
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
console.log('this is test from harinder');
//const array=[];
login.addEventListener('click', ()=>{
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;
const promise=auth.signInwithEmailANDPassword(email.value, password.value);
promise.catch(e=>alert(e.message));
 
    /*const object1={
        email: email.value,
        password: password.value
    }; 
    array.push(object1); 
    let result="";
    for(i=0; i<array.length;i++)
    {
        result+=`Email= ${array[i].email}` + `Password= ${array[i].password}`;
        console.log(result);
    }*/
    email.value="";
    password.value="";
})