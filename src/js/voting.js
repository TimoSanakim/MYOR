// Variables for countdown system and roomnumber
let seconds = 16;
let roomnumber = 0;

// Eventlisteners for each radiobutton
document.getElementById("radio1").addEventListener("click", person1);
document.getElementById("radio2").addEventListener("click", person2);
document.getElementById("radio3").addEventListener("click", person3);

document.getElementById("radio1").addEventListener("click", roomnumber1);
document.getElementById("radio2").addEventListener("click", roomnumber2);
document.getElementById("radio3").addEventListener("click", roomnumber3);

// Changing the userdata depending on how many seconds have passed. (5 seconds per user)
window.onload = () => {
  setInterval(function () {
    console.log("roomnumber: " + roomnumber);
    console.log("seconds: " + seconds);
    seconds--;
    if (seconds < 0) {
      seconds = 15;
    }
    if (seconds == 5) {
      person3();
    }
    if (seconds == 10) {
      person2();
    }
    if (seconds >= 15) {
      person1();
    }
  }, 1000);
};

function roomnumber1() {
  roomnumber = 1;
  document.getElementById("submit").disabled = false;
}

function roomnumber2() {
  roomnumber = 2;
  document.getElementById("submit").disabled = false;
}

function roomnumber3() {
  roomnumber = 3;
  document.getElementById("submit").disabled = false;
}

// Static userdata content fill
function person1() {
  document.getElementById("image-user").src =
    "../../../src/img/assets/faces/avatar.png";
  document.getElementById("name-user").innerHTML = "Rafaël van der Heijden";
  document.getElementById("room-type").innerHTML = "Huiskamer";
  document.getElementById("number-user").innerHTML = "#1";
  document.getElementById("image-room").src =
    "../../../src/img/assets/sofa_room.png";
}
function person2() {
  document.getElementById("image-user").src =
    "../../../src/img/assets/faces/avatar.png";
  document.getElementById("name-user").innerHTML = "Timo Sanakim";
  document.getElementById("room-type").innerHTML = "Huiskamer";
  document.getElementById("number-user").innerHTML = "#2";
  document.getElementById("image-room").src =
    "../../../src/img/assets/plant_room.png";
}
function person3() {
  document.getElementById("image-user").src =
    "../../../src/img/assets/faces/unknown.png";
  document.getElementById("name-user").innerHTML = "Gast 3";
  document.getElementById("room-type").innerHTML = "Huiskamer";
  document.getElementById("number-user").innerHTML = "#3";
  document.getElementById("image-room").src =
    "../../../src/img/assets/chair_room.png";
}
