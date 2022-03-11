/*
1. Make a function that randomizes 'computer pick' and returns that pick
2. Set a variable that stores 'players pick'. Make sure it is case-insensitive
3. Make a function that takes the 'computer pick' and the 'player pick' and compares them and then returns the winner
4. Make a function that calls #3 function, tracks score and declare the player that reaches 5 points first as the winner
*/

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

game();

function computerPlay(){
    const gameValues = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * gameValues.length);
    return gameValues[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "It's a tie";
        return;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++;
        roundWinner = "Player wins"
        return;
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ) {
        computerScore++;
        roundWinner = "Computer wins"
        return;
    }
}

function game() {
    while (Math.max(playerScore, computerScore) < 5) {
        let playerSelection = prompt("Let's play Rock, Paper, Scissors!").toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`${roundWinner} | You: ${playerScore} Computer: ${computerScore}`);
    }
    playerScore > computerScore ? console.log("You win!") : console.log("You lose.");
} 