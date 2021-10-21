
import bill_array from '../main.js';

let table = document.getElementById('tableOutput');

let row0 = table.insertRow(0);
let cell01 = row0.insertCell(0);
let cell02 = row0.insertCell(1);
let cell03 = row0.insertCell(2);
let cell04 = row0.insertCell(3);

cell01.innerHTML = "Due Date"
cell02.innerHTML = "Catagory"
cell03.innerHTML = "Amount"
cell04.innerHTML = "Status"

for(let i of bill_array)
{
   let row1 = table.inserRow(1)
   let cell11 = row1.insertCell(0);
   let cell12 = row1.insertCell(1);
   let cell13 = row1.insertCell(2);
   let cell14 = row1.insertCell(3);

   cell11.innerHTML = `${i.date}`
   cell12.innerHTML = `${i.bills}`
   cell13.innerHTML = `${i.amount}`
   cell14.innerHTML = `<input type="checkbox">`
}