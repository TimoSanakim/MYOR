var bar1 = document.getElementById("room1");
var bar2 = document.getElementById("room2");
var bar3 = document.getElementById("room3");

setInterval(function () {
    if(bar1.value == 100){
        return;
    }
    if(bar2.value == 100){
        return;
    }
    if(bar3.value == 100){
        return;
    }
    else{
        bar1.value += 1;
        bar2.value += 1.5;
        bar3.value += 2;
    }
}, (5 * 1000) / 100);