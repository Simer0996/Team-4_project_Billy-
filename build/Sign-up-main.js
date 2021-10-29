
console.log("Sign up loaded");
signup.addEventListener('click', ()=>{
    let uemail=document.getElementById("email");
    let upassword=document.getElementById("password");
    let ufullname=document.getElementById("fullname");
    let uconfirmpassword=document.getElementById("confirmpassword");
    let umobile=document.getElementById("mobile");

    auth.createUserWithEmailAndPassword(uemail.value, upassword.value, ufullname, uconfirmpassword, umobile)
    .then(()=>{
      console.log('User has been created');
      alert("Sign Up successfull");
    })
    .catch((error)=>{
      console.log(error.message);
    });
})
