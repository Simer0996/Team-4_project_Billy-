/*let messageRef=firebase.database().ref('messages');

document.getElementById('sett').addEventListener('click', submitform);

function submitform(e){
    e.preventDefault();

let subject=getInputVal('subject');
let input=getInputVal('input');

saveMessage(subject, input);
}

function getinput(id){
    return document.getElementById(id).value;
}

function saveMessage(subject, input){
    var newmessageref=messageRef.push();
    newmessageref.set({
        subject:subject,
        input:input
    });
}*/

//import emailjs from "emailjs-com";
//import{ init } from 'emailjs-com';
//init("user_TSV6FaAA5RP0AU1yPU4Au");
/*export default function ContactUs(){

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_vwwkuuj', e.target, 'user_TSV6FaAA5RP0AU1yPU4Au')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

sett.addEventListener('click', sendEmail);
}*/

sett.addEventListener('click', ()=>{
    let templateParams = {
        subject: subject.value,
        message: input.value
    };
    emailjs.send('service_06wkfum', 'template_vwwkuuj', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
});