document.addEventListener("DOMContentLoaded", function(){
    let todoForm = document.getElementById("todo");
    let todoList = document.getElementById("todoList");

    if(todoForm){
        todoForm.addEventListener("submit", function(e){
            e.preventDefault();

            let removeBtn = document.createElement("button");
            removeBtn.innerText = "Delete";

            let newTodo = document.createElement("li");
            newTodo.innerText = document.getElementById("task").value;

            todoList.appendChild(newTodo);
            todoList.appendChild(removeBtn);

            todoForm.reset();
        });

        todoList.addEventListener('click', function(e){
            const evrythgLow = e.target.tagName.toLowerCase();
            if (evrythgLow === "li"){
                e.target.style.textDecoration = "line-through";
            }
            else if (evrythgLow === 'button'){
                e.target.parentNode.remove();
            }
        });
    };
});