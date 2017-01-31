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
  $("#basketball").click(function(){
    randomBasketBalls();
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
  $("#basketball").animate({bottom: '0'}, 1500, "linear", function() {
    randomBasketBalls();
  });
}