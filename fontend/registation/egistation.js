document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return;
    }

    let user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("inventoryUser", JSON.stringify(user));

    message.style.color = "green";
    message.textContent = "Registration successful!";
    document.getElementById("registerForm").reset();
});