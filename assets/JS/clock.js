// Nav Menu functionality
function displayMenu() {
    const menu = document.getElementById('menu-icon');
}

// Updating the time every second
let pacificTime = setInterval(pacificTimer, 1000);
let mountainTime = setInterval(mountainTimer, 1000);
let centralTime = setInterval(centralTimer, 1000);
let easternTime = setInterval(easternTimer, 1000);

// Creating new times for each timeZone
function pacificTimer() {
    let day = new Date();
    let time = day.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });
    document.getElementById('pst-display').innerHTML = 'PST';
    document.getElementById('pacificTime').innerHTML = time;
}

function mountainTimer() {
    let day = new Date();
    let time = day.toLocaleTimeString('en-US', { timeZone: 'America/Denver' });
    document.getElementById('mst-display').innerHTML = 'MST';
    document.getElementById('mountainTime').innerHTML = time;
}

function centralTimer() {
    let day = new Date();
    let time = day.toLocaleTimeString('en-US', { timeZone: 'America/Chicago' });
    document.getElementById('cst-display').innerHTML = 'CST';
    document.getElementById('centralTime').innerHTML = time;
}

function easternTimer() {
    let day = new Date();
    let time = day.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    document.getElementById('est-display').innerHTML = 'EST';
    document.getElementById('easternTime').innerHTML = time;
}
