


$.ajax({
    method:'GET',
    url: 'https://jsonplaceholder.typicode.com/todos',
    dataType: 'json'
}).done(function(data){
    $.map(data, function(obj, i){
        getTodo(obj)
    })   
})


    
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const filterOption= document.querySelector('#abcd');
var todoCounter = 0;

todoButton.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener('change', filterTodo );

// Retrieve Todo

function getTodo(obj){
    
    //todo div
    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');
    
    //create li
    const newTodo= document.createElement('li');
    newTodo.innerText = obj.title;
    newTodo.classList.add('todo-pp');
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class = 'fas fa-check' ><i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); 

    //check mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class = 'fas fa-trash' ><i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv)

    if((obj.completed)===true){
 
    todoDiv.classList.add("completed")
      
    }
}

// New Todo //

function addTodo(event){
    event.preventDefault();  // to prevent form from submitting
    

    //todo div
    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');

    //create li
    const newTodo= document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-pp');
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class = 'fas fa-check' ><i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); 

    //check mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class = 'fas fa-trash' ><i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv)

    //clear todo input value
    todoInput.value="";
}

function deleteCheck(e){
    const item = e.target;

    //delete
    if(item.classList[0]=== 'trash-btn'){
        const todo= item.parentElement;
        //animation
        todo.classList.add("fall")
        
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })

    }
    //check
    
    if(item.classList[0]==='complete-btn'){
        const todo= item.parentElement;
        if(!todo.classList.contains("completed")){

            todoCounter++
        }        
        todo.classList.add("completed");

        var promise = new Promise (function(resolve,reject) {
            if (todoCounter === 5){
                resolve("Congrats. 5 tasks have been succesfully completed");
            }
            else{
                reject(`${5 - todoCounter} more tasks untill next milestone`)
            }
        })
        promise
        .then((s)=>{
            alert(s);
            todoCounter=0;
        })
        .catch((e)=>{
            alert(e);
        })


    }

    
}


function filterTodo(){
    let a = filterOption.value;
    const filter = todoList.childNodes;
    filter.forEach(function(todo){
        switch(a){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display= "flex";
                }else{
                    todo.style.display="none";
                }
                break;
            
            case "incomplete":
                console.log(a);
                if (!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else {
                    todo.style.display="none";
                }
                break;
        }

    })
}

