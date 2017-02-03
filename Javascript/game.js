$(document).ready(function(){
  var z = 0;
  var scoreNow = 0;
  var ballSpeed = 2000;
  var scoreChange = 10;
  var scoreChangeMeter = 10;
  var finalScore = 0;

  $("#startGameDiv").click(function(){
    $("#startGameDiv").css("display", "none");
    document.getElementById("korgDiv").onmousemove = function(){getMouseCoordinates()};
    $("#korg").css("opacity", "initial");
    $("#plank").css("opacity", "initial");
    $("#basketball").css("opacity", "initial");
    $("#gameOverDiv").css("display", "none");
    $("#gameOverSummary").css("display", "none");

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

  function pauseMusic() {
    document.getElementById("lushlife").pause();
  }

  function pauseMusic2() {
    document.getElementById("game_over").pause();
  }

  function mute() {
    if (document.getElementById("lushlife").muted == false && document.getElementById("game_over").muted == false) {
      document.getElementById("lushlife").muted = true;
      document.getElementById("game_over").muted = true;
      $("#mute").attr("src", "images/Mutefalse.png");
    }
    else {
      document.getElementById("lushlife").muted = false;
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

  function getMouseCoordinates(){
      var x = event.clientX;     // Hämtar x-koordinater för musen
      moveHoop(x)
  }

  function moveHoop(a) {
    a = a + -70;
    var b = a + -50;
    var c = a + 50;

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
      step: function(){
        goal($("#basketball")[0], $("#korgCount")[0]);
      },
      queue: false,
      complete: function(){
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
      z = 0;
    }
    else //Game over!
    {
      $("#startGameDiv").css("display", "initial"); //Gör startknappen till sitt css-ursprungsläge
      $("#startGameParagraph").text("Try again");
      $("#startGameDiv").css("bottom", "220px");
      $("#gameOverDiv").css("display", "block");
      $("#gameOverSummary").css("display", "block");


      $("#korg").css("opacity", "0.6");
      $("#plank").css("opacity", "0.6");
      $("#basketball").css("opacity", "0.6");
      document.getElementById("korgDiv").onmousemove = false;
      finalScore = scoreNow;
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
      ballSpeed = ballSpeed * 0.8;
      scoreChange = scoreChange + scoreChangeMeter;
      scoreChangeMeter = scoreChangeMeter * 1.2;
    }
  }

  function reset() {
    scoreNow = 0;
    ballSpeed = 2000;
    scoreChange = 10;
    scoreChangeMeter = 10;
    z = 0;
  }

  $(window).keypress(function(e) {   //keypress är en inbyggd funktion som tar reda på vilken tangent som trycks på genom s.k. "keycodes", se nedan
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
          document.getElementById("korgDiv").onmousemove = function(){getMouseCoordinates()};   //Sätter igång rörelsen för korg och plank
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
