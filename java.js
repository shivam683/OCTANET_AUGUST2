const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";

        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });
    }
});