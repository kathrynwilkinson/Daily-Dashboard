const names = ['Alyssa', 'Raven', 'Yannick', 'Anthony T.', 'Martin', 'Alexandra', 'Hector', 'Perom', 'Kaleab', 'Willis', 'Anthony B.', 'Ghislaine', 'Jennet', 'Vishva', 'Sara', 'Noah', 'Iryna', 'Jon', 'Phillip', 'Kathryn'];

const getNameButton = document.getElementById('randomNamesButton');
const clearButton = document.getElementById('clearButton');
const namesList = document.getElementById('namesList');


// Function clearing name from list div

const clearBox = () => {
    namesList.innerHTML = '';
};

// Function creating list item as random name is generated

const generateRandomName = () => {
    clearBox(); // Clears name before delivering new name

    let randomName = names[Math.floor(Math.random() * names.length)];

    let listItem = document.createElement("li");
    listItem.id = 'nameListItem'
    listItem.innerHTML = randomName // Delivers a random name
    namesList.appendChild(listItem);

};

getNameButton.onclick = generateRandomName;

clearButton.onclick = clearBox;