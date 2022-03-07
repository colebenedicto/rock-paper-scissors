function computerPlay(){
    const gameValues = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * gameValues.length);
    return gameValues[random];
}

function playRound(playerSelection, computerSelection) {
    let tie = `It's a tie! You both got ${computerSelection}.`;
    let lose = `You lose. ${computerSelection} beats ${playerSelection}.`;
    let win = `You win! ${playerSelection} beats ${computerSelection}.`;

    switch(playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                return tie;
            } else if (computerSelection == "paper") {
                return lose;
            } else if (computerSelection == "scissors") {
                return win;
            }
        case "paper":
            if (computerSelection == "rock") {
                return win;
            } else if (computerSelection == "paper") {
                return tie;
            } else if (computerSelection == "scissors") {
                return lose;
            }
        case "scissors":
            if (computerSelection == "rock") {
                return lose;
            } else if (computerSelection == "paper") {
                return win;
            } else if (computerSelection == "scissors") {
                return tie;
            }
    }
}

let playerPick = "Paper";

const playerSelection = playerPick.toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));