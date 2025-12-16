// ------------------- Admin Login -------------------
document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;

            if (user === "admin" && pass === "123") {
                window.location.href = "admin-dashboard.html";
            } else {
                alert("Invalid Username or Password");
            }
        });
    }

    // ------------------- Add Book -------------------

    const bookForm = document.getElementById("bookForm");
    const bookTable = document.getElementById("bookTable")?.querySelector("tbody");

    if (bookForm) {
        bookForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("bookName").value;
            const author = document.getElementById("author").value;
            const qty = document.getElementById("quantity").value;

            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${name}</td>
                <td>${author}</td>
                <td>${qty}</td>
                <td><button class="delete-btn">Delete</button></td>
            `;

            bookTable.appendChild(row);

            // Reset form
            bookForm.reset();
        });
    }

    // ------------------- Delete Book -------------------
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.parentElement.remove();
        }
    });

});