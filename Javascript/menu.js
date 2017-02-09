$(document).ready(function(){


  /*$("#buttonOk").click(function(){

      var inputName = document.getElementById("nameInput").value;
      var outputName = "";



      if (inputName == "")
        {

            return false;
        }
        else
        {
            outputName = inputName;
        }
        document.getElementById("currentPlayer").innerHTML = outputName;
  });*/

  $("#buttonUsername").click(function(){

      document.getElementById("buttonUsername").style.opacity = "0";

      document.getElementById("leftImage").style.opacity = "0.4";
      document.getElementById("logoDiv").style.opacity = "0.4";
      document.getElementById("menu").style.opacity = "0.4";

      if (document.getElementById("enterName").style.display == "block")
      {
        document.getElementById("enterName").style.display = "none";
      }
      else
      {
        document.getElementById("enterName").style.display = "block";
      }
      document.getElementById("buttonPlay").onclick = false;
      document.getElementById("buttonLeader").onclick = false;
  });


  $("#cancel").click(function(){

    document.getElementById("enterName").style.display = "none";
    document.getElementById("buttonUsername").style.opacity = "1";

    document.getElementById("leftImage").style.opacity = "0.6";
    document.getElementById("logoDiv").style.opacity = "1";
    document.getElementById("menu").style.opacity = "1";
    document.getElementById("buttonPlay").onclick = function(){
      window.location.href = "game.php";
    }
    document.getElementById("buttonLeader").onclick = function(){
      window.location.href = "leaderboards.php";
    }
  });

});
