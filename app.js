// SELECTORS
document.querySelector('form').addEventListener('submit', handleSubmitForm);

document.querySelector('ul').addEventListener('click', handleClickCheckDelete);

document.getElementById('clearAll').addEventListener('click', handleClearAll);

document.querySelector('input').addEventListener('focus', handleInputFocus);

document.querySelector('input').addEventListener('blur', handleInputBlur);

// EVENT HANDLERS
function handleSubmitForm(e){

    e.preventDefault();
    let input = document.querySelector('input');
    
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
    input.focus();
}

function handleClickCheckDelete(e){

    if(e.target.name === 'checkButton')
        checkTodo(e);

    if(e.target.name === 'deleteButton')
        deleteTodo(e);
}

function handleClearAll(e){
    document.querySelector('ul').innerHTML = '';

}

function handleInputFocus(e){
    document.querySelector('input').style.backgroundColor = '#ECEFA9';

}

function handleInputBlur(e){
    document.querySelector('input').style.backgroundColor = '';

}

// HELPERS
function addTodo(todo){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    // 1.add task content 2.checkButton 3.deleteButton with a multi line string using back ticks
    li.innerHTML = `
        <span class="todo-item"> ${todo} </span>
        <button name="checkButton"> <i class="fas fa-check-square"></i> </button>
        <button name="deleteButton"> <i class="fas fa-trash"></i> </button>
    `;

    // add class for li element
    li.classList.add('todo-list-item');
    // append list item to its parent ul
    ul.appendChild(li);

}

function checkTodo(e){
    let item = e.target.parentNode;

    if(item.style.textDecoration === 'line-through')
        item.style.textDecoration = 'none';
    
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e){
    let item = e.target.parentNode;
// make item.remove wait for animation first
    // item.addEventListener('transitionend', function(){
        item.remove();
    // });

    // item.classList.add('todo-list-item-fall');
}