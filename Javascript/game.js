function Test(){
    var x = event.clientX;     // Hämtar x-koordinater för musen
    moveHoop(x)
}

function moveHoop(a) {
  a = a + -70;
  var b = a + -50;

  document.getElementById('korg').style.marginLeft = a + "px";
  document.getElementById('plank').style.marginLeft = b + "px"; 
}

$(document).ready(function(){
  $("#startGameDiv").click(function(){
    $("#startGameDiv").css("display", "none");
    moveBall();
  });
});

function randomBasketBalls() {
  $("#basketball").css("marginTop", "0px");
  randomX();
  moveBall();
}

function randomX(){
  xCoordinate = Math.floor((Math.random() * 1100) + 1);
  $("#basketball").css("marginLeft", xCoordinate + "px");
}

function moveBall() {
  $("#basketball").animate({marginTop: '900'}, 1500, "linear", function() {
    randomBasketBalls();
  });
}

$(window).keypress(function(e) {
  var isAnimating = $("#basketball").is(':animated'); //Returnerar True om variabeln genomgår en animation

  if (isAnimating == false) //Om animationen är pausad
  {
    if (e.keyCode == 0 || e.keyCode == 32) //Om mellanslag trycks ner
    {
      document.getElementById("korgDiv").onmousemove = function(){Test()};        //Sätter igång rörerlsen för korg och plank
      $("#startGameDiv").css("display", "none");                                     //Gör "Start"-knappen osynlig
        moveBall();                                                      //Kör igång animationen
    }
  }

  else //Om animation inte är pausad
    {
      $("#startGameDiv").css("display", "initial");
      $("#startGameParagraph").text("Paused");
      document.getElementById("korgDiv").onmousemove = false; //Avaktiverar rörelsen för kort och plank 
      $("#basketball").stop();  //Pausar animationen
    }
  
});