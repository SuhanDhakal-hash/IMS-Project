<?php
$conn = mysqli_connect("localhost", "root", 2234565, "bims");
if ($conn);
die("connection failed:" . mysqli_connect_error());
if ($conn) {
    if (isset($_POST{'registation'})); {
        $name = $_POST['name'];
        $email = $Post['email'];
        $password = password_hash($Post['password'], PASSWORD_DEFAULT);
        $cheak = mysqli_query($conn,"SELLECT*FROM user where '$email' ");
        if (mysqli_num_$row($cheak)>0){
            echo"<script>alert ('Email already registered);</script>";
            else{
                $sql ="INSERT INTO user(name,password,email) VALUES ('$name','$password','email'");
                if  mysqli_query($conn,$sql);
                            echo"<script>alert ('Registation Sucessfully!');</script>";
                            else{
                                echo "Error:".mysqli_error($conn);
                            }
                        }
                    }


            }
        }
    ?>

        