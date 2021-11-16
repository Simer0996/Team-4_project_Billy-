console.log("Hello from Request sent page");

let count = localStorage.getItem("userCount"); 

console.log(count)

for(let i=0; i<count; i++) {
 var selectedValue = localStorage.getItem(i);

 const objectUser = selectedValue.split("+");

 console.log(objectUser[0] + "  " + objectUser[1] + "  " + objectUser[2])
}