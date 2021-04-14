burgermenu = document.getElementById("burgermenu");
menu = document.getElementById("menu");

burgermenu.onclick = function() {
    burgermenu.classList.toggle("open");
    menu.classList.toggle("menu-open")
}
