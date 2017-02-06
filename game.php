<?php session_start(); ?>
<!DOCTYPE html>
<html>
	<head>
		<title>Lush ball</title>
		<link rel="stylesheet" type="text/css" href="css/game.css">
		<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="Javascript/game.js"></script>
	</head>
	<body>
		<div id="menu">
			<div id="homeButtonDiv" class="inMenu" onclick="location.href='index.php';">
				<img id="home" class="symbol" src="images/Home.png" alt="Home">
			</div>
			<div id="muteDiv" class="inMenu">
				<img id="mute" class="symbol" src="images/Mute.png" alt="Mute">
			</div>
			<div id="currentScoreDiv" class="inMenu">
				<p id="currentScore">0</p>
			</div>
		</div>

		<div id="korgDiv">
			<fieldset id="gameOverSummary"></fieldset>

			<div id="startGameDiv"><p class="paragraph" id="startGameParagraph">Start</p></div>
			<div class="gameOver" id="gameOverDiv"><p class="paragraph" id="gameOverParagraph">Game over</p></div>
			<div class="gameOver" id="finalScore"><p class="paragraph" id="finalScoreParagraph">0</p></div>
			<div class="gameOver" id="saveScore" onclick="location.href='leaderboards.php';"><p class="paragraph" id="saveScoreParagraph">Leaderboards</p></div>

			<img id="plank" src="images/Plank.png">
			<img id="korg" src="images/Korg2.png">
			<div id="korgCount" class="score"></div>
			<img id="basketWallpaper" src="images/basketWallpaper.png">
			<img id="basketball" class="basketballs" src="images/Boll.png">
		</div>

		<audio controls id="lushlife" loop>
			<source id="lush" src="sounds/lushlife.mp3" type="audio/mpeg">
		</audio>
		<audio controls id="game_over">
			<source id="game_over" src="sounds/game_over.mp3" type="audio/mpeg">
		</audio>
		<audio id="scoreSound">
			<source id="scoreSound" src="sounds/pop.mp3" type="audio/mpeg">
		</audio>
	</body>
</html>
