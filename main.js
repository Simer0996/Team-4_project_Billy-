//Add Bill
let bill_array = [];//Array storage
// let add = document.getElementById("btn2")//Add button function
let tableContent = document.getElementById("content")//Table id in history page
let output = document.getElementById("status")//Feedback status on add bill page


import AddBill from "../js_modules/Add_bill.js";//imported the class of dynamic object
let bill_object = new AddBill( bills.value, amount.value, date.value, area.value); //Object creation


btn2.addEventListener('click',()=>{          //Event for the add bill page
bill_array.push(bill_object)
console.log(bill_array);                    

output.innerText="Bill Added!"


console.log(bill_object);


//History page
let historyContent = "<tr><th>Due Date</th><th>Catagory</th><th>Amount</th><th>Status</th>"

for(let i of bill_array)
{
    tableContent.innerHTML = `<tr>${i.Catagories}</tr><tr>${i.Amount}</tr><tr>${i.Date}</tr><tr>${i.Memo}</tr>`
}
historyContent = historyContent + tableContent;

});









