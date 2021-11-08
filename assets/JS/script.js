let pacificTime = setInterval(pacificTimer, 1000);
let mountainTime = setInterval(mountainTimer, 1000);
let centralTime = setInterval(centralTimer, 1000);
let easternTime = setInterval(easternTimer, 1000);

function pacificTimer() {
    let day = new Date();
    let time = day.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });
    document.getElementById("pacificTime").innerHTML = time;
}

function mountainTimer() {
    let day = new Date();
    let time = day.toLocaleTimeString('en-US', { timeZone: 'America/Denver' });
    document.getElementById("mountainTime").innerHTML = time;
}

function centralTimer() {
    let day = new Date();
    let time = day.toLocaleTimeString('en-US', { timeZone: 'America/Chicago' });
    document.getElementById("centralTime").innerHTML = time;
}

function easternTimer() {
    let day = new Date();
    let time = day.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    document.getElementById("easternTime").innerHTML = time;
}