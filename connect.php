<?php

$conn = mysqli_connect('localhost', 'id692526_lushball_user', 'lushball05', 'id692526_lushball_db');

if (!$conn){
  die("the connection failed".mysqli_connect_errno());
}


//mysqli_set_charset($conn,"utf8");

//Sätt in data i databasen
$sql = "INSERT INTO leaderboards (username, score) VALUES ('Andreas', '111')";

if (!mysql_query($conn, $sql)){
    die('error ' . mysql_error($conn));
}

echo "Success!";

mysql_close($conn);

?>
