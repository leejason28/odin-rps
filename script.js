const moves = ["rock", "paper", "scissors"]

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
        } else {
            ret = `You win! ${playerSelection} beats ${computerSelection}`
        }
    }
    return ret

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

function game() {
    for (let i=0; i<5; i++) {
        let playerS = prompt("What's your move?")
        console.log(playRound(playerS, getComputerChoice()))
    }
}

/*
const pS = "scissors"
const cS = getComputerChoice()
console.log(cS)
console.log(playRound(pS, cS))
*/

console.log(game())