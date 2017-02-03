<?php

// $conn = mysqli_connect('localhost', 'id692526_lushball_user', 'lushball05', 'id692526_lushball_db');
$conn = mysqli_connect('localhost', 'root', '', 'test');

if (!$conn){
  die("the connection failed".mysqli_connect_errno());
}

mysqli_set_charset($conn,"utf8");

?>
