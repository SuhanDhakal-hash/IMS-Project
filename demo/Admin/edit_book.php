<?php
include "db.php";

$id = $_GET['id'];
$result = mysqli_query($conn, "SELECT * FROM books WHERE book_id=$id");
$row = mysqli_fetch_assoc($result);

if (isset($_POST['update'])) {
    $name = $_POST['name'];
    $category_id = $_POST['category_id'];
    $quantity = $_POST['quantity'];

    $sql = "UPDATE books 
            SET name='$name', category_id='$category_id', quantity='$quantity'
            WHERE book_id=$id";

    mysqli_query($conn, $sql);
    header("Location: index.php");
}
?>

<form method="POST">
    Name: <input type="text" name="name" value="<?= $row['name'] ?>"><br>
    Category ID: <input type="number" name="category_id" value="<?= $row['category_id'] ?>"><br>
    Quantity: <input type="number" name="quantity" value="<?= $row['quantity'] ?>"><br>
    <button name="update">Update</button>
</form>
