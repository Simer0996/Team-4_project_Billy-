//Add Bill
export let bill_array = [];//Array storage
// let add = document.getElementById("btn2")//Add button function

import AddBill from "../js_modules/Add_bill.js";//imported the class of dynamic object
 //Object creation
    

btn2.addEventListener('click',(e)=>{   
e.preventDefault()    
let bill_object = new AddBill( bills.value, amount.value, date.value, area.value)    
bill_array.push(bill_object)
console.log(bill_array)                 

outputArea.innerText="Bill Added!"


console.log(bill_object);

});











