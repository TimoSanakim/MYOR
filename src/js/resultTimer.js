// Battle timer
var timerResult = document.getElementById("result-timer");
minutes = 1; // Time limit in minutes
counterResult = minutes * 60; // Timer in seconds
function secondsToMinutes(d) {
  d = Number(d);
  var m = Math.floor((d % 3600) / 60); // Calculate minutes
  var s = Math.floor((d % 3600) % 60); // Calculate seconds
  return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2); // Format in MM:SS format
}
var resultTimer = setInterval(function () {
  if (counterResult === -1) return clearInterval(resultTimer);
  timerResult.innerHTML = secondsToMinutes(counterResult); // Place current counter value in HTML
  counterResult--;
  // Alert for timer
  if (counterResult == -1) {
    window.location.href = "../winner/";
  }
}, 1000); // Tick down every second
