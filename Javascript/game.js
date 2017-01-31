function Test(){
    var x = event.clientX;     // Hämtar x-koordinater för musen
    //var y = event.clientY;     // Hämtar y-koordinater för musen
    moveHoop(x)
}

function moveHoop(a) {
  //alert("MouseX = " + a + ", MouseY = " + b);
  a = a + -70;
  var b = a + -50;
  //b = b -260;
  document.getElementById('korg').style.marginLeft = a + "px";
  document.getElementById('plank').style.marginLeft = b + "px";
  //document.getElementById('basketkorg').style.marginTop = b + "px";
}

/*
function randomBasketballs(){
  var basketball = document.getElementById("basketball");
  basketball.style.marginTop = "20px";
  randomX();
  basketball.style.marginLeft = xCoordinate + "px";
  basketball.style.WebkitAnimationPlayState = "running";
}
function randomX(){
  xCoordinate = Math.floor((Math.random() * 1100) + 1);
}
*/
