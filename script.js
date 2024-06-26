function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    let priorityInput = document.getElementById("priorityInput").value;
    let categoryInput = document.getElementById("categoryInput").value;

    if (taskInput === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput;
    li.classList.add(priorityInput, categoryInput);

    let taskList = document.getElementById("taskList");
    taskList.appendChild(li);

    document.getElementById("taskInput").value = "";
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
