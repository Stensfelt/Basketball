$(document).ready(function(){
  var z = 0;
  var scoreNow = 0;
  var ballSpeed = 1800;
  var saveSpeed = ballSpeed;
  var scoreChange = 10;
  var scoreChangeMeter = 10;
  var finalScore = 0;
  document.getElementById("scoreSound").volume = 0.2;
  document.getElementById("game_over").volume = 0.2;

  $("#startGameDiv").click(function(){
    $("#startGameDiv").css("display", "none");
    document.getElementById("korgDiv").onmousemove = function(event){
      event = event || window.event;
      var mouseX = event.clientX;
      moveHoop(mouseX);
    }
    $("#korg").css("opacity", "initial");
    $("#plank").css("opacity", "initial");
    $("#basketball").css("opacity", "initial");
    $("#gameOverSummary").css("display", "none");
    $(".gameOver").css("display", "none");

    playMusic();
    pauseMusic2();
    if ($("#startGameParagraph").text() == "Paused")
    {
      moveBall();
    }
    else
    {
      randomBasketBalls();
    }
  });

  $("#muteDiv").click(function(){
    mute();
  });

  function playMusic() {
    document.getElementById("lushlife").play();
  }

  function playMusic2() {
    document.getElementById("game_over").currentTime = 1.2;
    document.getElementById("game_over").play();
  }

  function playScoreSound() {
    document.getElementById("scoreSound").play();
  }

  function pauseMusic() {
    document.getElementById("lushlife").pause();
  }

  function pauseMusic2() {
    document.getElementById("game_over").pause();
  }

  function mute() {
    if (document.getElementById("lushlife").muted == false && document.getElementById("game_over").muted == false) {
      document.getElementById("lushlife").muted = true;
      document.getElementById("scoreSound").muted = true;
      document.getElementById("game_over").muted = true;
      $("#mute").attr("src", "images/Mutefalse.png");
    }
    else {
      document.getElementById("lushlife").muted = false;
      document.getElementById("scoreSound").muted = false;
      document.getElementById("game_over").muted = false;
      $("#mute").attr("src", "images/Mute.png");
    }
  }

  function goal(obj1, obj2) {

    var rect1 = obj1.getBoundingClientRect();
    var rect2 = obj2.getBoundingClientRect();

    if (!(rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right)) {
      z++;
    }
  }
  function moveHoop(a) {
    a = a + -35;
    var b = a + -25;
    var c = a + 30;

    $("#korg").css("marginLeft", a + "px");
    $("#plank").css("marginLeft", b + "px");
    $("#korgCount").css("marginLeft", c + "px");
  }

  function randomBasketBalls() {
    $("#basketball").css("marginTop", "0px");
    randomX();
    moveBall();
  }

  function randomX(){
    xCoordinate = Math.floor((Math.random() * (screenSize - 110)));
    $("#basketball").css("marginLeft", xCoordinate + "px");
  }

  function moveBall() {
    $("#basketball").animate({marginTop: screenSizeHeight}, {
      duration: ballSpeed,
      easing: "linear",
      step: function(currentTop){
        calculateSpeed(currentTop);
        $("#marginTop").text("Margin-top: " + currentTop);
        $("#speed").text("Speed: " + ballSpeed);
        goal($("#basketball")[0], $("#korgCount")[0]);
        
        
      },
      queue: false,
      complete: function(){
        ballSpeed = saveSpeed;
        checkScore();
        randomBasketBalls();}
    });
  }

  function checkScore() {
    if (z > 0) //Score!
    {
      scoreNow++;
      $("#currentScore").text(scoreNow);
      changeSpeed(scoreNow);
      playScoreSound();
      z = 0;
    }
    else //Game over!
    {
      $("#startGameDiv").css("display", "initial"); //Gör startknappen till sitt css-ursprungsläge
      $("#startGameParagraph").text("Try again");
      $("#startGameDiv").css("bottom", "220px");

      $("#gameOverSummary").css("display", "block");
      finalScore = scoreNow;
      $.post("saveScore.php", { phpScore: finalScore });

      $("#finalScore").text(finalScore);
      $(".gameOver").css("display", "block");

      $("#korg").css("opacity", "0.6");
      $("#plank").css("opacity", "0.6");
      $("#basketball").css("opacity", "0.6");
      document.getElementById("korgDiv").onmousemove = false;

      reset();

      $("#currentScore").text(scoreNow);
      pauseMusic();
      playMusic2();
      document.getElementById("lushlife").currentTime = 0;
      if (isAnimating == true)
      {
        $("#basketball").stop();
      }

    }
  }

  function changeSpeed(currentScore) {
    if (currentScore >= scoreChange) {
      ballSpeed = ballSpeed * 0.9;
      saveSpeed = ballSpeed;
      scoreChange = scoreChange + scoreChangeMeter;
      scoreChangeMeter = scoreChangeMeter + 5;
    }
  }
  function calculateSpeed(currentT){
    var totalDistanceToGo = screenSizeHeight;
    var currentMarginTop = currentT;
    var marginToGo = totalDistanceToGo - currentMarginTop;
    var percent = marginToGo / totalDistanceToGo;
    var newSpeed = percent * saveSpeed;

    if (newSpeed == 0)
    {
      ballSpeed = 1800;
    }
    else
    {
      ballSpeed = newSpeed;
    }
  }

  function reset() {
    scoreNow = 0;
    ballSpeed = 1800;
    saveSpeed = ballSpeed;
    scoreChange = 10;
    scoreChangeMeter = 10;
    z = 0;
  }
   $(window).keydown(function(e) {
    if (e.keyCode == 109 || e.keyCode == 77)
    {
      mute();
    }
  });

  $(window).keydown(function(e) {   //keypress är en inbyggd funktion som tar reda på vilken tangent som trycks på genom s.k. "keycodes", se nedan
    var isAnimating = $("#basketball").is(':animated'); //Returnerar True om variabeln genomgår en animation

    if (isAnimating == false) //Om animationen är pausad
    {
      if (e.keyCode == 32) //Om mellanslag trycks ner (keyCode för mellanslag är 0)
      {
        if ($("#startGameParagraph").text() == "Try again")
        {

        }
        else
        {
          document.getElementById("korgDiv").onmousemove = function(event){   //Sätter igång rörelsen för korg och plank
            event = event || window.event;
            var mouseX = event.clientX;
            moveHoop(mouseX);
          }  
          $("#startGameDiv").css("display", "none"); //Gör "Start"-knappen osynlig
          moveBall();  //Kör igång animationen
          $("#korg").css("opacity", "initial");
          $("#plank").css("opacity", "initial");
          $("#basketball").css("opacity", "initial");
          pauseMusic2();
          playMusic();
        }

      }
    }
    else //Om animation inte är pausad
      {
        if (e.keyCode == 32)
        {
          $("#startGameDiv").css("display", "initial"); //Gör startknappen till sitt css-ursprungsläge
          $("#startGameParagraph").text("Paused"); //Gör om texten från "Start" till "Paused"
          $("#startGameDiv").css("marginTop", "210px");

          document.getElementById("korgDiv").onmousemove = false; //Avaktiverar rörelsen för korg och plank
          $("#basketball").stop();  //Pausar animationen
          $("#korg").css("opacity", "0.6");
          $("#plank").css("opacity", "0.6");
          $("#basketball").css("opacity", "0.6");
          pauseMusic();
        }
      }
  });

  var screenSize = $(window).width();
  var screenSizeHeight = $(window).height();


  $(window).resize(function(){
    screenSize = $(window).width();
  });

  $(window).resize(function(){
    screenSizeHeight = $(window).height();
  });
});
