//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
firebase.auth().onAuthStateChanged(function(User){
  if(User){
    //document.getElementById("loginform").style.display="block";
    document.getElementById("inputfieldnew").style.display = "none";
  }
  else{
    document.getElementById("inputfieldnew").style.display = "block";
    //document.getElementById("loginform").style.display="none";
  }
});
//const auth = getAuth();
//function userlog(){
  login.addEventListener('click', ()=>{
  let useremail=document.getElementById('email').value;
  let userpassword=document.getElementById('password').value;
  //console.log( `${useremail}`);})

  firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error){
  let errorCode=error.code;
  let errorMessage=error.message;

  window.alert("Error:" + errorMessage);
});
})

/*signInWithEmailAndPassword(auth, useremail, userpassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });*/


/*
const promise=auth.signInwithEmailANDPassword(email.value, password.value);
promise.catch(e=>alert(e.message));
    email.value="";
    password.value="";
})*/