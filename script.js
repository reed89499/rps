//init variable userInput type string
let userInput;

//init variable computerDecision type float
let computerDecision;

let result;
//Create function to ask for user input and typecast as string
//Generate computer decision between 1 and 100
//If computer decision is between 1 and 33, rock, else if between 34 and 66, scissors, else paper
function gatherInput(){
    userInput = prompt('Please Enter rock, paper or scissors');
    userInput = userInput.toLowerCase();
    return userInput;
}

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
    console.log(`You entered ${userInput}. The computer chose ${computerDecision}.`)
    if (userInput == computerDecision) {
        result = 'You tied!';
    } else if (userInput == 'rock' && computerDecision == 'scissors' || userInput == 'paper' && computerDecision == 'rock' || userInput == 'scissors' && computerDecision == 'paper') {
        result = 'You win!';
    } else {
        result = 'You lost.';
    }
    console.log(result);
}
gatherInput();
generateComputerDecision();
playGame();
