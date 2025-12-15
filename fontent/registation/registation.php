<?php
$host = 'localhost';
$dbname = 'ims';
$dbuser = 'root';
$dbpass = '223456';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $dbuser, $dbpass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed");
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $username = trim($_POST["username"]);
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];
    $role = $_POST["role"];

    if ($password !== $confirmPassword) {
        die("Passwords do not match");
    }

    if (strlen($password) < 6) {
        die("Password too short");
    }

    $check = $pdo->prepare("SELECT id FROM users WHERE username=? OR email=?");
    $check->execute([$username, $email]);

    if ($check->rowCount() > 0) {
        die("Username or email already exists");
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $insert = $pdo->prepare(
        "INSERT INTO users (name, email, username, password, role)
         VALUES (?, ?, ?, ?, ?)"
    );

    if ($insert->execute([$name, $email, $username, $hashedPassword, $role])) {
        header("Location: login.html");
        exit;
    } else {
        die("Registration failed");
    }
}
