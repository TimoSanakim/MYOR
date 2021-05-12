var bar1 = document.getElementById("room1");
var bar2 = document.getElementById("room2");
var bar3 = document.getElementById("room3");

var stem1 = document.getElementById("stemmenTxt_1");
var stem2 = document.getElementById("stemmenTxt_2");
var stem3 = document.getElementById("stemmenTxt_3");

function dataOphalen(event) {
  fetch("/api/stemmen/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((kamers) => {
      console.log(kamers);

      bar1.value = kamers[0].kamerStemmen;
      bar2.value = kamers[1].kamerStemmen;
      bar3.value = kamers[2].kamerStemmen;

      stem1.innerHTML = kamers[0].kamerStemmen;
      stem2.innerHTML = kamers[1].kamerStemmen;
      stem3.innerHTML = kamers[2].kamerStemmen;

      const maxValue =
        kamers[0].kamerStemmen +
        kamers[1].kamerStemmen +
        kamers[2].kamerStemmen;

      bar1.max = maxValue;
      bar2.max = maxValue;
      bar3.max = maxValue;
    });
}

setInterval(function () {
  dataOphalen();
}, 1000);

function txtFill() {
  document.getElementById("tijdTxt_1").innerHTML = "9:11";
  document.getElementById("tijdTxt_2").innerHTML = "9:40";
  document.getElementById("tijdTxt_3").innerHTML = "8:23";

  document.getElementById("meubelsTxt_1").innerHTML = "6";
  document.getElementById("meubelsTxt_2").innerHTML = "8";
  document.getElementById("meubelsTxt_3").innerHTML = "5";
}
txtFill();
