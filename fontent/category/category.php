<?php
$conn = mysqli_connect("localhost", "root", 2234565, "bims");
if ($conn);
die("connection failed:" . mysqli_connect_error());
if ($conn) {
    if (isset($_POST{'caregory'})); {
        $name = $_POST['name'];
        $email = $Post['email'];
        $password = password_hash($Post['password'], PASSWORD_DEFAULT);
        $cheak = mysqli_query($conn,"SELLECT*FROM ims ");
    }
}
        