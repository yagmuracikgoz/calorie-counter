const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;


function cleanInputString(str){
    // step 27 for seeing if it works fine -- console.log("original string: ",str);
    const regex = /[+-\s]/g; //\s boşluk karakteri yapar
    return str.replace(regex, '');
}
function isInvalidInput(str) {
    const regex = /\d+e\d+/i; // \d [0-9] karakterlerinin kısaltması 
    return str.match(regex);
}