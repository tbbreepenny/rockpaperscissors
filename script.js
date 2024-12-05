let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3)) + 1;
    if (randomNumber === 1) {
        return "ROCK";
    } else if (randomNumber === 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function displayResult(message) {
    document.getElementById("roundResult").textContent = message;
}

function displayScore() {
    document.getElementById("score").textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
}

function announceWinner(winner) {
    const resultMessage = winner === "human" ? "You win the game!" : "Computer wins the game!";
    document.getElementById("roundResult").textContent = resultMessage;
    document.getElementById("score").textContent = `Final Score: Your Score: ${humanScore} | Computer Score: ${computerScore}`;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);

    let roundResult = '';

    if (humanChoice === computerChoice) {
        roundResult = "It's a Draw !!";
    } else if (humanChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            computerScore++;
            roundResult = `You lose! ${computerChoice} beats ${humanChoice}!`;
        } else {
            humanScore++;
            roundResult = `You win! ${humanChoice} beats ${computerChoice}!`;
        }
    } else if (humanChoice === "PAPER") {
        if (computerChoice === "SCISSORS") {
            computerScore++;
            roundResult = `You lose! ${computerChoice} beats ${humanChoice}!`;
        } else {
            humanScore++;
            roundResult = `You win! ${humanChoice} beats ${computerChoice}!`;
        }
    } else if (humanChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            computerScore++;
            roundResult = `You lose! ${computerChoice} beats ${humanChoice}!`;
        } else {
            humanScore++;
            roundResult = `You win! ${humanChoice} beats ${computerChoice}!`;
        }
    } else {
        roundResult = "Invalid Entry";
    }

    // Update the DOM with round result and score
    displayResult(roundResult);
    displayScore();

    // Check if either player has won the game
    if (humanScore >= 5) {
        announceWinner("human");
        disableButtons();
    } else if (computerScore >= 5) {
        announceWinner("computer");
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorsBtn").disabled = true;
}

document.getElementById("rockBtn").addEventListener("click", () => playRound("ROCK"));
document.getElementById("paperBtn").addEventListener("click", () => playRound("PAPER"));
document.getElementById("scissorsBtn").addEventListener("click", () => playRound("SCISSORS"));
