<?php
include '../db.php';

if($_SESSION['role']!='admin'){
    header("Location: ../index.php");
    exit;
}

if (isset($_POST['purchase'])) {
    $book_id = $_POST['book'];
    $qty = $_POST['qty'];

    // save purchase
    mysqli_query($conn,
        "INSERT INTO purchase (sid, quantity, p_date)
         VALUES ($_POST[sid], $qty, CURDATE())"
    );

    // update inventory
    mysqli_query($conn,
        "UPDATE inventory
         SET quantity = quantity + $qty
         WHERE book_id = $book_id"
    );

    echo "Stock Added Successfully!";
}
?>

<h2>Purchase Stock</h2>

<form method="post">
    Supplier ID: <input type="number" name="sid" required><br>
    Book ID: <input type="number" name="book" required><br>
    Quantity: <input type="number" name="qty" required><br>
    <button name="purchase">Purchase</button>
</form>
