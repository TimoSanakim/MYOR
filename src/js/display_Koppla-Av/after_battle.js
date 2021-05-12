
setInterval(function () {
    var bar1 = document.getElementById("room1");
    var bar2 = document.getElementById("room2");
    var bar3 = document.getElementById("room3");

    if(bar3.value + bar1.value + bar2.value >= 100){
        return;
    }
    else{
        /* Stop hier het aantal stemmen in van persoon 1,2 en 3. */

        bar1.value += 1;
        bar2.value += 1;
        bar3.value += 1;

    }
}, 100);

txtFill();

function txtFill(){
    /* Vul hier de database informatie per persoon in */
    document.getElementById("stemmenTxt_1").innerHTML = "14"
    document.getElementById("stemmenTxt_2").innerHTML = "17"
    document.getElementById("stemmenTxt_3").innerHTML = "12"

    document.getElementById("tijdTxt_1").innerHTML = "9:11"
    document.getElementById("tijdTxt_2").innerHTML = "9:40"
    document.getElementById("tijdTxt_3").innerHTML = "8:23"

    document.getElementById("meubelsTxt_1").innerHTML = "6"
    document.getElementById("meubelsTxt_2").innerHTML = "8"
    document.getElementById("meubelsTxt_3").innerHTML = "5"
};

function getVotes(){
    /* Haal de totale hoeveelheid stemmen op uit Database */
    
};