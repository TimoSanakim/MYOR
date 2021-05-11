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
    document.getElementById("participate1").innerHTML="doet mee";
    
    document.getElementById("person2").innerHTML = "Gast 2";
    document.getElementById("person2image").src="../../../src/img/assets/faces/person1.png";
    document.getElementById("participate2").innerHTML="doet mee";
    
    document.getElementById("person3").innerHTML = "Deze plek is vrij doe nu mee!";
    document.getElementById("person3image").src="";
    document.getElementById("participate3").innerHTML="";
}