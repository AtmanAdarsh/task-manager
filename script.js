// Select Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter");

// Task Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Initialize App
function initialize() {
  renderTasks("all");
}

// Add Task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks("all");
    taskInput.value = ""; // Clear input
  }
});

// Render Tasks
function renderTasks(filter) {
  taskList.innerHTML = ""; // Clear existing tasks

  let filteredTasks = tasks;
  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  } else if (filter === "pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="complete" onclick="toggleComplete(${index})">✔</button>
        <button class="delete" onclick="deleteTask(${index})">✖</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Save Tasks to LocalStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Delete Task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks("all");
}

// Toggle Complete
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks("all");
}

// Filter Tasks
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    button.classList.add("active");
    renderTasks(button.dataset.filter);
  });
});

// Initialize App
initialize();
