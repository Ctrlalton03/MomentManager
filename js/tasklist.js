document.addEventListener('DOMContentLoaded', function() {
    
    const taskContainer = document.getElementById('taskInfo');

    function getTask(){
        const tasks = JSON.parse(localStorage.getItem('Task')) || [];
        taskContainer.innerHTML = '';

        tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.innerHTML = `
            <h3 class="task-title">${task.title}</h3>
            <p class="task-priority"><strong>Priority:</strong> ${task.priority}</p>
            <p class="task-description"><strong>Description:</strong> ${task.description}</p>
            `;
            taskContainer.appendChild(taskCard);

        });
    }

    getTask();
});