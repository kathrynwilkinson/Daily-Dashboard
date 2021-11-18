const names = ['Amina', 'Babajide', 'Kenneth', 'Wayeu', 'Myesha', 'Stteffanny', 'Valentina', 'Victoria', 'Derrick', 'Mesfin', 'Yonatan', 'Catherine', 'Alex Latte', 'Danielle', 'Anthony Lomax', 'Yohannes', 'Mathew Olajide', 'Slav', 'Hemalatha', 'Sri', 'Daniel', 'Saul', 'Santosh', 'Humaira', 'Alex Torres', 'Aboma', 'Helen', 'Synquis']; // prettier-ignore

const getNameButton = document.getElementById('nameBtn');
const clearButton = document.getElementById('clearBtn');
const namesList = document.getElementById('classList');
const soundEls = document.getElementsByTagName('audio');

let myInterval;

// Function clearing name from list div

const clearBox = () => {
    namesList.innerHTML = '';
};

// function to run infinitely thru names
const start = () => {
    //   soundEl.current.play();
    generateRandomName();
};

const stop = () => {
    clearInterval(myInterval);
    myInterval = 0;
    soundEls[0].pause();
    // soundEl.current.pause();
    return;
};

const clear = () => {
    stop();
    clearBox();
};

// Function creating list item as random name is generated

const generateRandomName = () => {
    // clearBox(); // Clears name before delivering new name
    if (!myInterval) {
        myInterval = setInterval(() => {
            clearBox();
            soundEls[0].play();
            let randomName = names[Math.floor(Math.random() * names.length)];
            let listItem = document.createElement('li');
            listItem.id = 'randomName';
            listItem.innerHTML = randomName; // Delivers a random name
            namesList.appendChild(listItem);
        }, 150);
    }
    return;
};

getNameButton.onclick = start;

clearButton.onclick = stop;

clearButton.ondblclick = clear;
