let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    
    // add when button clicked
    toDoContainer.appendChild(paragraph);

    // reseting inputField
    inputField.value = "";

    // draw a line when clicked
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })

    // remove when paragraph dblclicked
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
})