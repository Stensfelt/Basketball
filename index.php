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
						if(isset($_POST['formSubmit'])){
						 $_SESSION['username'] = $_POST['nameInput'];
					 }
					 if(!isset($_SESSION['username'])) {
							echo "placeholder='Skriv in användarnamn'";
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
      <div class="menuButton" id="buttonPlay" onclick="location.href='game.html';">Spela</div>
      <div class="menuButton" id="buttonUsername"onclick="namePopup()">
				<?php 
				if(!isset($_SESSION['username'])){
								echo "Välj namn";
							} else {
							echo $_SESSION['username'];
					} ?>
			</div>
			<div class="menuButton" id="buttonLeader" onclick="location.href='leaderboards.html';">Topplista</div>
    </div>


  </body>
</html>
