
let menu = document.getElementById("menu-icon");


menu.addEventListener('click', openNav);


function openNav() {
    document.getElementById("myNav").style.width = "33%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}