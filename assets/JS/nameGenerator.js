const names = ['Amina', 'Babajide', 'Kenneth', 'Wayeu', 'Myesha', 'Stteffanny', 'Valentina', 'Victoria', 'Derrick', 'Mesfin', 'Yonatan', 'Catherine', 'Alex Latte', 'Danielle', 'Anthony Lomax', 'Yohannes', 'Mathew Olajide', 'Slav', 'Hemalatha', 'Sri', 'Daniel', 'Saul', 'Santosh', 'Humaira', 'Alex Torres', 'Aboma', 'Helen', 'Synquis'];

const getNameButton = document.getElementById('nameBtn');
const clearButton = document.getElementById('clearBtn');
const namesList = document.getElementById('classList');
const soundEls = document.getElementsByTagName('audio');

let myInterval;

// Function clearing name from list div

const clearBox = () => {
    namesList.innerHTML = ' ';
};

// function to run infinitely thru names
const start = () => {
  if (myInterval) {
    clearInterval(myInterval);
    myInterval = 0;
    soundEls[0].pause();
    // soundEl.current.pause();
    return;
  }
//   soundEl.current.play();
  generateRandomName();
};

// Function creating list item as random name is generated

const generateRandomName = () => {
    // clearBox(); // Clears name before delivering new name

    myInterval = setInterval(() => {
        clearBox();
        soundEls[0].play();
        let randomName = names[Math.floor(Math.random() * names.length)];
        let listItem = document.createElement("li");
        listItem.id = 'randomName'
        listItem.innerHTML = randomName // Delivers a random name
        namesList.appendChild(listItem);
    }, 150);

};

getNameButton.onclick = start;

clearButton.onclick = clearBox;
