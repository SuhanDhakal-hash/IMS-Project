<?php
include '../db.php';

if (isset($_POST['register'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    mysqli_query($conn,
        "INSERT INTO Users (name,email,password)
         VALUES ('$name','$email','$password')"
    );

    echo "Registration Successful!";
}
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="register.css">
<script src="js/validation.js"></script>
</head>
<body>

<form method="post" onsubmit="return registerValidate()">
    <h2>User Registration</h2>
    Name: <input type="text" name="name" id="name"><br>
    Email: <input type="email" name="email" id="email"><br>
    Password: <input type="password" name="password" id="password"><br>
    <button name="register">Register</button>
</form>

</body>
</html>
