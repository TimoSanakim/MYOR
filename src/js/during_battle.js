// Carousel slider
var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // Hide old element
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block"; // Show new element
  setTimeout(carousel, 10000); // Change screen every 10 seconds
}

// Execute fill function on page load
window.addEventListener("load", (event) => {
  fill();
});

// Static content fills
function fill() {
  document.getElementById("person1").innerHTML = "Gert Geritson";
  document.getElementById("person1image").src =
    "../../../src/img/assets/faces/person1.png";
  document.getElementById("participant1").innerHTML = "Deelnemer 1";
  document.getElementById("room1").src =
    "../../../src/img/assets/empty_room.png";

  document.getElementById("person2").innerHTML = "Bart simpson";
  document.getElementById("person2image").src =
    "../../../src/img/assets/faces/person1.png";
  document.getElementById("participant2").innerHTML = "Deelnemer 2";
  document.getElementById("room2").src =
    "../../../src/img/assets/empty_room.png";

  document.getElementById("person3").innerHTML = "Gastrie";
  document.getElementById("person3image").src =
    "../../../src/img/assets/faces/person1.png";
  document.getElementById("participant3").innerHTML = "Deelnemer 3";
  document.getElementById("room3").src =
    "../../../src/img/assets/empty_room.png";
}

// Watching timer
var timerWatching = document.getElementById("watching-timer");
minutesWatching = 10; // Time limit in minutes
counterWatching = minutesWatching * 60; // Timer in seconds
function secondsToMinutes(d) {
  d = Number(d);
  var m = Math.floor((d % 3600) / 60); // Calculate minutes
  var s = Math.floor((d % 3600) % 60); // Calculate seconds
  return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2); // Format in MM:SS format
}
var watchingTimer = setInterval(function () {
  if (counterWatching === -1) return clearInterval(watchingTimer);
  timerWatching.innerHTML = secondsToMinutes(counterWatching); // Place current counter value in HTML
  counterWatching--;
  // Alert for timer
  if (counterWatching == -1) {
    window.location.href = "/battle/display_votes/after_battle";
  }
}, 1000); // Tick down every second
