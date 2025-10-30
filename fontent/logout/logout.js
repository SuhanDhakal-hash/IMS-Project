// Logout confirmation logic
document.getElementById("confirmLogout").addEventListener("click", () => {
    // Example: Clear stored user session or token
    localStorage.removeItem("userToken");
    sessionStorage.clear();

    // Optional: Show temporary feedback
    alert("You have been logged out successfully.");

    // Redirect to login page after a short delay
    setTimeout(() => {
        window.location.href = "login.html"; // Change to your login page path
    }, 1000);
});

document.getElementById("cancelLogout").addEventListener("click", () => {
    // Go back to dashboard or previous page
    window.history.back();
});
