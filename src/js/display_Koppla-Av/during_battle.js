var myIndex = 0;
carousel();
function carousel() {
      var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000); // Change screen every 10 seconds
}

window.addEventListener('load', (event) => {
    fill();
});

function fill() {
    document.getElementById("person1").innerHTML = "Gert Geritson";
    document.getElementById("person1image").src="../../../src/img/assets/faces/person1.png";
    document.getElementById("participant1").innerHTML="Deelnemer 1";
    document.getElementById("room1").src="../../../src/img/assets/empty_room.png";

    document.getElementById("person2").innerHTML = "Bart simpson";
    document.getElementById("person2image").src="../../../src/img/assets/faces/person1.png";
    document.getElementById("participant2").innerHTML="Deelnemer 2";
    document.getElementById("room2").src="../../../src/img/assets/empty_room.png";

    document.getElementById("person3").innerHTML = "Gast 3";
    document.getElementById("person3image").src="../../../src/img/assets/faces/person1.png";
    document.getElementById("participant3").innerHTML="Deelnemer 3";
    document.getElementById("room3").src="../../../src/img/assets/empty_room.png";
}