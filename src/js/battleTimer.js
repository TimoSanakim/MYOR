// Battle timer
var timerBattle = document.getElementById("battle-timer");
minutesBattle = 10; // Time limit in minutes
counterBattle = minutesBattle * 60; // Timer in seconds
function secondsToMinutes(d) {
  d = Number(d);
  var m = Math.floor((d % 3600) / 60); // Calculate minutes
  var s = Math.floor((d % 3600) % 60); // Calculate seconds
  return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2); // Format in MM:SS format
}
var battleTimer = setInterval(function () {
  if (counterBattle === -1) return clearInterval(battleTimer);
  timerBattle.innerHTML = secondsToMinutes(counterBattle); // Place current counter value in HTML
  counterBattle--;
  // Alert for timer
  if (counterBattle == -1) {
    alert("Tijd is over!");
  }
}, 1000); // Tick down every second
