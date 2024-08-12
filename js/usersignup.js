let form = document.getElementById("form");
let email = document.getElementById("email");
let fullName = document.getElementById("FullName");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("ConfirmPassword");
let username = document.getElementById("Username");

    form.addEventListener('submit', function(event) {
        // Prevent form from submitting
        event.preventDefault();
        checkInputs();
    });


function checkInputs() {
    let emailValue = email.value.trim();
    let fullNameValue = fullName.value.trim();
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();
    let usernameValue = username.value.trim();

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email);
    }


    if (fullNameValue === "") {
        setErrorFor(fullName, "Full Name cannot be blank");
    } else {
        setSuccessFor(fullName);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else {
        setSuccessFor(password);
    }

    if (confirmPasswordValue === "") {
        setErrorFor(confirmPassword, "Password cannot be blank");
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, "Passwords do not match");
    } else {
        setSuccessFor(confirmPassword);
    }

    if (usernameValue === "") {
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }
}

function setErrorFor(input, message) {
    let inputContainer = input.parentElement;
    let span = inputContainer.querySelector("span");
    span.innerText = message;
    inputContainer.classList.add() = "error";
    

    
}

function setSuccessFor(input){
    let inputContainer = input.parentElement;
    let span = inputContainer.querySelector("span");
    span.innerText = "";
    inputContainer.classList.add() = "success";
    
}



function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


