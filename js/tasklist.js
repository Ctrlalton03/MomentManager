document.addEventListener('DOMContentLoaded', function() {
    
    const taskContainer = document.getElementById('taskInfo');

 
    function addTaskToDom(task){
        const taskCard = document.createElement('div');
        taskCard.classList.add('taskCard');
        taskCard.id = task.id;

        //task details
        taskCard.innerHTML = `
            <h3 class="task-title">${task.title}</h3>
            <p class="task-priority"><strong>Priority:</strong> ${task.priority}</p>
            <p class="task-description"><strong>Description:</strong> ${task.description}</p>
        `;

        //making the task card button centered
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        //Add Edit Button
        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.innerText = 'Edit';
        editButton.onclick = function(){
            editTask(task.id);
        };
        buttonContainer.appendChild(editButton);

        //Add Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function(){
            deleteTask(task.id);
        };
        buttonContainer.appendChild(deleteButton);


        taskCard.appendChild(buttonContainer);
        
        //appended to the task container
        taskContainer.appendChild(taskCard); 

    }

    function getTasks(){
        let tasks = JSON.parse(localStorage.getItem('Task')) || [];
        taskContainer.innerHTML = '';

        tasks.forEach(task => {
            addTaskToDom(task);

        });
    }




    function editTask(taskId){
        window.location.href = `editform.html?taskId=${taskId}`;
}

    function deleteTask(taskId) {
        let tasks = JSON.parse(localStorage.getItem('Task')) || [];
        tasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem('Task', JSON.stringify(tasks));
        window.location.reload();
    }

    getTasks();









});