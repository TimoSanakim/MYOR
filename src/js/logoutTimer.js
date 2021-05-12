// Logout timer
var timerLogout = document.getElementById("logout-timer");
minutesLogout = 2; // Time limit in minutes
counterLogout = minutesLogout * 60; // Timer in seconds
var logoutTimer = setInterval(function () {
  if (counterLogout === -1) return clearInterval(logoutTimer);
  timerLogout.innerHTML = secondsToMinutes(counterLogout); // Place current counter value in HTML
  counterLogout--;
  // Redirect / logout when timer is 0
  if (counterLogout == -1) {
    window.location.href = "/battle/";
  }
}, 1000); // Tick down every second
