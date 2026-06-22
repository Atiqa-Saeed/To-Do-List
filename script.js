let tasks = [];

// enter key listener 
const taskInput = document.getElementById("taskInput");

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

// add task
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
    alert("Task entered successfully!");

    taskInput.value = "";
    
    console.log("render running", tasks);
    renderTasks();
}

// render tasks
function renderTasks() {
    const taskList = document.getElementById("taskList");
     console.log(taskList);
    const filter = document.getElementById("filterSelect").value;


    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (filter === "complete") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    if (filter === "incomplete") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    filteredTasks.forEach(task => {
        const taskCard = document.createElement("li");

        taskCard.className =
                   "w-[530px] mx-auto h-[50px] rounded-[50px] border border-white bg-[#C4BABA5E] flex items-center justify-between px-5 ml-[250px]";

        taskCard.innerHTML = `
            <div class="flex items-center gap-4">

                <span class="font-[Baloo] text-white text-2xl 
                ${task.completed ? "line-through opacity-60" : ""}">
                ${task.title}
                </span>
            </div>

    <div class="flex items-center gap-4">
          <input type="checkbox"
          ${task.completed ? "checked" : ""}
          onchange="toggleTask(${task.id})"
          class="rounded-full w-6 h-6 accent-gray-500"/>

        <button
            onclick="deleteTask(${task.id})"
            class="text-white text-3xl cursor-pointer"
            title="Delete Task">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>
            `;

        taskList.append(taskCard);
    });
}

// toggle complete / incomplete
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });

    renderTasks();
}

// delete task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

