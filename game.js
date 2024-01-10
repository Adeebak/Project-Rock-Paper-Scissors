const container = document.createElement('div');
const rockbtn = document.createElement('button');
const paperbtn = document.createElement('button');
const scissorbtn = document.createElement('button');
const results = document.createElement('div');
const score = document.createElement('div');

rockbtn.textContent = 'Rock';
paperbtn.textContent = 'paper';
scissorbtn.textContent = 'scissor';

document.body.appendChild(container);
container.appendChild(rockbtn);
container.appendChild(paperbtn);
container.appendChild(scissorbtn);
container.appendChild(results);
container.appendChild(score);

let scorePlayer = 0;
let scoreComputer = 0;

const options = [rockbtn, paperbtn, scissorbtn];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if (
        playerSelection === rockbtn && computerSelection === scissorbtn ||
        playerSelection === scissorbtn && computerSelection === paperbtn ||
        playerSelection === paperbtn && computerSelection === rockbtn
    ) {
        return "player";
    }
    else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();
    const result = checkWinner(playerSelection, computerSelection);

    if (result === "player") {
        scorePlayer++;
    }
    else if (result === "computer") {
        scoreComputer++;
    }
    updateUi(result, playerSelection, computerSelection);
}

function updateUi(result, playerSelection, computerSelection) {
    results.innerHTML = result === 'Tie' ? 'Its a Tie!' : result === 'player' ? `You Win! ${playerSelection.textContent} beats ${computerSelection.textContent}` : `You Lose! ${computerSelection.textContent} beats ${playerSelection.textContent}`;
    score.innerHTML = ` Score: Player ${scorePlayer} - ${scoreComputer} Computer`;

    if (scorePlayer === 5 || scoreComputer === 5) {
        announceWinner();
    }
}

function announceWinner() {
    results.innerHTML = scorePlayer === 5 ? 'Congratulations! You are the winner!' : 'Computer wins. Better luck next time!';
}

rockbtn.addEventListener('click', () => playRound(rockbtn, getComputerChoice()));
paperbtn.addEventListener('click', () => playRound(paperbtn, getComputerChoice()));
scissorbtn.addEventListener('click', () => playRound(scissorbtn, getComputerChoice()));
