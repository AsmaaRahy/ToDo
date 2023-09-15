let taskInput=document.querySelector("input");
let btnAdd=document.querySelector(".add-btn");
let allTasks=[];
let taskItem=document.querySelector("#tasks .row");
let btnDel=document.querySelector(".btn-del");
let btnEdit=document.querySelector(".btn-edit");
let h3=document.querySelector("#h3");

window.addEventListener("load",function(){
    taskInput.focus();
})

///////////////Dadding Function
let addTasks = () =>{
    task={
        task:taskInput.value
    }
    if(taskInput.value==""){
        alert("Please fill out the input to add a task!")
    }else{
    allTasks.push(task);
    taskInput.value="";
    showTasks();
    }
}
btnAdd.addEventListener("click",addTasks);



////////////////////// Show items in document
let showTasks= () =>{
    taskItem.innerHTML=""
    allTasks.forEach((element,index)=>{
        taskItem.innerHTML +=`
        <div class="row">
        <div class="item">
            <h3> ${element.task}</h3>
            <div class="btns">
            <i class="fa-regular fa-pen-to-square btn-edit" onclick="update()"></i>
            <i class="fa-regular fa-trash-can btn-del" onclick="deleteTask(${index})"></i>


            
            </div>
        </div>
    </div>`
    })
}
showTasks()

///////////////////////// Delete ////////////////////////////////////////////////

let deleteTask = (index) =>{
    allTasks.splice(index,1);
    showTasks();
}
btnDel.addEventListener("click",deleteTask)

//////////////////////// Edit ///////////////////////////////////////////



// let saveItem = (event)=>{
//     let inputValue=event.target.value;
//     if(event.target.value.length >0 && (event.keyCode=== 13 || event.type === "click") ){
//         let li = document.createElement("li");
//         li.addEventListener("click",updatedItem);
//         li.innerText= event.target.value;
//         event.target.parentNode.prepend(li);
// 		event.target.remove();
//     } else if (event.target.value.length === 0 && (event.keyCode === 13 || event.type === 'click')) {
// 		let li = document.createElement('li');
// 		li.addEventListener('dblclick', editItem);
// 		li.textContent = initialValue;
// 		event.target.parentNode.prepend(li);
// 		event.target.remove();
// 	}
// }
// let initialValue;

// let updatedItem = (event) =>{
//     let item= event.target.innerHTML;
//     let inputUpdate=document.createElement("input");
//     inputUpdate.type="text";
//     inputUpdate.value=item;
//     inputUpdate.classList.add('edit');
//     inputUpdate.addEventListener("keyup", saveItem);
    
// }

// let update= ()=>{
//     let inputUpdate= document.createElement("input");
//     inputUpdate.id="new-input";
//     inputUpdate.placeholder="new"
//     let parentDiv=h3.parentNode;
//     parentDiv.replaceChild(inputUpdate,h3)

// }
function update(){

    // let updates = document.getElementsByClassName('names');

    // taskInput.value = allTasks[index].task;
    // add.innerHTML = 'update';
    // mood = 'update';
    // tmp = index;
    // scroll({
    //     top: 0,
    //     behavior: 'smooth'
    // })
    // title.focus()

    h3.innerHTML+='hii'
    taskInput=h3.innerHTML+='hii'

}

btnEdit.addEventListener("click",update)