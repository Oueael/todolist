document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains("task-checkbox")) {
            const taskText = e.target.nextElementSibling;
            taskText.style.textDecoration = e.target.checked ? "line-through" : "none";
        }
    });
});
