var options = ['r','p','s'];
var userInput;
var computerInput;

//scoresheet
var scores = [0, 0, 0];

var outcomes = {
    rock: {
        rock: 'tie',
        paper: 'loss',
        scissors: 'win'
    },
    paper: {
        rock: 'win',
        paper: 'tie',
        scissors: 'loss'
    },
    scissors: {
        rock: 'loss',
        paper: 'win',
        scissors: 'tie'
    }
}

//get user input
function getUserInput() {
    userInput = prompt('Please enter r, p, or s');
    return;
}

//computer random generated input
function getComputerInput() {
    computerInput = options[Math.floor(Math.random() * 3)];
    return;
}

function displayInputs() {
    alert('You chose' + userInput + '.' + 'The computer chose' + computerInput);
}

//check who won based on user and computer input
function whoWon() {
    if (outcomes[userInput][computerInput] = 'win'){
        win++;
    }
    else if (outcomes [userInput][computerInput] = 'loss'){
        loss++;
    }
    else{
        tie++
    }
}

function displayResults() {
    alert('Wins' + win + '\n Loss' + loss + '\n Tie' + tie);
}

function continueGame() {
    keepPlaying = confirm('Do you want to keep playing?');
}

function executeGame() {
    while(continueGame){
        getUserInput();
        getComputerInput();
        whoWon();
        displayResults();
        keepPlaying();
    }
}

executeGame();
