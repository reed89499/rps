//init variable userInput type string
let userInput;

//init variable computerDecision type float
let computerDecision;

let result;
//Create function to ask for user input and typecast as string
//Generate computer decision between 1 and 100
//If computer decision is between 1 and 33, rock, else if between 34 and 66, scissors, else paper

let playerWins = 0;
let computerWins = 0;

const div = document.querySelector("div");

const playerwins = document.createElement("h1");
const computerwins = document.createElement("h1");

const ul = document.querySelector("ul");
const rockBtn = document.createElement("button");
const scissorBtn = document.createElement("button");
const paperBtn = document.createElement("button");

const playerWinsMessage = document.createElement("h1");
const computerWinsMessage = document.createElement("h1");

playerWinsMessage.textContent = "Congrats, you won! Click a button to play again";
computerWinsMessage.textContent = "Sorry, you lost! Click a button to play again";

rockBtn.textContent = "Rock";
scissorBtn.textContent = "Scissors";
paperBtn.textContent = "Paper";

playerwins.textContent = "Player wins = " + playerWins;
computerwins.textContent = "Computer wins = " + computerWins;

ul.appendChild(rockBtn);
ul.appendChild(scissorBtn);
ul.appendChild(paperBtn);

div.appendChild(playerwins);
div.appendChild(computerwins);

function generateComputerDecision() {
    computerDecision = Math.floor(Math.random() * 100 + 1);
    if (computerDecision < 34) {
        computerDecision = "rock"
    } else if (computerDecision > 33 && computerDecision < 67) {
        computerDecision = "paper";
    } else {
        computerDecision = "scissors";
    }
    return computerDecision;
}

//Create function to do the following
//Compare user input to computer decision and declare winner

function playGame() {
    generateComputerDecision()
    console.log(`You entered ${userInput}. The computer chose ${computerDecision}.`)
    if (userInput == computerDecision) {
        result = 'You tied!';
    } else if (userInput == 'rock' && computerDecision == 'scissors' || userInput == 'paper' && computerDecision == 'rock' || userInput == 'scissors' && computerDecision == 'paper') {
        result = 'You win!';
        div.removeChild(playerwins);
        playerWins += 1;
        playerwins.textContent = "Player wins = " + playerWins;
        div.appendChild(playerwins);
    } else {
        result = 'You lost.';
        div.removeChild(computerwins);
        computerWins += 1;
        computerwins.textContent = "Computer wins = " + computerWins;
        div.appendChild(computerwins);
    }

    if (playerWins == 5) {
        div.appendChild(playerWinsMessage);
        playerWins = 0;
        computerWins = 0;
    } else if (computerWins == 5) {
        div.appendChild(computerWinsMessage);
        playerWins = 0;
        computerWins = 0;
    }

    console.log(result);
}



rockBtn.addEventListener("click", () => {
    userInput = "rock";
});

scissorBtn.addEventListener("click", () => {
    userInput = "scissors";
});

paperBtn.addEventListener ("click", () => {
    userInput = "paper";
});

div.addEventListener("click", playGame);