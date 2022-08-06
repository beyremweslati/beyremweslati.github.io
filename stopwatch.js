var seconds = 00;
var tens = 00;
var minutes = 00;
var Bstart = document.getElementById("start");
var Bstop = document.getElementById("stop");
var Breset = document.getElementById("reset");
var Amin = document.getElementById("minutes");
var Asec = document.getElementById("seconds");
var Atens = document.getElementById("tens");
var Interval;

Bstart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}
Bstop.onclick = function(){
    clearInterval(Interval);
}
Breset.onclick = function(){
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00"
    Atens.innerHTML = tens;
    Asec.innerHTML = seconds;
    Amin.innerHTML = minutes;
}

function startTimer(){
    tens++;
    if(tens <= 9){
        Atens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        Atens.innerHTML = tens;
    }
    if(tens > 99){
        seconds ++;
        Asec.innerHTML = "0" + seconds;
        tens = 0
        Atens.innerHTML = "0" + 0; 
    }
    if (seconds > 9){
        Asec.innerHTML = seconds;
    }
    if (seconds > 59){
        minutes++
        Amin.innerHTML = "0" +  minutes;
        seconds = 0;
        Asec.innerHTML = "0" + 0;
        tens = 0;
        Atens.innerHTML = "0" + 0;
    }
}