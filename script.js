// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// key listener
const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

// Custom dropdown toggle
function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    const icon = document.getElementById("dropdownIcon");
  
    menu.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
}

// Select filter from dropdown
function selectFilter(value, label) {
    currentFilter = value;
    document.getElementById("dropdownLabel").textContent = label;
    document.getElementById("dropdownMenu").classList.add("hidden");
    renderTasks();
}

// Close dropdown on outside click
document.addEventListener("click", function (e) {
    const dd = document.getElementById("customDropdown");
    if (dd && !dd.contains(e.target)) {
        document.getElementById("dropdownMenu").classList.add("hidden");
    }
});

// Add task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const task = {
        id: Date.now(),
        title: taskText,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    taskInput.value = "";
    renderTasks();
}

// Render tasks
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "complete") {
        filteredTasks = tasks.filter(task => task.completed);
    }
    if (currentFilter === "incomplete") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    filteredTasks.forEach(task => {
        const taskCard = document.createElement("li");
        taskCard.className =
            "w-[530px] mx-auto h-[55px] rounded-[50px] flex items-center justify-between px-5" +
            " backdrop-blur-md bg-white/10 border border-white/30";

        taskCard.innerHTML = `
            <span class="font-['Baloo_Tammudu_2'] text-white text-[22px] tracking-wide select-none
                ${task.completed ? "line-through opacity-50" : ""}">
                ${task.title}
            </span>

            <div class="flex items-center gap-4">
                <button onclick="toggleTask(${task.id})"
                    title="${task.completed ? 'Mark incomplete' : 'Mark complete'}"
                    class="w-5 h-5 rounded-full border-2 border-white/80 flex items-center justify-center
                           transition-all duration-200
                           ${task.completed ? 'bg-white/40' : 'bg-transparent hover:bg-white/20'}">
                    ${task.completed
                        ? `<i class="fa fa-check text-white text-[6px]"></i>`
                        : ``}
                </button>

                <button onclick="deleteTask(${task.id})"
                    class="w-5 h-5 flex items-center justify-center text-white/80 hover:text-white text-[15px] cursor-pointer transition-all duration-200"
                    title="Delete Task">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `;

        taskList.append(taskCard);
    });
}

// Toggle complete / incomplete
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// load task on page load 
renderTasks();
