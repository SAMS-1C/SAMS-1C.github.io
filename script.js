//div 1 
var countDownDate = new Date("Feb 26, 2023 10:00:00").getTime();
var I = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("div1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(I);
    document.getElementById("div1").innerHTML = "EXPIRED";
    document.getElementById("div1").style.color = "#ff0000";}}, 1000);
//div 2 
var countDownDate2 = new Date("Feb 26, 2023 8:00:00").getTime();
var P = setInterval(function() {
var now2 = new Date().getTime();
var distance2 = countDownDate2 - now2;
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
  document.getElementById("div2").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";
  if (distance2 < 0) {
    clearInterval(P);
    document.getElementById("div2").innerHTML = "EXPIRED";
    document.getElementById("div2").style.color = "#ff0000";}}, 1000);
//div 3 
/*var countDownDate3 = new Date("Jan 27, 2023 15:37:25").getTime();
var ph = setInterval(function() {
var now3 = new Date().getTime();
var distance3 = countDownDate3 - now3;
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
  document.getElementById("div3").innerHTML = days3 + "d " + hours3 + "h "
  + minutes3 + "m " + seconds3 + "s ";
  if (distance3 < 0) {
    clearInterval(ph);
    document.getElementById("div3").innerHTML = "EXPIRED";
    document.getElementById("div3").style.color = "#ff0000";}}, 1000);
//div 4 
var countDownDate4 = new Date("Jan 25, 2023 15:37:25").getTime();
var m = setInterval(function() {
var now4 = new Date().getTime();
var distance4 = countDownDate4 - now4;
  var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);
  document.getElementById("div4").innerHTML = days4 + "d " + hours4 + "h "
  + minutes4 + "m " + seconds4 + "s ";
  if (distance4 < 0) {
    clearInterval(m);
    document.getElementById("div4").innerHTML = "EXPIRED";
    document.getElementById("div4").style.color = "#ff0000";}}, 1000);*/
  // شايفك ياللي بتحاول تفتح 
  function script() {
    var password = "0000";
    var x = prompt("Enter The Password "," ");
    if (x == password) {
     alert("Horray");
     window.location.href = 'http://sams-1c.42web.io/?i=1';}
     else{alert("Haha xD U Can't Password is 0000");}};
     document.getElementById('link').onclick = function () {script();};
