//div 1 introduction
/*var countDownDate = new Date("Jan 30, 2023 12:45:00").getTime();
var I = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("intro").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(I);
    document.getElementById("intro").innerHTML = "EXPIRED";
    document.getElementById("intro").style.color = "#ff0000";}}, 1000); 
//div 2 Programming
var countDownDate2 = new Date("Jan 26, 2023 15:37:25").getTime();
var P = setInterval(function() {
var now2 = new Date().getTime();
var distance2 = countDownDate2 - now2;
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
  document.getElementById("Prog").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";
  if (distance2 < 0) {
    clearInterval(P);
    document.getElementById("Prog").innerHTML = "EXPIRED";
    document.getElementById("Prog").style.color = "#ff0000";}}, 1000);
//div 3 Physics
var countDownDate3 = new Date("Jan 27, 2023 15:37:25").getTime();
var ph = setInterval(function() {
var now3 = new Date().getTime();
var distance3 = countDownDate3 - now3;
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
  document.getElementById("phy").innerHTML = days3 + "d " + hours3 + "h "
  + minutes3 + "m " + seconds3 + "s ";
  if (distance3 < 0) {
    clearInterval(ph);
    document.getElementById("phy").innerHTML = "EXPIRED";
    document.getElementById("phy").style.color = "#ff0000";}}, 1000);
//div 4 Math
var countDownDate4 = new Date("Jan 25, 2023 15:37:25").getTime();
var m = setInterval(function() {
var now4 = new Date().getTime();
var distance4 = countDownDate4 - now4;
  var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);
  document.getElementById("math").innerHTML = days4 + "d " + hours4 + "h "
  + minutes4 + "m " + seconds4 + "s ";
  if (distance4 < 0) {
    clearInterval(m);
    document.getElementById("math").innerHTML = "EXPIRED";
    document.getElementById("math").style.color = "#ff0000";}}, 1000);*/
  // شايفك ياللي بتحاول تفتح 
  function script() {
    var password = "mostafa";
    var x = prompt("Enter the password "," ");
    if (x.toLowerCase() == password) {
     alert("Horray");
     window.location.href = 'https://sams-1c.github.io';}
     else{alert("Haha xD U Can't");}};
     document.getElementById('link').onclick = function () {script();};
