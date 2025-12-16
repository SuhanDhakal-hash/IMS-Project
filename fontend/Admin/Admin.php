<?php
    require_once "connect.php";
    if(isset($_POST['Submit'])){
        $username=$_POST['username'];
        $password=$_POST['password'];

        $sql = "Select * from User where Username = '$username'";
        $result = $conn->query($sql);
        if(mysqli_num_rows($result) > 0){
            $row = mysqli_fetch_assoc($result);
            echo $row['Username'] . '<br>';
            echo $row['Email'];
        }else{
            echo "no user found";
        }
    }

?>