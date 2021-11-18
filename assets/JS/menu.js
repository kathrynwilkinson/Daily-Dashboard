let menu = document.getElementById('menu-icon');
let closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', closeNav);
menu.addEventListener('click', openNav);

function openNav() {
    document.getElementById('popOutMenu').style.width = '25%';
}

function closeNav() {
    document.getElementById('popOutMenu').style.width = '0%';
}
