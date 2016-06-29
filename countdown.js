window.onload = function cd2() {
    "use strict";
    var curTime = new Date(),
        deadline = new Date("October 01, 2016 19:00:00"),
        remTime = deadline - curTime,

        seconds = Math.floor(remTime / (1000) % 60),
        minutes = Math.floor(remTime / (1000 * 60) % 60),
        hours   = Math.floor(remTime / (1000 * 60 * 60) % 24),
        days    = Math.floor(remTime / (1000 * 60 * 60 * 24));
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    setTimeout(cd2, 1000);
};