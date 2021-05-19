// Drag and drop system for creating rooms
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("item", ev.target.id); // Set old position for dragged element
}

function drop(ev) {
  ev.preventDefault();
  const item = ev.dataTransfer.getData("item");
  const key = document.getElementById(item); // Define element being dragged
  const dropzone = ev.target; // Connect new position with dragged element
  dropzone.appendChild(key); // Set new position for dragged element
}
