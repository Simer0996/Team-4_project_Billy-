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