function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("item", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const item = ev.dataTransfer.getData("item");
  const key = document.getElementById(item);
  const dropzone = ev.target;
  dropzone.appendChild(key);
}
