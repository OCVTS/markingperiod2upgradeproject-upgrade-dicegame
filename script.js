// script.js
let playerRoll1 = 0;
let computerRoll1 = 0;
let playerRoll2 = 0;
let computerRoll2 = 0;
let playerTotal = 0;
let computerTotal = 0;
let playerScore = 0;
let computerScore = 0;
let playerName = document.getElementById('playerName').value; // Initialize player name
let computerName = document.getElementById('computerName').value; // Initialize computer name

document.getElementById('rollButton').addEventListener('click', rollDice);
const changePlayerNameButton = document.getElementById('changePlayerNameButton');
const playerNameInput = document.getElementById('playerName');

const changeComputerNameButton = document.getElementById('changeComputerNameButton');
const computerNameInput = document.getElementById('computerName');


/*********** function to generate random dice rolls ***************/
function rollDice() {
    playerRoll1 = Math.floor(Math.random() * 6) + 1;
    playerRoll2 = Math.floor(Math.random() * 6) + 1;
    computerRoll1 = Math.floor(Math.random() * 6) + 1;
    computerRoll2 = Math.floor(Math.random() * 6) + 1;
    calculateScore();
}

/*********** function to calculate the result, determine winner, and update the score ***************/
function calculateScore() {
    playerTotal = playerRoll1 + playerRoll2;
    computerTotal = computerRoll1 + computerRoll2;

    if (playerTotal > computerTotal) {
        document.getElementById("winner").innerHTML = `${playerName} wins!`;
        playerScore += 1;

    } else if (playerTotal < computerTotal) {
        document.getElementById("winner").innerHTML = `${computerName} wins!`; // Use computerName
        computerScore += 1;

    } else if (playerTotal === computerTotal) {
        document.getElementById("winner").innerHTML = `It's a tie!`;

    } else {
        document.getElementById("winner").innerHTML = 'There is an error!';
    }

    displayResults()
}

function displayResults() {
    document.getElementById("playerDice").innerHTML = `${playerName} rolled a ${playerRoll1} and a ${playerRoll2}`;
    document.getElementById("computerDice").innerHTML = `${computerName} rolled a ${computerRoll1} and a ${computerRoll2}`; // Use computerName
    document.getElementById("playerTotal").innerHTML = `${playerName} total roll: ${playerTotal}`;
    document.getElementById("computerTotal").innerHTML = `${computerName} total roll: ${computerTotal}`; // Use computerName
    document.getElementById("playerScore").innerHTML = `${playerName} score: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `${computerName} score: ${computerScore}`; // Use computerName

}

// how to change the player's name
changePlayerNameButton.addEventListener('click', () => {
    const newName = playerNameInput.value.trim();
    if (newName) {
        playerName = newName;
        playerNameInput.value = '';
    } else {
        alert("Please enter a valid name.");
    }
});

// how to change the computer's name
changeComputerNameButton.addEventListener('click', () => {
    const newName = computerNameInput.value.trim();
    if (newName) {
        computerName = newName;
        computerNameInput.value = '';
    } else {
        alert("Please enter a valid name.");
    }
});