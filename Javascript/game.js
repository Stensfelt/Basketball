$(document).ready(function(){
  $("#startGameDiv").click(function(){
    $("#startGameDiv").css("display", "none");
    document.getElementById("korgDiv").onmousemove = function(){Test()};
    $("#korg").css("opacity", "initial");
    $("#plank").css("opacity", "initial");
    $("#basketball").css("opacity", "initial"); 
    moveBall();
  });  

  var z = 0;
  var scoreNow = 0;

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

  function Test(){
      var x = event.clientX;     // Hämtar x-koordinater för musen
      moveHoop(x)
  }
  
  function moveHoop(a) {
    a = a + -70;
    var b = a + -50;
    var c = a + 45;
  
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
    $("#basketball").animate({marginTop: "900"}, {
      duration: 1500,
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
    if (z > 0) {
      scoreNow++;
      $("#currentScore").text(scoreNow);
      z = 0;
    }
  }

  $(window).keypress(function(e) {   //keypress är en inbyggd funktion som tar reda på vilken tangent som trycks på genom s.k. "keycodes", se nedan
    var isAnimating = $("#basketball").is(':animated'); //Returnerar True om variabeln genomgår en animation
  
    if (isAnimating == false) //Om animationen är pausad
    {
      if (e.keyCode == 32) //Om mellanslag trycks ner (keyCode för mellanslag är 0)
      {
        document.getElementById("korgDiv").onmousemove = function(){Test()};   //Sätter igång rörelsen för korg och plank
        $("#startGameDiv").css("display", "none"); //Gör "Start"-knappen osynlig
        moveBall();  //Kör igång animationen
        $("#korg").css("opacity", "initial");
        $("#plank").css("opacity", "initial");
        $("#basketball").css("opacity", "initial");  
      }
    }
    else //Om animation inte är pausad
      {
        if (e.keyCode == 32)
        {
          $("#startGameDiv").css("display", "initial"); //Gör startknappen till sitt css-ursprungsläge
          $("#startGameParagraph").text("Paused"); //Gör om texten från "Start" till "Paused"
          document.getElementById("korgDiv").onmousemove = false; //Avaktiverar rörelsen för korg och plank 
          $("#basketball").stop();  //Pausar animationen
          $("#korg").css("opacity", "0.6");
          $("#plank").css("opacity", "0.6");
          $("#basketball").css("opacity", "0.6");
        }
      }
  });
  var screenSize = $(window).width();
  
  $(window).resize(function(){
    screenSize = $(window).width();
  });

});