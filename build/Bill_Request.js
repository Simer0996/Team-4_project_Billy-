console.log("Hello There");
let btnAdd = document.getElementbyId('addButton');
let btnSub = document.getElementbyId('subButton');
let input = document.getElementbyId('noOFPeople');

btnAdd.addEventListener('click',() => {
    input = parseInt(noOFPeople.value);
});

btnSub.addEventListener('click',() => {
    input = parseInt(noOFPeople.value);    
});

