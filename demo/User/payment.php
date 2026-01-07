<?php
session_start();
include '../db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
}

if (isset($_POST['pay'])) {
    $user_id = $_SESSION['user_id'];
    $method  = $_POST['method'];

    mysqli_query($conn,
        "INSERT INTO payment (user_id, p_name, method, p_date)
         VALUES ($user_id, 'Book Payment', '$method', CURDATE())"
    );

    echo "Payment Successful!";
}
?>

<h2>Payment</h2>

<form method="post">
    Select Method:
    <select name="method">
        <option value="Cash">Cash</option>
        <option value="eSewa">eSewa</option>
        <option value="Khalti">Khalti</option>
    </select><br><br>

    <button name="pay">Pay Now</button>
</form>

<a href="dashboard.php">Back</a>
<a href="payment.php">Make Payment</a>
