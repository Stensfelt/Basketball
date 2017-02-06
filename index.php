<?php
session_start();
if(isset($_POST['formSubmit'])){
	 $_SESSION['username'] = $_POST['nameInput'];
 }
 ?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Lush Ball</title>
    <link rel="stylesheet" href="css/main.css?=vkod">
		<script type="text/javascript" src="Javascript/menu.js"> </script>
	</head>
	<body>
		<div id="leftImage">
			<img src="images/nba_background.png" id="left">
		</div>
		<div id="logoDiv">
			<img src="images/lush_logo.png" id="logo">
		</div>
		<div ="playerName">
			<p id="currentPlayer"></p>
		</div>

		<div id="enterName">
			<div id="nameBox">
				<form id="nameForm" method="post">
					<input type="text" name="nameInput" id="nameInput"
						<?php
					 if(!isset($_SESSION['username'])) {
							echo "placeholder='Enter username...'";
						} else {
							echo "value=".$_SESSION['username'];
						}
							?> >
									<br>
					<input type="button" name="cancel" value="Cancel" onclick="exitName()" class="nameBtn">
					<input type="submit" name="formSubmit" value="OK!" class="nameBtn" id="buttonOk" onclick="playerName()">
				</form>
			</div>
		</div>

    <div id="menu">
      <div class="menuButton" id="buttonPlay" onclick="location.href='game.php';">Play</div>
      <div class="menuButton" id="buttonUsername"onclick="namePopup()">
				<?php
				if(!isset($_SESSION['username'])){
								echo "Pick a name";
							} else {
							echo $_SESSION['username'];
					} ?>
			</div>
			<div class="menuButton" id="buttonLeader" onclick="location.href='leaderboards.php';">leaderboards</div>
    </div>


  </body>
</html>
