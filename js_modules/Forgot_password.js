const auth = firebase.auth();

export const newpassFunction = () => {

    let useremail = document.getElementById('email').value;
    console.log('user email', useremail);
    auth.sendPasswordResetEmail(useremail)
        .then(() => {
            console.log("Password reset email sent");
        })
        .catch(error => {
            console.error(error);
        })
}

newpass.addEventListener('click', newpassFunction);