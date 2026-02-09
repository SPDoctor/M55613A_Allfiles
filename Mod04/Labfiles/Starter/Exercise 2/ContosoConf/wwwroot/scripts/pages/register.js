// Get the registration <form> element from the DOM.
const form = document.getElementById("registration-form");
const submitButton = form.querySelector("button");

// TODO: Task 1 - Get the password <input> elements from the DOM by ID
// Get the password element: document.getElementById("password")
// Get the confirm-password element: document.getElementById("confirm-password")

function checkPasswords() {
    // TODO: Task 2 - Compare passwordInput value to confirmPasswordInput value
    // Create a variable passwordsMatch that compares the values using ===
    
    // TODO: Task 3 - Display a custom error message if the passwords differ
    // If passwordsMatch is true:
    //   - Clear any previous error message using confirmPasswordInput.setCustomValidity("")
    // Else:
    //   - Set error message using confirmPasswordInput.setCustomValidity("Your passwords don't match. Please type the same password again.")
};

function addPasswordInputEventListeners() {
    // TODO: Task 4 - Add input event listeners to call checkPasswords
    // Add "input" event listener to passwordInput
    // Add "input" event listener to confirmPasswordInput
};

function formSubmissionAttempted() {
    form.classList.add("submission-attempted");
};

function addSubmitClickEventListener() {
    submitButton.addEventListener("click", formSubmissionAttempted, false);
};

addPasswordInputEventListeners();
addSubmitClickEventListener();


