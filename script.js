"use strict";

const form = document.getElementById("form-element");
const email = document.getElementById("email");
const errorMessageElement = document.getElementById("error-message");
const errorIcon = document.getElementById("error-icon");
const submitEmail = document.getElementById("submit-email");

const successMessage = "Successfully subscribed!";
const errorMessage = "Please provide a valid email";

// displays error message and icon depending on validity
const displayError = () => {
  errorMessageElement.style.display = "block";
  errorIcon.style.display = "block";
  errorMessageElement.textContent = errorMessage;
  form.style.borderColor = "hsl(0, 93%, 68%)";
  errorMessageElement.style.color = "hsl(0, 93%, 68%)";
};

submitEmail.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.validity.patternMismatch) {
    displayError();
  } else if (email.validity.valueMissing) {
    displayError();
  } else {
    errorIcon.style.display = "none";
    errorMessageElement.style.display = "block";
    errorMessageElement.textContent = successMessage;
    errorMessageElement.style.color = "green";
    form.style.borderColor = "hsl(0, 36%, 70%)";
  }
});
