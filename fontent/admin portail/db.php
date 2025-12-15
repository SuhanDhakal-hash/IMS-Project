<?php
$conn = mysqli_connect("localhost", "root", "223456", "IMS");

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
