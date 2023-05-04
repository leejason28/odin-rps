const moves = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    return moves[getRandomInt(3)]

}

function getRandomInt(max) {

    return Math.floor(Math.random() * max)

}

function playRound(playerSelection, computerSelection) {
    let playerMove = checkMove(playerSelection)
    let computerMove = checkComp(computerSelection)
    let ret = "Enter a valid move!"
    if (playerMove[0]) {
        if (playerMove[1] == computerMove) {
            ret = "You tied! Try again."
        } else if (((playerMove[1] - computerMove) == -1) || ((playerMove[1] - computerMove) == 2)) {
            ret = `You lose! ${computerSelection} beats ${playerSelection}`
            computerScore++;
        } else {
            ret = `You win! ${playerSelection} beats ${computerSelection}`
            playerScore++;
        }
    }

    if (playerScore==5) {
        results.textContent = "You win. Congrats!"
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore==5) {
        results.textContent = "Computer wins. You lose."
        playerScore = 0;
        computerScore = 0;
    } else {
        results.textContent = `${ret}
        Player has ${playerScore} points. Computer has ${computerScore} points.`
    }

}

function checkComp(computerSelection) {
    for (let i=0; i<3; i++) {
        if (computerSelection.toLowerCase() === moves[i]) {
            return i
        }
    }
}

function checkMove(playerSelection) {
    for (let i=0; i<3; i++) {
        if (moves[i].toLowerCase() === playerSelection.toLowerCase()) {
            return [true, i]
        }
    }
    return [false, 10]
}

const container = document.querySelector('#container');

const rockButton = document.createElement('button');
rockButton.textContent = "ROCK"
rockButton.addEventListener('click', () => {playRound('rock', getComputerChoice())});

const paperButton = document.createElement('button');
paperButton.textContent = "PAPER"
paperButton.addEventListener('click', () => {playRound('paper', getComputerChoice())});

const scissorButton = document.createElement('button');
scissorButton.textContent = "SCISSORS"
scissorButton.addEventListener('click', () => {playRound('scissors', getComputerChoice())});

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorButton);


const results = document.createElement('div');
container.appendChild(results)