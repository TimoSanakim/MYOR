// Get data from database
function dataOphalen() {
  fetch("/api/stemmen/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json()) // Get response as JSON
    .then((kamers) => {
      // Set new values based on database value
      document.getElementById("kamernaam-winner").innerHTML =
        kamers[2].kamerNaam;
      document.getElementById("description-winner").innerHTML =
        kamers[2].kamerBeschrijving;
      document.getElementById("stemmen-winner").innerHTML =
        kamers[2].kamerStemmen;

      // Static content
      document.getElementById("tijdsduur-winner").innerHTML = "9:40";
      document.getElementById("meubels-winner").innerHTML = "8";
    });
}

// Execute
dataOphalen();
