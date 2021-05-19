// Variable definitions
var bar1 = document.getElementById("room1");
var bar2 = document.getElementById("room2");
var bar3 = document.getElementById("room3");

var stem1 = document.getElementById("stemmenTxt_1");
var stem2 = document.getElementById("stemmenTxt_2");
var stem3 = document.getElementById("stemmenTxt_3");

var kamerNaam1 = document.getElementById("kamernaam_1");
var kamerNaam2 = document.getElementById("kamernaam_2");
var kamerNaam3 = document.getElementById("kamernaam_3");

var kamerNummer1 = document.getElementById("kamernummer_1");
var kamerNummer2 = document.getElementById("kamernummer_2");
var kamerNummer3 = document.getElementById("kamernummer_3");

// Get data from database
function dataOphalen(event) {
  fetch("/api/stemmen/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((kamers) => {
      // Set value to database values
      bar1.value = kamers[0].kamerStemmen;
      bar2.value = kamers[1].kamerStemmen;
      bar3.value = kamers[2].kamerStemmen;

      stem1.innerHTML = kamers[0].kamerStemmen;
      stem2.innerHTML = kamers[1].kamerStemmen;
      stem3.innerHTML = kamers[2].kamerStemmen;

      kamerNaam1.innerHTML = kamers[0].kamerNaam;
      kamerNaam2.innerHTML = kamers[1].kamerNaam;
      kamerNaam3.innerHTML = kamers[2].kamerNaam;

      kamerNummer1.innerHTML = kamers[0].kamerNummer;
      kamerNummer2.innerHTML = kamers[1].kamerNummer;
      kamerNummer3.innerHTML = kamers[2].kamerNummer;

      const maxValue =
        kamers[0].kamerStemmen +
        kamers[1].kamerStemmen +
        kamers[2].kamerStemmen;

      bar1.max = maxValue;
      bar2.max = maxValue;
      bar3.max = maxValue;
    });
}

// Refresh data every second
setInterval(function () {
  dataOphalen();
}, 1000);

// Static content fills
function txtFill() {
  document.getElementById("tijdTxt_1").innerHTML = "9:11";
  document.getElementById("tijdTxt_2").innerHTML = "9:40";
  document.getElementById("tijdTxt_3").innerHTML = "8:23";
  document.getElementById("meubelsTxt_1").innerHTML = "6";
  document.getElementById("meubelsTxt_2").innerHTML = "8";
  document.getElementById("meubelsTxt_3").innerHTML = "5";
}

txtFill();
