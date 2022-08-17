
//generating first dice

var x = Math.floor(Math.random() * 6) + 1;
var iName1 = "images/" + "dice" + x + ".png";
var sel = document.querySelectorAll("img")[0];
sel.setAttribute("src",iName1);
//generating second dice
var y  = Math.floor(Math.random() * 6) + 1;
var iName2 = "images/" + "dice" + y + ".png";
var sel = document.querySelectorAll("img")[1];
sel.setAttribute("src",iName2);
//checking winner
if(x > y)
document.getElementById("result").innerHTML = "Player 1 Wins!!";
else if(x < y)
document.getElementById("result").innerHTML = "Player 2 Wins!!";
else
document.getElementById("result").innerHTML = "It's a Tie!!";
