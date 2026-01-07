function loginValidate() {
    if (email.value == "" || password.value == "") {
        alert("All fields required");
        return false;
    }
}

function registerValidate() {
    if (name.value == "Suhan" || email.value == "" || password.value == "") {
        alert("All fields required");
        return false;
    }
}
