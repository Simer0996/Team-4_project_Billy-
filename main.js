//Add Bill
let bill_array = []; //Array storage
// let add = document.getElementById("btn2")//Add button function

// import AddBill from "./js_modules/Add_bill.js"; //imported the class of dynamic object
//Object creation

let mainClass = Array.from(document.querySelector('main').classList);
console.log('main class', mainClass);

function getClass(list, cls) {
   let res = list.includes(cls);
   // console.log(res);
   return res;
}

//New Bill page
(async () => {
   if (getClass(mainClass, 'new-bill')) {
      console.log('this is New Bill page');
      const {
         default: AddBill
      } = await import('./js_modules/Add_bill.js');
      btn2.addEventListener('click', (e) => {
         e.preventDefault()
         let bill_object = new AddBill(bills.value, amount.value, date.value, area.value)
         bill_array.push(bill_object)
         console.log(bill_array)
         outputArea.innerText = "Bill Added!"

         localStorage.setItem('bill_array', JSON.stringify(bill_array));

      })
   }
})();

//Recovering data from local storage
let recoveredString = localStorage.getItem('bill_array');
console.log(recoveredString);
let newArray = JSON.parse(recoveredString);
console.log(newArray);

//History page
(async () => {
if (getClass(mainClass, 'history')) {
   console.log('this is History page');
   const {
      default: createTable
   } = await import('./js_modules/History.js');
   createTable;
}
})();

// Home page
(async () => {
if (getClass(mainClass, 'homePage')) {
   console.log('this is Home page');
   const {
      default: arrayHome
   } = await import('./js_modules/Home.js');
   arrayHome;
}
})();

