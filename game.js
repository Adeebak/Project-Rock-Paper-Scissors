
console.log("Welcome");

const options = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        playerSelection == "rock" && computerSelection == "scissor" ||
        playerSelection == "scissor" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock"
    ) {
        return "player";
    }
    else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {

    const result = checkWinner(playerSelection, computerSelection);

    if (result == "Tie") {
        return " It Is A Tie "
    }
    else if (result == "player") {
        return `You Win! ${playerSelection} beats ${computerSelection} `
    }
    else {
        return ` You Lose! ${computerSelection} beats ${playerSelection} `
    }

}

function getPlayerChoice() {

    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt(" Rock Paper Scissor ");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput == true;
            return choiceInLower;
        }
    }

}

function game() {

    let scorePlayer = 0;
    let scoreComputer = 0;


    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        console.log("------------");

        if (checkWinner(playerSelection, computerSelection) == "player") {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "computer") {
            scoreComputer++;
        }
    }

    if (scorePlayer > scoreComputer) {
        console.log(" The Player Was The Winner ");
    }
    else if (scorePlayer < scoreComputer) {
        console.log(" The Computer Was The Winner ");
    }
    else {
        console.log(" It Is A Tie ");
    }
}

game();
