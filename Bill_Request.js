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
let name = document.getElementById('name');
let chkSplit = document.getElementById('chkSplitEvenly');

var usersCount = 0;

chkSplit.addEventListener('change', e => {

    if(e.target.checked){
        console.log('checked')
    }
    else
    {
        console.log('un checked')
    }

    console.log(theAmount.value);
    console.log(usersCount)

    console.log(theAmount.value / usersCount);

});


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

    // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store

    localStorage.setItem("userCount", usersCount); 

    for(let i=0; i<usersCount; i++) {

        console.log("addpar_"+i)

        console.log(document.getElementById("addpar_"+i))

        console.log(document.getElementById("addpar_"+i).value)

        localStorage.setItem(i, document.getElementById("addpar_"+i).value + "16/11"+ (theAmount.value / usersCount));
    }
  }


    //window.location.href = 'request_sent.html';

   /* // console.log(JSON.stringify(ref));
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
    // );*/
});

// for(let i=0; i<5; i++) {
//         <div class="fourthdiv4">
//         <img src="images/Vector_13.png" alt="">
//         <p>Namhyung Kim</p>
//         <input type="text" id="amount3" placeholder="$">
        
//         </div>
//         var content = "<div id='addiv_"+i+"'><img id='addimg_"+i+"' src='../images/Vector_13.png' alt=''><p id='addpar_"+i+"'>Namhyung Kim</p><input id='addtext_"+i+"' type='text' placeholder='$'></div>"

//         document.getElementById('fourthdiv').innerHTML += content;
        
       
//         var new_element = document.createElement('div');
//         var sp = document.createElement('span');
//         var br = document.createElement('br');
//         var img = document.createElement('img');
//         var text_field = document.createElement('text');
//         img.setAttribute('src', 'images/Vector_13.png');
        
//         var span_text = document.createTextNode('hello');
//         sp.appendChild(span_text);
//         var my_container = document.getElementById("fourthdiv");
//         my_container.appendChild(img);
//         my_container.appendChild(sp);
//         my_container.appendChild(text_field);
//         my_container.appendChild(br);
        
        
// }

add_friend_btn.addEventListener('click', () => {
    console.log(name.value);

    var content = "";

    document.getElementById('fourthdiv').innerHTML =  content;

    for(let i=0; i<=usersCount; i++) {

        var content = "<div id='addiv_"+i+"'><img width='10' height='30' id='addimg_"+i+"' src='../images/Vector_13.png' alt=''><p id='addpar_"+i+"'>"+name.value+"</p><input id='addtext_"+i+"' type='text' placeholder='$'></div>"
        document.getElementById('fourthdiv').innerHTML += content;
    }

    usersCount++;
     
})

  