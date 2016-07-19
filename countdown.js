window.onload = function cd2() {
    "use strict";

    function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
    }

    var curTime = new Date(),
        deadline = new Date("October 01, 2016 19:00:00"),
        remTime = deadline - curTime,

        seconds = Math.floor(remTime / (1000) % 60),
        seconds = pad(seconds),
        minutes = Math.floor(remTime / (1000 * 60) % 60),
        minutes = pad(minutes),
        hours   = Math.floor(remTime / (1000 * 60 * 60) % 24),
        hours = pad(hours),
        days    = Math.floor(remTime / (1000 * 60 * 60 * 24));
        days = pad(days),

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    setTimeout(cd2, 1000);
};
