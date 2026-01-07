<?php
include '../db.php';

if (isset($_POST['add'])) {
    mysqli_query($conn,
        "INSERT INTO Category (name) VALUES ('$_POST[name]')"
    );
}
?>

<h2>Category</h2>

<form method="post">
    Category Name:
    <input type="text" name="name" required>
    <button name="add">Add</button>
</form>

<hr>

<?php
$result = mysqli_query($conn, "SELECT * FROM Category");
while ($row = mysqli_fetch_assoc($result)) {
    echo $row['name']."<br>";
}
?>
