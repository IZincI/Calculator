window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var min =00;

    var appendMin = document.getElementById("min");
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonstart = document.getElementById("start-button");
    var buttonstop = document.getElementById("stop-button");
    var buttonreset = document.getElementById("reset-button");

    var Interval;

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            appendSeconds.innerHTML=seconds
        }

        if (seconds>59){
            seconds=0;
            min++;
            appendMin.innerHTML="0"+min;
        }
    }

    

    buttonstart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1);
    }  

    buttonstop.onclick = function(){
        clearTimeout(Interval);
    }

    buttonreset.onclick = function(){
        clearTimeout(Interval);
        appendSeconds.innerHTML ="0"+0;
        appendTens.innerHTML ="0"+0;
    
    }
}