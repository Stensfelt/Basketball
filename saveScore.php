<?php

include connect.php;

$score = mysqli_real_escape_string($conn, $_POST['title']);
$username = $_SESSION['idUser'];

$sql = "INSERT INTO leaderboards (username, score) VALUES ('Andreas', '111')";

if (!mysqli_query($conn, $sql)){
    die('error ' . mysqli_error($conn));
}

echo "Success!";

mysqli_close($conn);

?>
