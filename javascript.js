console.log("Hello World!");

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3) + 1
    if (randomNumber === 1) {
        result = "Rock"
    }
    else if (randomNumber === 2){
        result = "Paper"
    }
    else {
        result = "Scissors"
    }
    return result

}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    return playerSelection, computerSelection

}