document.getElementById('add-button').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// function so that the website can add and remove to-do tasks
function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        listItem.appendChild(deleteButton);
        document.getElementById('todo-list').appendChild(listItem);
        input.value = '';
        input.focus();
    }
}
