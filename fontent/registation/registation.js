function validateForm() {
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const role = document.getElementById("role").value;
    const message = document.getElementById("message");


    message.textContent = "";
    message.style.color = "red";


    if (!fullName || !email || !username || !password || !confirmPassword || !role) {
        message.textContent = "Please fill out all fields!";
        return false;
    }


    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.textContent = "Please enter a valid email address!";
        return false;
    }


    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters!";
        return false;
    }


    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return false;
    }


    message.style.color = "green";
    message.textContent = "Registration successful!";
}
