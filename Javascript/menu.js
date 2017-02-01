function namePopup ()
{
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
}
function exitName ()
{
  document.getElementById("enterName").style.display = "none";
  document.getElementById("buttonUsername").style.opacity = "1";

  document.getElementById("leftImage").style.opacity = "1";
  document.getElementById("logoDiv").style.opacity = "1";
  document.getElementById("menu").style.opacity = "1";
}
