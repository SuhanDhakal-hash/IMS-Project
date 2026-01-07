<?php
session_start();
include '../db.php';

if (isset($_POST['buy'])) {
    $book_id = $_POST['book'];
    $qty = $_POST['qty'];
    $user = $_SESSION['user_id'];

    // check stock
    $check = mysqli_query($conn,
        "SELECT quantity FROM inventory WHERE book_id=$book_id"
    );
    $row = mysqli_fetch_assoc($check);

    if ($row['quantity'] >= $qty) {

        // record sale
        mysqli_query($conn,
            "INSERT INTO sales (user_id, book_id, quantity, sale_date)
             VALUES ($user, $book_id, $qty, CURDATE())"
        );

        // reduce inventory
        mysqli_query($conn,
            "UPDATE inventory
             SET quantity = quantity - $qty
             WHERE book_id = $book_id"
        );

        echo "Purchase Successful!";
    } else {
        echo "Not enough stock!";
    }
}
?>
