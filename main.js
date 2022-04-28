// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
    let userData = inputBox.value; // get entered value
    if(userData.trim() != 0) { // if values aren't only spaces
        addBtn.classList.add("active"); // activate button
    }else {
        addBtn.classList.remove("active"); // unactivate button 
    }
}

showTasks(); // calling function to show added todos

// if user click on the add button
addBtn.onclick = () => {
    let userData = inputBox.value; // get entered value
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = []; // create blank array
    }else {
        listArr = JSON.parse(getLocalStorage); // transform json string into js object
    }
    listArr.push(userData); // pushing user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // trasform js object into json string
    showTasks(); // calling function to show added todos
    addBtn.classList.remove("active");
}

// add task list into ul(.todoList)
function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = []; // create blank array
    }else {
        listArr = JSON.parse(getLocalStorage); // transform json string into js object
    }
    
    const pendingNum = document.querySelector(".pendingNum");
    pendingNum.textContent = listArr.length; // passing the length value 
    if(listArr.length > 0) {
        deleteAllBtn.classList.add("active"); // activate clear all button
    }else {
        deleteAllBtn.classList.remove("active");
    }

    let newLiTag =``;
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fa-solid fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; // adding new li tag inside ul
    inputBox.value = ""; // once value added leave the input field blank
}

// delete task function
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); // remove particular index li
    // after remove the li again update update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // trasform js object into json string   
    showTasks();
}

// delete all tasks
deleteAllBtn.onclick = () => {
    listArr = [];
    // after delete all array again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

