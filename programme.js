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

//prints the computer's choice to the console.
console.log(getComputerChoice());