document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Dummy login check (replace with real backend later)
    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // redirect to dashboard page
        }, 1500);
    } else {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Invalid username or password.";
    }
});