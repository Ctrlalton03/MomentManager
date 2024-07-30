document.addEventListener("DOMContentLoaded", function() {
    // Ensure the sidebar remains hidden
    document.querySelector('.sidebar').style.display = 'none';
});

function showSidebar() {
          const sidebar = document.querySelector(".sidebar");
          sidebar.style.display = "flex";
        }
  
function hideSidebar() {
          const sidebar = document.querySelector(".sidebar");
          sidebar.style.display = "none";
        }



document.addEventListener("DOMContentLoaded", function() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if(storedTasks){
        storedTasks.forEach(task => tasks.push(task));
        updateTasksList();
        updateStats();
    }
});

let tasks = [];


const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const addTask = () => {
    const taskInput = document.getElementById("task");
    const text = taskInput.value.trim();

    if(text){
        tasks.push({text: text, completed: false});
        taskInput.value = "";
        updateTasksList();
        updateStats();
        saveTasks();
    }  
};

const toggleTaskCompletion = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
    saveTasks();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
    saveTasks();
};

const editTask = (index) => {
    const taskInput = document.getElementById("task");
    taskInput.value = tasks[index].text
    
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
    saveTasks();


};




const updateStats = () => {
    const completeTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length
    const progress = (completeTasks / totalTasks )* 100;
    const progressBar = document.getElementById("progress");
    progressBar.style.width = `${progress}%`;


    document.getElementById(
        "numbers"
    ).innerText = `${completeTasks} / ${totalTasks}`;


    if (task.length && completeTasks === totalTasks){
        blastStars();
    }

};




const updateTasksList = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
           <div class="taskItem">
            <div class="task ${task.completed ? 'completed':''} ">
                <input type="checkbox" class="checkbox"   ${
                    task.completed?"checked":""
                }/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
            <img src="images/edit1.png" alt="edit" onClick="editTask(${index})">
            <img src="images/Delete-icon.png" alt="delete" onClick="deleteTask(${index})">
            </div>
           </div>
        `;
        listItem.addEventListener('change', ()=> toggleTaskCompletion(index));
        taskList.appendChild(listItem);
    });
}

document.getElementById("addTask").addEventListener("click", function(e){
   e.preventDefault();

   addTask();
});

