
var myVar = setInterval(function(){myTimer()}, 1000);
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = t;    
}
document.getElementById("stop").addEventListener("click", function() {clearInterval(myVar) });

document.getElementById("print").addEventListener("click", function(){window.print();});

document.getElementById("reload").addEventListener("click", function(){location.reload();});

var windowOuterHeight = window.outerHeight;
document.getElementById("msgWindowStatus").innerHTML = "The windows outer height is " + windowOuterHeight + "px";

var nav = navigator.product;
document.getElementById("msgNav").innerHTML = "The browsers engine name is " + nav;

var loca = location.href;
document.getElementById("msgloca").innerHTML = "The entire URL is " + loca;

var hist = history.length;
document.getElementById("msgHist").innerHTML = "The number of URLs in the history list is " + hist;
var screenWidth = screen.width;
var screenHeight = screen.height;
document.getElementById("msgScreenWidth").innerHTML = "The screen width is " + screenWidth + "px";
document.getElementById("msgScreenHeight").innerHTML = "The screen height is " + screenHeight + "px";