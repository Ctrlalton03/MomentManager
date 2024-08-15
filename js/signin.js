let form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();// Prevent form from submitting




    checkInputs();
});

function checkInputs() {
    const usernameInput = document.getElementById('UsernameInput');
    const passwordInput = document.getElementById('PasswordInput');

    //grab the correct username from the local storage
    let storedUsername = localStorage.getItem('username');
    let isValid= true;

    //validate the username
    if(usernameInput.value.trim() === '') {
        isValid = false;
        setErrorFor(usernameInput, "Username cannot be blank");
    }
    else if(usernameInput.value !== storedUsername) {
        isValid = false;
        setErrorFor(usernameInput, "Username is incorrect");
    } else {
        setSuccessFor(usernameInput);
    }

    //validate the password
    if(passwordInput.value.trim() === '') {
        isValid = false;
        setErrorFor(passwordInput, "Password cannot be blank");
    } else if(passwordInput.value !== localStorage.getItem('password')) {
        isValid = false;
        setErrorFor(passwordInput, "Password is incorrect");
    } else {
        setSuccessFor(passwordInput);
    }

    //if the username and password are correct, and everything is 
    //valid then submit the form and redirect to the dashboard
    if(isValid){
        window.location.href = 'dashboard.html';
    }
};


function setErrorFor(input, message) {
    let inputContainer = input.parentElement;
    let span = inputContainer.querySelector("span");
    span.innerText = message;
    inputContainerContainer.classList.add("error");
    inputContainer.classList.remove("success");
    input.style.borderColor = "red";
}

function setSuccessFor(input) {
    let inputContainer = input.parentElement;
    let span = inputContainer.querySelector("span");
    span.innerText = "";
    inputContainer.classList.add("success");
    inputContainer.classList.remove("error");
    input.style.borderColor = "";
}