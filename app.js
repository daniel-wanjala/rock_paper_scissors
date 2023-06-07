function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore(playerScore, computerScore) {
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function updateRoundResult(result) {
  const roundResultElement = document.getElementById("round-result");
  roundResultElement.textContent = result;
}

function checkGameEnd(playerScore, computerScore) {
  if (playerScore === 5) {
    return "Congratulations! You won the game!";
  } else if (computerScore === 5) {
    return "Sorry, you lost the game. Better luck next time!";
  } else {
    return null;
  }
}

function buttonClickHandler(e) {
  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  updateRoundResult(result);

  let playerScore = parseInt(
    document.getElementById("player-score").textContent
  );
  let computerScore = parseInt(
    document.getElementById("computer-score").textContent
  );

  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }

  updateScore(playerScore, computerScore);

  const gameEndResult = checkGameEnd(playerScore, computerScore);
  if (gameEndResult) {
    updateRoundResult(gameEndResult);
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", buttonClickHandler);
paperButton.addEventListener("click", buttonClickHandler);
scissorsButton.addEventListener("click", buttonClickHandler);

