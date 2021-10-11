const array=[];
signup.addEventListener('click', ()=>{
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

    class object{
        constructor(name, mail, pass, confirm, num){
            this.name=name;
            this.email=mail;
            this.password=pass;
            this.confirmpass=confirm;
            this.number=num;
        }   
    }
    let items = new object(name, email, password, confirmpass, number);
    array.push(items); 
    //console.log(array);
    let result="";
    for(i=0; i<array.length;i++)
    {
        result+=`Name= ${array[i].name}` + `Email= ${array[i].email}` + `Password= ${array[i].password}` + `Confirm Password= ${array[i].confirmpass}` + `Mobile number= ${array[i].number}`;
        console.log(result);
}
    fullname.value="";
    email.value="";
    password.value="";
    confirmpassword.value="";
    mobile.value="";
})
