<?php
include '../db.php';
?>

<h2>Sales Report</h2>

<table border="1" cellpadding="8">
<tr>
    <th>User</th>
    <th>Book</th>
    <th>Quantity</th>
    <th>Date</th>
</tr>

<?php
$result = mysqli_query($conn,
    "SELECT u.name AS user, b.name AS book, s.quantity, s.sale_date
     FROM Sales s
     JOIN Users u ON s.user_id = u.user_id
     JOIN Book b ON s.book_id = b.book_id"
);

while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
            <td>{$row['user']}</td>
            <td>{$row['book']}</td>
            <td>{$row['quantity']}</td>
            <td>{$row['sale_date']}</td>
          </tr>";
}
?>
</table>
