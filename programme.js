// the game will be played against the computer. This code bit implements that.
function getComputerChoice() {
    //gets a random number between 0 and 2(inclusive)
    let random = Math.round(Math.random() * 2);

    //assigns a string value to the random number and returns it
    if (random == 0) 
    {
        return "rock";
    }
    else if (random == 1) 
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }

}


//This bit of code collects the players choice
function getPlayerChoice() {
   let playerChoice = prompt("Please enter your choice of rock, paper or scissors ");
   return playerChoice.toLowerCase();
}


//Initialising score variables
let playerScore = 0;
let computerScore = 0;

//this is the logic for a single round
function playRound(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice == "rock" && getComputerChoice == "paper")
    {
        console.log("You lose! Paper beats Rock");
        computerScore ++;
    }

    else if (getPlayerChoice == "rock" && getComputerChoice == "scissors")
    {
        console.log("You win! Rock beats Scissors");
        playerScore ++;
    }

    else if (getPlayerChoice == "paper" && getComputerChoice == "rock")
    {
        console.log("You win! Paper beats Rock");
        playerScore ++;
    }

    else if (getPlayerChoice == "paper" && getComputerChoice == "scissors")
    {
        console.log("You lose! Scissors beats Paper");
        computerScore ++;
    }

    else if (getPlayerChoice == "scissors" && getComputerChoice == "rock")
    {
        console.log("You lose! Rock beats Scissors");
        computerScore ++;
    }

    else if (getPlayerChoice == "scissors" && getComputerChoice == "paper")
    {
        console.log("You win! Scissors beats Paper");
        playerScore ++;
    }

    else
    {
        console.log("It's a tie!");

    }
}

//This bit of code runs the game for 3 rounds
for (let i = 0; i < 3; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
}

//display scores.
console.log("Your score: " + playerScore);
console.log("Computer's score: " + computerScore);