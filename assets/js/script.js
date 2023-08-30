// keep track of validated fields- total 6
var validFields = {
    'fname': false,
    'lname': false,
    'pnumber': false,
    'email': false,
    'password': false,
    'confirm-password': false
};

// First Name - only alphabets
// Last Name - only alphabets
function nameValidation(str, id) {
    var inputField = document.querySelector('#' + id);
    var spanElement = document.querySelector('#' + id + ' + span');
    spanElement.classList.add("warningText");
    // empty field
    if (str == '' || /^[\s]+$/.test(str)) {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Field cannot be empty';
        validFields[id] = false;
        localStorage.removeItem(id);
    }
    else {
        // number or special characters
        if (/^[a-zA-Z\s]+$/.test(str)) {
            inputField.style.borderColor = "green";
            spanElement.textContent = '';
            validFields[id] = true;
            localStorage.setItem(id, str);
            spanElement.classList.remove("warningText");
        }
        else {
            inputField.style.borderColor = "red";
            spanElement.textContent = 'Field cannot contain numbers or special characters';
            validFields[id] = false;
            localStorage.removeItem(id);
        }
    }
}
// Email - email validation
function emailValidation(str) {
    var inputField = document.querySelector("#email");
    var spanElement = document.querySelector('#email + span');
    spanElement.classList.add("warningText");
    // empty field
    if (str == '' || /^[\s]+$/.test(str)) {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Field cannot be empty';
        validFields["email"] = false;
        localStorage.removeItem('email');
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)) {
        inputField.style.borderColor = "green";
        spanElement.textContent = '';
        validFields["email"] = true;
        localStorage.setItem('email', str);
        spanElement.classList.remove("warningText");
    }
    else {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Email not valid';
        validFields["email"] = false;
        localStorage.removeItem('email');
    }
}
// Phone number -
// a. only + and numbers allowed.
// b. If + is there, 13 digits are allowed. 13 digits is excluding + symbol.
// c. Should not start with 0
// d. if + is not there only 10 digits allowed
function phoneValidation(str) {
    var inputField = document.querySelector("#pnumber");
    var spanElement = document.querySelector('#pnumber + span');
    spanElement.classList.add("warningText");
    // empty field
    if (str == '' || /^[\s]+$/.test(str)) {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Field cannot be empty';
        validFields["pnumber"] = false;
        localStorage.removeItem('pnumber');
    }
    if (/^(?!0)[+]?(\d{13}|\d{10})$/.test(str)) {
        inputField.style.borderColor = "green";
        spanElement.textContent = '';
        validFields["pnumber"] = true;
        localStorage.setItem('pnumber', str);
        spanElement.classList.remove("warningText");
    }
    else {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Phone number not valid';
        validFields["pnumber"] = false;
        localStorage.removeItem('pnumber');
    }
}
// Password
// a. Min length - 6
// b. Should contain at-least one alphabet, one number, one char among @#$&!
function passwordValidation(str) {
    var inputField = document.querySelector("#password");
    var spanElement = document.querySelector('#password + span');
    spanElement.classList.add("warningTextBig");
    if (str == '' || /^[\s]+$/.test(str)) {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Field cannot be empty';
        validFields["password"] = false;
    }
    if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$&!]).{6,}$/.test(str)) {
        inputField.style.borderColor = "green";
        spanElement.textContent = '';
        validFields["password"] = true;
        spanElement.classList.remove("warningTextBig");
    }
    else {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Password must be 6 characters long and contain at least one alphabet,one number and one special character among @#$&!';
        validFields["password"] = false;
    }
    // if (!/[a-zA-Z]/.test(str)) {
    //     inputField.style.borderColor = "red";
    //     spanElement.textContent = "Password must contain at least one alphabet.";
    //     validFields["password"] = false;
    // }

    // if (!/\d/.test(str)) {
    //     inputField.style.borderColor = "red";
    //     spanElement.textContent = "Password must contain at least one number.";
    //     validFields["password"] = false;
    // }
    // if (!/[@#$&!]/.test(str)) {
    //     inputField.style.borderColor = "red";
    //     spanElement.textContent = "Password must contain at least one special character among @#$&!";
    //     validFields["password"] = false;
    // }
    // if(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$&!]).{6,}$/.test(str)){
    // inputField.style.borderColor = "green";
    // spanElement.textContent = '';
    // validFields["password"] = true;
    // }
}

// Repeat Password
// a. Should match with the Password field
function repeatPasswordValidation(str) {
    var inputField = document.querySelector("#confirm-password");
    var spanElement = document.querySelector('#confirm-password + span');
    spanElement.classList.add("warningText");
    var password = document.querySelector("#password").value;
    if (str == '' || /^[\s]+$/.test(str)) {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Field cannot be empty';
        validFields["password"] = false;
    }
    if (str == password) {
        inputField.style.borderColor = "green";
        spanElement.textContent = '';
        validFields["confirm-password"] = true;
        spanElement.classList.remove("warningText");
    }
    else {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Password not matching';
        validFields["confirm-password"] = false;
    }
}