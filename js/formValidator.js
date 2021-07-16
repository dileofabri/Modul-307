/* Fabrizio Di Leo, ME19a am 15.07.2021 */

/* Contact Form Validator */

// Check if mandatory fields are filled.
function validateForm() {
    let numberOfErrors = 0;

    if (document.forms["contactForm"]["fname"].value === "") {
        displayError("fname");
        numberOfErrors += 1;
    } else {
        hideError("fname");
    }

    if (document.forms["contactForm"]["lname"].value === "") {
        displayError("lname");
        numberOfErrors += 1;
    } else {
        hideError("lname");
    }

    if (document.forms["contactForm"]["email"].value === "") {
        displayError("email");
        numberOfErrors += 1;
    } else {
        hideError('email');
    }

    if (document.forms["contactForm"]["subject"].value === "") {
        displayError("subject");
        numberOfErrors += 1;
    } else {
        hideError('subject');
    }

    if (document.forms["contactForm"]["message"].value === "") {
        displayError("message");
        numberOfErrors += 1;
    } else {
        hideError('message');
    }

    if (document.forms["contactForm"]["checkbox"].checked === false) {
        displayError("checkbox");
        numberOfErrors += 1;
    } else {
        hideError('checkbox');
    }

    if (numberOfErrors > 0) {
        document.getElementById('warningMessage').style.backgroundColor = "#fee";
        document.getElementById('warningMessage').innerHTML = "Haben Sie alle Felder ausgefüllt?";
    } else {
        document.getElementById('contactForm').style.display = "none";
        document.getElementById('confirmationMessage').innerText = "Vielen Dank für Ihre Nachricht!";
    }
}

// Show error warning with following text
function displayError(fieldId) {
    document.getElementById(fieldId).style.border = "1px solid red";
}

// Hide error warning
function hideError(fieldId) {
    document.getElementById(fieldId).style.border = "1px solid #555";
}

/* Registration Form Validator */

// Validate if all input fields are filled out
function validateRegistrationForm() {
    if (document.forms["registerForm"]["fname"].value === "") {
        // If not, show error warning
        displayError();
    } else if (document.forms["registerForm"]["lname"].value === "") {
        displayError();
    } else {
        // If yes, hide the error warning
        hideError();
    }
}