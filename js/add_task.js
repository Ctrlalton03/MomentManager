document.addEventListener('DOMContentLoaded', function() {
    const prioritySelector = document.querySelectorAll('.priority-button');
    const priorityValue = document.getElementById('priority');
    const taskContainer = document.getElementById('formDetails');


    prioritySelector.forEach(button => {
        button.addEventListener('click', function() {
            // remove 'active' class from all buttons
                prioritySelector.forEach(button => button.classList.remove('active'));

                // add 'active' class to the clicked button
                button.classList.add('active');

                // set the value of the priority input field
                priorityValue.value = button.dataset.priority;
            });
        });

        //form Submission
        taskContainer.addEventListener('submit', function(event) {
            event.preventDefault();
            const title = document.getElementById('taskName').value;
            const priority = priorityValue.value;
            const description = document.getElementById('taskDescription').value.trim();

            addNewTask(title, priority, description);
            editTask();
            deleteTask();
        });

    function addNewTask(title, priority, description) {
        let tasks = JSON.parse(localStorage.getItem('Task')) || [];
        const newTask = { id: new Date().getTime(), title, priority, description };
        tasks.push(newTask);

        localStorage.setItem('Task', JSON.stringify(tasks));
        window.location.href = 'currenttask.html';
    }

    function editTask(taskId){
        let tasks = JSON.parse(localStorage.getItem('Task')) || [];
        const taskIndex = tasks.findIndex(task => task.id == taskId);
            if (taskIndex !== -1) {
                const task = tasks[taskIndex];
                const newTitle = prompt('Enter new title', task.title);
                const newPriority = prompt('Enter new priority', task.priority);
                const newDescription = prompt('Enter new description', task.description);
                    if (newTitle !== null && newPriority !== null && newDescription !== null) {
                        tasks[taskIndex].titlle = newTitle;
                        tasks[taskIndex].priority = newPriority;
                        tasks[taskIndex].description = newDescription;
                        localStorage.setItem('Task', JSON.stringify(tasks));
                        window.location.reload();
                    }
                        
            }
    }

    function deleteTask(taskId) {
        let tasks = JSON.parse(localStorage.getItem('Task')) || [];
        tasks = tasks.filter(task => task.id != taskId);
        localStorage.setItem('Task', JSON.stringify(newTasks));
        window.location.reload();
    }




});










