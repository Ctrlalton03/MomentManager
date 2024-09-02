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
        });

    function addNewTask(title, priority, description) {
        let tasks = JSON.parse(localStorage.getItem('Task')) || [];
        const newTask = { title, priority, description };
        tasks.push(newTask);

        localStorage.setItem('Task', JSON.stringify(tasks));
        window.location.href = 'currenttask.html';
    }
});










