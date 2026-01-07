<?php

include "db.php";

$unencrypted_password = "admin123";
$hashed_password = password_hash($unencrypted_password, PASSWORD_DEFAULT);
$result = mysqli_query($conn,"insert into admin(email, password)value('admin@admin.com','$hashed_password')");
if($result) {
    echo "sucessfull";
}
?>