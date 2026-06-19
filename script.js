let tasks = [];

// function add task
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

    taskInput.value = "";

    renderTasks();
}

// function render task
function renderTasks() {
    const taskList = document.getElementById("taskList");
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
        const taskCard = document.createElement("div");

        taskCard.className =
            "w-[800px] mx-auto h-[70px] rounded-xl border border-white/60 bg-[#C4BABA5E] flex items-center justify-between px-5";

        taskCard.innerHTML = `
            <div class="flex items-center gap-4">
                <input
                    type="radio"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})"
                    class="w-5 h-5"
                >

                <span class="font-[Baloo] text-white text-2xl ${
                    task.completed ? "line-through opacity-60" : ""
                }">
                    ${task.title}
                </span>
            </div>

            <button
                onclick="deleteTask(${task.id})"
                class="text-red-400 text-3xl cursor-pointer"
                title="Delete Task">
                 <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
      `;

        taskList.append(taskCard);
    });
}
