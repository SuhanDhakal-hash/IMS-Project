<?php
include '../db.php';

if (isset($_POST['add'])) {
    mysqli_query($conn,
        "INSERT INTO Supplier (sname,address,email,phone)
         VALUES ('$_POST[name]','$_POST[address]','$_POST[email]','$_POST[phone]')"
    );
}
?>

<h2>Supplier</h2>

<form method="post">
    Name: <input type="text" name="name"><br>
    Address: <input type="text" name="address"><br>
    Email: <input type="email" name="email"><br>
    Phone: <input type="text" name="phone"><br>
    <button name="add">Add Supplier</button>
</form>

<hr>

<?php
$res = mysqli_query($conn, "SELECT * FROM Supplier");
while ($r = mysqli_fetch_assoc($res)) {
    echo $r['sname']." - ".$r['phone']."<br>";
}
?>
