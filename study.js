var now = new Date();
    var time2 = now.getHours()+':'+now.getMinutes();
    if (time2 >= '8' && time2 <= '10'){document.getElementById("c1").style.background = "#FF6347";}
    if (time2 >= '15:37' && time2 <= '15:38'){document.getElementById("c2").style.background = "#FF6347";}
    if (time2 >= '12' && time2 <= '15:37'){document.getElementById("c3").style.background = "#FF6347";}