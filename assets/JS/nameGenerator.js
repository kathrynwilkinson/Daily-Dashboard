const names = ['Amina', 'Babajide', 'Kenneth', 'Wayeu', 'Myesha', 'Stteffanny', 'Valentina', 'Victoria', 'Derrick', 'Mesfin', 'Yonatan', 'Catherine', 'Alex Latte', 'Danielle', 'Anthony Lomax', 'Yohannes', 'Mathew Olajide', 'Slav', 'Hemalatha', 'Sri', 'Daniel', 'Saul', 'Santosh', 'Humaira', 'Alex Torres', 'Aboma', 'Helen', 'Synquis'];

const getNameButton = document.getElementById('nameBtn');
const clearButton = document.getElementById('clearBtn');
const namesList = document.getElementById('classList');


// Function clearing name from list div

const clearBox = () => {
    namesList.innerHTML = ' ';
};

// Function creating list item as random name is generated

const generateRandomName = () => {
    clearBox(); // Clears name before delivering new name

    let randomName = names[Math.floor(Math.random() * names.length)];

    let listItem = document.createElement("li");
    listItem.id = 'randomName'
    listItem.innerHTML = randomName // Delivers a random name
    namesList.appendChild(listItem);

};

getNameButton.onclick = generateRandomName;

clearButton.onclick = clearBox;
