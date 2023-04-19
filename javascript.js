console.log("Hello World!");

function getComputerChoice() {
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

function playRound(playerSelection, computerSelection) {
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
                result = "You lost! Rock beats scissors."
            }
            else if (playerSelection === "scissors" && computerSelection === "paper"){
                result = "You won! Scissors beats paper."
            }
        }
    }
    else {
        result = "Input not valid."
    }
    return result

}

function game() {
    //First round
    let playerScore = 0
    let computerScore = 0
    let computerSelection = getComputerChoice()
    let playerSelection = prompt("Rock, paper, or scissors?")
    let resultRound = playRound(playerSelection, computerSelection)
    if (resultRound.slice(0,7) === "You won") {
        playerScore++
    }
    else if (resultRound.slice(0,8) === "You lost") {
        computerScore++
    }
    console.log(resultRound,"Score: " + "Player "+ playerScore + " Computer "+ computerScore)

    //Second round
    computerSelection = getComputerChoice()
    playerSelection = prompt("Rock, paper, or scissors?")
    resultRound = playRound(playerSelection, computerSelection)
    if (resultRound.slice(0,7) === "You won") {
        playerScore++
    }
    else if (resultRound.slice(0,8) === "You lost") {
        computerScore++
    }
    console.log(resultRound,"Score: " + "Player "+ playerScore + " Computer "+ computerScore)
    
    //Third round
    computerSelection = getComputerChoice()
    playerSelection = prompt("Rock, paper, or scissors?")
    resultRound = playRound(playerSelection, computerSelection)
    if (resultRound.slice(0,7) === "You won") {
        playerScore++
    }
    else if (resultRound.slice(0,8) === "You lost") {
        computerScore++
    }
    console.log(resultRound,"Score: " + "Player "+ playerScore + " Computer "+ computerScore)

    //Fourth round
    computerSelection = getComputerChoice()
    playerSelection = prompt("Rock, paper, or scissors?")
    resultRound = playRound(playerSelection, computerSelection)
    if (resultRound.slice(0,7) === "You won") {
        playerScore++
    }
    else if (resultRound.slice(0,8) === "You lost") {
        computerScore++
    }
    console.log(resultRound,"Score: " + "Player "+ playerScore + " Computer "+ computerScore)
    
    //Fifth round
    computerSelection = getComputerChoice()
    playerSelection = prompt("Rock, paper, or scissors?")
    resultRound = playRound(playerSelection, computerSelection)
    if (resultRound.slice(0,7) === "You won") {
        playerScore++
    }
    else if (resultRound.slice(0,8) === "You lost") {
        computerScore++
    }
    let finalResult = "Score: " + "Player "+ playerScore + " Computer "+ computerScore
    console.log(resultRound,"Score: " + "Player "+ playerScore + " Computer "+ computerScore)
    return finalResult
}