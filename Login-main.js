  login.addEventListener('click', ()=>{
  let useremail=document.getElementById('email').value;
  let userpassword=document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
  .then(function(userCredential){
    console.log('User login successfully', userCredential.user);
    setTimeout(function(){
      window.location.href="./Home.html";
    }, 3000)
  })
  .catch(function(error){
  let errorCode=error.code;
  let errorMessage=error.message;

  window.alert("Error:" + errorMessage);
});
})
//================================




//How to know what is the status of user, is login or not login
//If(user in login)
  //  go to the home page
//else
 //   load login page    





