function dataOphalen() {
  fetch("/api/stemmen/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((kamers) => {
      document.getElementById("kamernaam-winner").innerHTML =
        kamers[2].kamerNaam;
      document.getElementById("description-winner").innerHTML =
        kamers[2].kamerBeschrijving;
      document.getElementById("stemmen-winner").innerHTML =
        kamers[2].kamerStemmen;

      document.getElementById("tijdsduur-winner").innerHTML = "9:40";
      document.getElementById("meubels-winner").innerHTML = "8";
    });
}
dataOphalen();
