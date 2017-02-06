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

if ($username == $row['username']) {
  for ($i=0; $i < ; $i++) {
    # code...
  }
  $sql = "UPDATE leaderboards SET score='$finalScore' WHERE username = '$username'";
} else{
  $sql = "INSERT INTO leaderboards (username, score) VALUES ('$username', '$finalScore')";
}

if (!mysqli_query($conn, $sql)){
    die('error ' . mysqli_error($conn));
}

echo "Success!";

mysqli_close($conn);

?>
