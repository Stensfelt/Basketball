<?php

include "connect.php";
session_start();

$finalScore = mysqli_real_escape_string($conn, $_POST['phpScore']);

if (isset($_SESSION['username'])) {
  $username = $_SESSION['username'];
} else{
  mysqli_close($conn);
}
$sql = "SELECT * FROM leaderboards ORDER BY score DESC LIMIT 10";
$result = $conn->query($sql) or trigger_error($conn->error."[$sql]");
$row = $result->fetch_assoc();

if (!mysqli_query($conn, $sql)){
    die('error ' . mysqli_error($conn));
}

echo "Success!";

mysqli_close($conn);

?>
