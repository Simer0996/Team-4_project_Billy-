// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration*/
//const firebaseConfig = {
  //apiKey: "AIzaSyA588GyaRwUeolD6zmxbjvS8EU7Lq-EF_s",
  //authDomain: "billy-payment-app.firebaseapp.com",
  //projectId: "billy-payment-app",
  //storageBucket: "billy-payment-app.appspot.com",
  //messagingSenderId: "716948441529",
  //appId: "1:716948441529:web:d7d954ed60d569ddcf0e68"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
//const auth=firebase.auth();
console.log("Sign up loaded");
signup.addEventListener('click', ()=>{
    let uemail=document.getElementById("email");
    let upassword=document.getElementById("password");
    let ufullname=document.getElementById("fullname");
    let uconfirmpassword=document.getElementById("confirmpassword");
    let umobile=document.getElementById("mobile");

    auth.createUserWithEmailAndPassword(uemail.value, upassword.value)
    .then(()=>{
      console.log('User has been created');
    })
    .catch((error)=>{
      console.log(error.message);
    });
    //promise.catch(e=>alert(e.message));
    //alert("SignUp successfully");
})
