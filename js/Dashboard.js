document.addEventListener('DOMContentLoaded', (e) => {
    // Get the username from the local stoarage in the signup/signin page
    let storedUsername = localStorage.getItem('username');

    // if the username is there, then display the username in the dashboard
    if (storedUsername ) {
        let userGreeting = document.getElementById('userWelcome');
        userGreeting.innerText = `Welcome, ${storedUsername}`;
    }
});








document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.task');
    let currentTaskIndex = 0;

    function updateTasks() {
        tasks.forEach((task, index) => {
            task.classList.remove('active', 'next', 'third');
            if (index === currentTaskIndex) {
                task.classList.add('active');
            } else if (index === (currentTaskIndex + 1) % tasks.length) {
                task.classList.add('next');
            } else if (index === (currentTaskIndex + 2) % tasks.length) {
                task.classList.add('third');
            }
        });
    }

    function swipeUp() {
        currentTaskIndex = (currentTaskIndex + 1) % tasks.length;
        updateTasks();
    }

    document.querySelector('.task-container').addEventListener('swipeup', swipeUp);

    // For testing purposes, swipe up on click
    document.querySelector('.task-container').addEventListener('click', swipeUp);

    // Initialize tasks
    updateTasks();
});
