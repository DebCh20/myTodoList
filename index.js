
$(function(){    
$('#addTodo').click(()=>{
    var listVal=''
    listVal =$('#inputTodo').val();
    console.log('called',listVal);
    createNewTodo(listVal);    
    // $('#addList').show();
})

function createNewTodo(text) {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.style.listStyleType = "none";

    // Create a new span element
    const span = document.createElement("span");
    span.textContent = text;

    // Create a new button element
    const button = document.createElement("button");
    button.id = "deleteTodo";
    button.title = "Done and dusted";
    button.textContent = "Done";

    // Append the span and button to the list item
    listItem.appendChild(span);
    listItem.appendChild(button);

    // Append the list item to the ul
    const todoList = document.getElementById("todoList");
    todoList.appendChild(listItem);
}

$('#deleteTodo').click(()=>{
    alert('The task selected will be deleted.')
})
})