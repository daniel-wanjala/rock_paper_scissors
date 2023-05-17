// Function to get the computer's choice
const getComputerChoice = () => {
	const choices = ['Rock', 'Paper', 'Scissors'];
	const random = Math.floor(Math.random() * choices.length);
	return choices[random];
};

// Function to play a single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		return `You win! ${playerSelection} beats ${computerSelection}.`;
	} else {
		return `You lose! ${computerSelection} beats ${playerSelection}.`;
	}
};

// Function to play the game
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
    const computerSelection = getComputerChoice();

    console.log(`Round ${round}:`);
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith('You win')) {
      playerScore++;
    } else if (result.startsWith('You lose')) {
      computerScore++;
    }
  }

  console.log('Game over!');
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log('Congratulations! You won the game!');
  } else if (playerScore < computerScore) {
    console.log('Sorry, you lost the game.');
  } else {
    console.log("It's a tie game.");
  }
}

game();

