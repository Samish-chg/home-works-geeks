var input = document.querySelector('#input');
var createButton = document.querySelector('#create_button');
var todoList = document.querySelector('#todo_list');

var createTodo = () => {
    var todoText = input.value.trim();
    if (todoText === '') {
        input.value = '';
        return alert('Пустые строки или пробелы запрещены!');
    }

    var div = document.createElement('div');
    div.classList.add('block_text');

    var text = document.createElement('p');
    text.innerText = todoText;

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('eButton');
    deleteButton.innerText = 'Delete';

    var editButton = document.createElement('button');
    editButton.classList.add('eButton');
    editButton.innerText = 'Edit    ';

    div.append(text, editButton, deleteButton);
    todoList.prepend(div);
    input.value = '';

    var deleteTodo = () => {
        div.remove();
    };
    deleteButton.addEventListener('click', deleteTodo);

    var editTodo = () => {
        var editedText = prompt(`You are editing: ${text.innerText}`);
        if (editedText === null || editedText.trim() === '') {
            return alert('Пустые строки или пробелы запрещены!');
        }
        text.innerText = editedText;
    };
    editButton.addEventListener('click', editTodo);
};

createButton.addEventListener('click', createTodo);

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        createTodo();
    }
});