
export default function arrayHome() {
for (let i of newArray) {
    let row1 = document.getElementById("myTable").insertRow(0)
    let cell1 = row1.insertCell(0);
    let cell2 = row1.insertCell(1);
    cell1.innerHTML = `${i.Catagories}`
    cell2.innerHTML = `${i.Amount}$`
}
}