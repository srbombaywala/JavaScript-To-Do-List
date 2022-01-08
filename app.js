const todoInput=document.querySelector(".todo-input");
const okBtn = document.querySelector(".ok-btn");

okBtn.addEventListener("click",doEntry);

function doEntry(e){
    
    e.preventDefault();
    // ------------------------------
    
    const newPack = document.createElement("div");
    newPack.classList.add("pack");
    document.getElementById("todo-entry").appendChild(newPack)
    
    const newEntry = document.createElement("li");
    newEntry.innerText = todoInput.value;
    newEntry.classList.add("todo-entered");
    newPack.appendChild(newEntry);
    todoInput.value="";
    
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "OK";
    doneBtn.classList.add("done");
    newPack.appendChild(doneBtn);

    
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    delBtn.classList.add("delete");
    newPack.appendChild(delBtn);
   
}

const todoEntry = document.querySelector("#todo-entry");
todoEntry.addEventListener("click",removeEntry)

function removeEntry(e){
    const targetTodo = e.target;
    console.log(targetTodo);
    
    if (targetTodo.classList[0] === "delete"){
        targetTodo.parentElement.style.display = "none";
    }
    if (targetTodo.classList[0] === "done"){
        console.log("done");
        targetTodo.parentElement.childNodes[0].classList.toggle("doneTodo");
    }
    

}