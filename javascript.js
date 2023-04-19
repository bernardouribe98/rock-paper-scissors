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
    playerSelection = playerSelection.toString()
    computerSelection = computerSelection.toString()
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if ((playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") && (computerSelection === "rock" || computerSelection === "paper" || computerSelection === "scissors")){
        if (playerSelection === computerSelection){
            result = "There is a draw!"
        }
        else {
            if (playerSelection === "rock" && computerSelection === "paper"){
                result = "You lost! Paper beats rock."
            }
            else if (playerSelection === "rock" && computerSelection === "scissors"){
                result = "You won! Rock beats scissors."
            }
            else if (playerSelection === "paper" && computerSelection === "rock"){
                result = "You won! Paper beats rock."
            }
            else if (playerSelection === "paper" && computerSelection === "scissors"){
                result = "You lost! Scissors beats paper."
            }
            else if (playerSelection === "scissors" && computerSelection === "rock"){
                result = "You lost Rock beats scissors."
            }
            else if (playerSelection === "scissors" && computerSelection === "paper"){
                result = "You won! Scissors beats paper."
            }
        }
    }
    else {
        result = "not OK"
    }
    return {playerSelection, computerSelection, result}


}