<?php
include "connect.php";
session_start();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Lush Ball</title>
    <link rel="stylesheet" href="css/leaderboards.css">
		<link rel="stylesheet" href="css/main.css">
	</head>
	<body>
		<div id="homeMenu">
			<div id="homeButtonDiv" class="inMenu" onclick="location.href='index.php';">
				<img id="home" class="symbol" src="images/Home.png" alt="Home">
			</div>
		</div>
		<div id="logoDiv">
			<img src="images/lush_logo.png" id="logo">
		</div>
    <div id="leaderboards">
      <table>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
				<?php
				$rank = 1;
				$sql = "SELECT * FROM leaderboards ORDER BY score DESC LIMIT 10";
				$result = $conn->query($sql) or trigger_error($conn->error."[$sql]");
				while ($row = $result->fetch_assoc()){
					$name = $row['username'];
					$score = $row['score'];
					echo "<tr>";
					echo "<td>".$rank."</td>";
					echo "<td>".$row['username']."</td>";
					echo "<td>".$row['score']."</td>";
					echo "</tr>";
				}
				?>
      </table>
    </div>
  </body>
</html>
