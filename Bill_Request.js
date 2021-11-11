import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js";
const db = getDatabase();
console.log(db);
// const set = require("set-value");



console.log("Hello There");
let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
let qty = document.querySelector('#qtyBox');

let theAmount = document.getElementById('totalAmount');
let am1 = document.getElementById('amount1');
let am2 = document.getElementById('amount2');
let am3 = document.getElementById('amount3');
let send = document.getElementById('send_btn');

addBtn.addEventListener('click',() => {
    console.log("added");
    qty.value = parseInt(qty.value) + 1;
});

subBtn.addEventListener('click',() => {
    
    if (qty.value <= 0) {
        qty.value = 0;
    }  
    else {
        qty.value = parseInt(qty.value) - 1;
    }
});

function saveData(ref) {
    // const billRef = ref.child('bill');
    ref.set(
        {
            'total_amount': theAmount.value,
            'no_of_people': qty.value,
            'amount_1': am1.value,
            'amount_2': am2.value,
            'amount_3': am3.value
        }
    )
    .then(() => {
        alert("data has been added successfully");
    })
    .catch((error) => {
        alert("unsuccessful, error");
    });
}

function insertData() {
    set(ref(db, "TheData/"+ qty.value),{
        total_amount: theAmount.value,
        no_of_people: qty.value,
        amount_1: am1.value,
        amount_2: am2.value,
        amount_3: am3.value
    })

    .then(() => {
        alert("data has been added successfully");
    })
    .catch((error) => {
        alert("unsuccessful, error");
    });
}

send.addEventListener('click',() => {
    // console.log(JSON.stringify(ref));
    // saveData(ref);
    set(ref(db,'bills/'+ new Date().getTime()),{
        'total_amount': theAmount.value,
            'no_of_people': qty.value,
            'amount_1': am1.value,
            'amount_2': am2.value,
            'amount_3': am3.value
    })
    .then(() => {
        alert("data has been added successfully");
    })
    .catch((error) => {
        alert("unsuccessful, error");
    });
    // ref.child('test').set(
    //     {
    //         'total_amount': theAmount.value,
    //         'no_of_people': qty.value,
    //         'amount_1': am1.value,
    //         'amount_2': am2.value,
    //         'amount_3': am3.value
    //     }
    // );
});