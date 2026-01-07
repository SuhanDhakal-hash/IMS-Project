<?php
session_start();
include '../db.php';

if (!isset($_SESSION['email'])) {
    echo "not set";
    // header("Location: ../Admin/login.php");
}

$user_id = $_SESSION['user_id'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>User Dashboard</title>
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>

<h2>User Dashboard</h2>

<div class="menu">
    <a href="dashboard.php">Home</a>
    <a href="sales.php">Buy Book</a>
    <a href="payment.php">Payment</a>
    <a href="../logout.php">Logout</a>
</div>

<hr>

<h3>📚 Available Books</h3>

<table border="1" cellpadding="8">
<tr>
    <th>Book Name</th>
    <th>Price</th>
    <th>Stock</th>
</tr>

<?php
$result = mysqli_query($conn,
    "SELECT b.name, i.price, i.quantity
     FROM book b
     JOIN inventory i ON b.book_id = i.book_id"
);

while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
            <td>{$row['name']}</td>
            <td>Rs {$row['price']}</td>
            <td>{$row['quantity']}</td>
          </tr>";
}
?>
</table>

<hr>

<h3>🧾 My Purchase History</h3>

<table border="1" cellpadding="8">
<tr>
    <th>Book</th>
    <th>Quantity</th>
    <th>Date</th>
</tr>

<?php
$sales = mysqli_query($conn,
    "SELECT b.name, s.quantity, s.sale_date
     FROM sales s
     JOIN book b ON s.book_id = b.book_id
     WHERE s.user_id = $user_id"
);

while ($s = mysqli_fetch_assoc($sales)) {
    echo "<tr>
            <td>{$s['name']}</td>
            <td>{$s['quantity']}</td>
            <td>{$s['sale_date']}</td>
          </tr>";
}
?>
</table>

</body>
</html>
