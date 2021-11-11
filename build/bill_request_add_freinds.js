

var container = document.getElementById("grid");
var cell = document.createElement("div");
cell.innerHTML = "Add Friends";
// container.appendChild(cell);
document.getElementById("grid").appendChild(cell);

function row_click(name) {
    alert(name);
    set(ref(db,'users/'+ selectedvalue),{
        'value': name
    })
    location.href='../build/Bill_Request.html?selectedvalue='+name;
}