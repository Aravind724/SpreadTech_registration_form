function validateForm(event) {
    event.preventDefault();

    // Get form elements
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Get error message elements
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Implement your validation logic here
    let isValid = true;

    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Implement similar validation for email, password, and confirm password fields

    if (isValid) {
        // Submit the form or perform any further actions
    }
}