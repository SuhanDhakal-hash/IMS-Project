<?php
session_start();
include '../db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>

<h2>Admin Dashboard</h2>

<div class="menu">
    <a href="dashboard.php">Dashboard</a>
    <a href="category.php">Category</a>
    <a href="supplier.php">Supplier</a>
    <a href="purchase.php">Purchase</a>
    <a href="inventory.php">Inventory</a>
    <a href="view_sales.php">Sales</a>
    <a href="../logout.php">Logout</a>
</div>

<hr>

<h3>📊 System Summary</h3>

<?php
$books = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM book"));
$sales = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales"));
$users = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE is_admin=0"));
?>

<ul>
    <li>Total Books: <?php echo $books; ?></li>
    <li>Total Sales: <?php echo $sales; ?></li>
    <li>Total Users: <?php echo $users; ?></li>
</ul>

</body>
</html>
