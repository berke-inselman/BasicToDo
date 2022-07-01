var taskID = 0;

var ToDoWrapper = document.querySelector(".ToDoWrapper");
var addToDo = document.getElementById("addToDo");
var submitButton = document.getElementById("submitButton");

addToDo.addEventListener("keyup",function(){
    console.log(addToDo.value);
});

submitButton.addEventListener("click",function(){
  if (addToDo.value.length == 0){
    alert("Lütfen görev giriniz...");
  }
  else{
    let li = document.createElement("li");
    li.setAttribute("id","litask"+taskID);
    let task = document.createElement("div");
    task.classList.add("task")
    li.appendChild(task);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("id","task"+taskID);
    checkbox.addEventListener("click",checked);
    task.appendChild(checkbox);
    let label = document.createElement("label");
    label.setAttribute("for","task"+taskID);
    let txt = document.createTextNode(addToDo.value);
    label.appendChild(txt);
    task.appendChild(label);
    let optionsMenu = document.createElement("div");
    optionsMenu.classList.add("optionsMenu");
    let optionsIcon = document.createElement("i");
    optionsIcon.classList.add("fa-solid","fa-ellipsis");
    optionsMenu.appendChild(optionsIcon);
    let optionsDrop = document.createElement("div");
    optionsDrop.classList.add("optionsDrop");
    
    let edit = document.createElement("span");
    let editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid","fa-pen");
    let editText = document.createTextNode("Edit");
    edit.appendChild(editIcon);
    edit.appendChild(editText);

    let trash = document.createElement("span");
    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid","fa-trash-can");
    let trashText = document.createTextNode("Delete");
    trash.appendChild(trashIcon);
    trash.appendChild(trashText);

    optionsDrop.appendChild(edit);
    optionsDrop.appendChild(trash);

    trash.addEventListener("click",function(){
        ToDoWrapper.removeChild(li);
    });

    edit.addEventListener("click", function(){
        label.innerText = addToDo.value;
        addToDo.value = "";
    });

    optionsMenu.appendChild(optionsDrop);
    optionsMenu.addEventListener("click",function(){
        optionsDrop.classList.toggle("d-flex");
    });
    li.appendChild(optionsMenu);
    console.log(li);
    ToDoWrapper.appendChild(li);
    taskID++;
    addToDo.value = "";
  }
});

function clearall(){
    let lngth  = ToDoWrapper.children.length;
    if(lngth > 0){
    ToDoWrapper.innerHTML = "";
    console.log(lngth);
    }
    else{
        alert("Zaten liste boş");
    }
}
function checked(){
    if ( this.checked == true ){
        const checkli = document.querySelector("#li"+this.id);
        checkli.classList.add("checked");
        this.checked = true;
        console.log(checkli);
    }
    else{
        const checkli = document.querySelector("#li"+this.id);
        checkli.classList.remove("checked");
        this.checked = false;
        console.log(checkli);
    }
}


