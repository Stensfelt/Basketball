function Test(){
    var x = event.clientX;     // Hämtar x-koordinater för musen
    moveHoop(x)
}

function moveHoop(a) {
  a = a + -70;
  var b = a + -50;

  $("#korg").css("marginLeft", a + "px");
  $("#plank").css("marginLeft", b + "px");
}

$(document).ready(function(){
  $("#startGameDiv").click(function(){
    $("#startGameDiv").css("display", "none");
    document.getElementById("korgDiv").onmousemove = function(){Test()};
    $("#korg").css("opacity", "initial");
    $("#plank").css("opacity", "initial");
    $("#basketball").css("opacity", "initial"); 
    moveBall();
  });
});

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
  $("#basketball").animate({marginTop: '900'}, 1500, "linear", function() {
    randomBasketBalls();
  });
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