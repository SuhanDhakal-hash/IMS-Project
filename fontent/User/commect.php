        <?php
$host = "localhost";
$user = "root";
$password = "223456";
$dbname = "ims";
$conn = mysqli_connect($host, $user, $password, $dbname);
if (!$conn) {
    die("connection unsucessful");
}
