// --- DOM Element Selection ---
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const statusMessage = document.getElementById('status-message');
// --- Add this to your existing element selections ---
const googleLoginButton = document.getElementById('google-login-button');
const welcomeMessage = document.createElement('h2');

// --- Our "database" of correct credentials ---
const CORRECT_EMAIL = "user@example.com";
const CORRECT_PASSWORD = "password123";

// --- Event Listener for Email/Password Form ---
// --- REFACTORED Login Form Event Listener ---

loginForm.addEventListener('submit', (event) => {

    event.preventDefault();

    // 1. Reset the form state on every new submission attempt

    resetFormState();

    const enteredEmail = emailInput.value;

    const enteredPassword = passwordInput.value;

    statusMessage.textContent = "Logging in...";

    setTimeout(() => {

        if (enteredEmail === CORRECT_EMAIL && enteredPassword === CORRECT_PASSWORD) {

            // SUCCESS state

            statusMessage.textContent = "Success! Redirecting...";

            statusMessage.classList.add('success');

            emailInput.classList.add('success');

            passwordInput.classList.add('success');

        } else {

            // ERROR state

            statusMessage.textContent = "Invalid email or password.";

            statusMessage.classList.add('error');

            emailInput.classList.add('error');

            passwordInput.classList.add('error');

        }

    }, 1000);

});

// --- Add this new event listener for the Google button ---
googleLoginButton.addEventListener('click', () => {
    // 1. Simulate the Google pop-up window with a confirm dialog
    const isLoginConfirmed = confirm(
        "You are being redirected to Google to sign in.\n\n(This is a simulation). \n\nClick 'OK' to simulate a successful login as 'demo.user@gmail.com'."
    );

    // 2. Check if the user clicked "OK"
    if (isLoginConfirmed) {
        // 3. Create a realistic success experience
        statusMessage.textContent = "Successfully authenticated with Google. Welcome back!";
        statusMessage.className = 'status success'; // Use classes instead of inline styles

        // Hide the entire login form
        loginForm.classList.add('hidden');
        googleLoginButton.classList.add('hidden'); // Also hide the Google button
        document.querySelector('.separator').classList.add('hidden'); // Hide the "OR" separator

        // Display a welcome message
        welcomeMessage.textContent = 'Welcome, Demo User!';
        loginForm.after(welcomeMessage); // Insert the welcome message after the hidden form
    } else {
        // 4. Handle the case where the user cancels
        statusMessage.textContent = "Google sign-in cancelled.";
        statusMessage.className = 'status error';
    }
});
function resetFormState() {

    // Remove error/success classes from inputs

    emailInput.classList.remove('error', 'success');

    passwordInput.classList.remove('error', 'success');

    // Clear the status message and its classes

    statusMessage.textContent = '';

    statusMessage.className = 'status';

}

emailInput.addEventListener('input', resetFormState);

passwordInput.addEventListener('input', resetFormState);
