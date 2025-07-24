// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

passwordConfirmInput.onkeyup = () => {
  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");
};
// add callback functions for other input events.

// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastnameOk = true;
  }

  // validate email

  if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password

  if (passwordInput.value === "") {
    passwordInput.classList.add("is-invalid");
  } else if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  // validate confirm password

  if (
    passwordConfirmInput.value.length < 6 ||
    passwordConfirmInput.value !== passwordInput.value
  ) {
    passwordConfirmInput.classList.add("is-invalid");
    isPasswordConfirmOk = false;
  } else {
    passwordConfirmInput.classList.add("is-valid");
    isPasswordConfirmOk = true;
  }

  if (
    isFirstNameOk &&
    isLastnameOk &&
    isEmailOk &&
    isPasswordOk &&
    isPasswordConfirmOk
  )
    alert("Registered successfully");
};

// add callback function for Reset button.

resetBtn.onclick = () => {
  firstNameInput.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  isFirstNameOk = false;

  lastNameInput.value = "";
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  isLastnameOk = false;

  emailInput.value = "";
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  isEmailOk = false;

  passwordInput.value = "";
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
  isPasswordOk = false;

  passwordConfirmInput.value = "";
  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");
  isPasswordConfirmOk = false;
};
