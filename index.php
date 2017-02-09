<?php
session_start();
if(isset($_POST['formSubmit'])){
	if ($_POST['nameInput'] == "")
	{
		$_POST['nameInput'] = "Anonymous";
	}
 	$_SESSION['username'] = $_POST['nameInput'];
 }
 ?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Lush Ball</title>
    <link rel="stylesheet" href="css/main.css">
		<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="Javascript/menu.js"> </script>
	</head>
	<body>
		<div id="leftImage">
			<img src="images/nba_background.png" id="left">
		</div>
		<div id="rightImage">
			<img src="images/nba_background2.png" id="right">
		</div>
		<div id="logoDiv">
			<img src="images/lush_logo.png" id="logo">
		</div>
		<div id="enterName">
			<div id="nameBox">
				<form id="nameForm" method="post">
					<input type="text" name="nameInput" id="nameInput" maxlength = "17"
						<?php
					 if(!isset($_SESSION['username'])) {
							echo "placeholder='Enter username...'";
						} else {
							echo "value=".$_SESSION['username'];
						}
							?> >
									<br>
					<input type="button" name="cancel" value="Cancel" class="nameBtn" id="cancel">
					<input type="submit" name="formSubmit" value="OK!" class="nameBtn" id="buttonOk">
				</form>
			</div>
		</div>

    <div id="menu">
      <div class="menuButton" id="buttonPlay" onclick="location.href='game.php';">Play</div>
      <div class="menuButton" id="buttonUsername">
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
