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
  document.getElementById("person1").innerHTML = "Rafaël van der Heijden";
  document.getElementById("person1image").src =
    "../../../src/img/assets/faces/avatar.png";
  document.getElementById("participate1").innerHTML = "doet mee";

  document.getElementById("person2").innerHTML = "Timo Sanakim";
  document.getElementById("person2image").src =
    "../../../src/img/assets/faces/avatar.png";
  document.getElementById("participate2").innerHTML = "doet mee";

  document.getElementById("person3").innerHTML =
    "Deze plek is vrij doe nu mee!";
  document.getElementById("person3image").src = "";
  document.getElementById("participate3").innerHTML = "";
}

// Waiting timer
var timerWaiting = document.getElementsByClassName("waiting-timer")[0];
minutesWaiting = 5; // Time limit in minutes
counterWaiting = minutesWaiting * 60; // Timer in seconds
function secondsToMinutes(d) {
  d = Number(d);
  var m = Math.floor((d % 3600) / 60); // Calculate minutes
  var s = Math.floor((d % 3600) % 60); // Calculate seconds
  return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2); // Format in MM:SS format
}
var waitingTimer = setInterval(function () {
  if (counterWaiting === -1) return clearInterval(waitingTimer);
  timerWaiting.innerHTML = secondsToMinutes(counterWaiting); // Place current counter value in HTML
  counterWaiting--;
  // Alert for timer
  if (counterWaiting == -1) {
    window.location.href = "/battle/display_votes/during_battle";
  }
}, 1000); // Tick down every second

// Waiting timer2
var timerWaiting2 = document.getElementsByClassName("waiting-timer2")[0];
minutesWaiting2 = 5; // Time limit in minutes
counterWaiting2 = minutesWaiting2 * 60; // Timer in seconds
function secondsToMinutes(d) {
  d = Number(d);
  var m = Math.floor((d % 3600) / 60); // Calculate minutes
  var s = Math.floor((d % 3600) % 60); // Calculate seconds
  return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2); // Format in MM:SS format
}
var waitingTimer2 = setInterval(function () {
  if (counterWaiting2 === -1) return clearInterval(waitingTimer2);
  timerWaiting2.innerHTML = secondsToMinutes(counterWaiting2); // Place current counter value in HTML
  counterWaiting2--;
  // Alert for timer
}, 1000); // Tick down every second
