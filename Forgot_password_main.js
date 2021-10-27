const auth=firebase.auth();

const newpassFunction=()=>{

let useremail=document.getElementById('email').value;
console.log('user email', useremail);
let labels=document.getElementsByTagName('label');
let newpass=document.getElementById('newpass').value;

    const email=useremail;

    auth.sendPasswordResetEmail(email)
    .then(()=>{
        console.log("Password reset email sent");
    })
    .catch(error=>{
        console.error(error);
    })
}

newpass.addEventListener('click', newpassFunction);




