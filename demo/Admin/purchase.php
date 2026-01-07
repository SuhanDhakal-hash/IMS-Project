<?php
include '../db.php';

if (isset($_POST['purchase'])) {
    mysqli_query($conn,
        "INSERT INTO purchase (sid,quantity,p_date)
         VALUES ($_POST[sid],$_POST[qty],CURDATE())"
    );
}
?>

<h2>Purchase Stock</h2>

<form method="post">
    Supplier ID:
    <input type="number" name="sid"><br>
    Quantity:
    <input type="number" name="qty"><br>
    <button name="purchase">Purchase</button>
</form>

<hr>

<?php
$p = mysqli_query($conn, "SELECT * FROM purchase");
while ($row = mysqli_fetch_assoc($p)) {
    echo "Supplier ID: ".$row['sid']." | Qty: ".$row['quantity']."<br>";
}
?>
