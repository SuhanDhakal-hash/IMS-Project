<?php
session_start();
include '../db.php';

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}

// Handle form submission
if (isset($_POST['login'])) {
    $email    = $_POST['email'];
    $password =$_POST['password'];
    
    $sql = ($email == "admin@admin.com")? "select * from admin where email = '$email'" : "select * from users where email = '$email'";
    
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) >= 1) {
        $row = mysqli_fetch_assoc($result);
        if(password_verify($password, $row["password"])) {
            $_SESSION["email"] = $row["email"]; 
            $_SESSION['role'] = ($email == "admin@admin.com")? "admin":"user";
            $_SESSION['username'] = ($email == "admin@admin.com")? "admin":$row["name"];
            $_SESSION['user_id'] = $_SESSION['role']=="admin"?$row['admin_id']:$row['user_id'];
            $redirect = $_SESSION['role'] == 'admin'?'Location: ../Admin/dashboard.php':'Location: ../User/dashboard.php';
            echo "reached: " . $redirect .".";
            header($redirect);
            exit;
        }else{
            echo "unknown email and password combination";
            exit;
        }
    }else{
        echo "no result from the database";
        exit; 
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>User Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>

<div class="container">
    <h2>Login</h2>

    <?php if (!empty($success)) echo "<div class='message success'>$success</div>"; ?>
    <?php if (!empty($error)) echo "<div class='message error'>$error</div>"; ?>

    <form method="POST">
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit" name="login">Login</button>
    </form>

    <div class="footer">
        Already have an account? <a href="login.php">Login</a>
    </div>
</div>

</body>
</html>
