let form = document.getElementById("form");






form.addEventListener('submit', function(event) {
    event.preventDefault();// Prevent form from submitting



    checkInputs();
});


function checkInputs() {
    let username = document.getElementById('UsernameInput').value.trim(); 
    let password = document.getElementById('PasswordInput').value.trim();

    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    if (username === "") {
        setErrorFor(username, "Username cannot be blank");
    } 
    else if (username !== storedUsername){
        setErrorFor(username, "Username does not exist");
    }
    else {
        setSuccessFor(username);
    }


    //password validation
    if (password === "") {
        setErrorFor(password, "Password cannot be blank");
    } 
    else if (password !== storedPassword){
        setErrorFor(password, "Password is incorrect");
    }
    else {
        setSuccessFor(password);
}
}

function setErrorFor(input, message) {
    let inputContainer = input.parentElement;
    let span = document.getElementsByClassName("error");
    span.innerText = message;
    inputContainer.classList.add("errormessage");
    inputContainer.classList.remove("success");
    

    
}

function setSuccessFor(input){
    let inputContainer = input.parentElement;
    let span = inputContainer.querySelector("span");
    span.innerText = "";
    inputContainer.classList.add("success");
    inputContainer.classList.remove("errormessage");
    
}