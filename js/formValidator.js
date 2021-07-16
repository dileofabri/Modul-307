/* Fabrizio Di Leo, ME19a am 15.07.2021 */

// Check if mandatory fields are filled.
function validateForm() {
    if (document.forms["contactForm"]["fname"].value === "") {
        displayError("Vorname muss ausgefüllt sein");
    } else if (document.forms["contactForm"]["lname"].value === "") {
        displayError("Nachname muss ausgefüllt sein");
    } else if (document.forms["contactForm"]["email"].value === "") {
        displayError("E-Mail-Adresse muss ausgefüllt sein");
    } else if (document.forms["contactForm"]["message"].value === "") {
        displayError("Haben Sie keine Nachricht für uns?");
    } else if (document.forms["contactForm"]["checkbox"].checked === false) {
        displayError("Sie müssen unsere Nutzungsbedingungen akzeptieren");
    } else {
        // If everything is filled out correctly, hide error warnings
        hideError();
        document.getElementById('contactForm').style.display = "none";
        document.getElementById('confirmationMessage').innerText = "Vielen Dank für Ihre Nachricht!";
    }
}

// Show error warning with following text
function displayError() {
    const inputFields = document.getElementsByClassName('inputField');
    const inputLabels = document.getElementsByClassName('inputLabels');

    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].style.border = "1px solid red";
    }

    for (let i = 0; i < inputLabels.length; i++) {
        document.getElementById('warningMessage').style.backgroundColor = "#fee";
        document.getElementById('warningMessage').innerHTML = "Haben Sie alle Felder ausgefüllt?";
    }
}

// Hide error warning
function hideError() {
    const elements = document.getElementsByClassName('inputField');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = "1px solid black";
    }
}

// Registration Form Validator

function validateRegistrationForm() {
    if (document.forms["registerForm"]["fname"].value === "") {
        displayError();
    } else if (document.forms["registerForm"]["lname"].value === "") {
        displayError();
    } else {
        hideError();
    }
}