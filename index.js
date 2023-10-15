
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

$('#signInBtn').click(()=>{
    $('.outerdiv').hide();
    $('.signInModal').show();
})

$('#signInCheck').click(()=>{
    const url = "https://aquadarlingrepository.debasishchandra.repl.co/signIn";
    const userId = $('#userName').val(); 
    const password = $('#password').val();
    
    // Construct the URL with query parameters
    const queryParams = new URLSearchParams({ userId, password });
    const finalUrl = `${url}?${queryParams.toString()}`;
    
    fetch(finalUrl)
    .then(response => response.text())
    .then(data => {
        console.log(data);
         if(data!='success')
           showError();
      })
})
function showError(){
    $('.errorText').show();
    $('#password').addClass('error-msg');
    
    $('#password').on('change',()=>{
        $('.errorText').hide();
        $('#password').removeClass('error-msg');
    })

}

})