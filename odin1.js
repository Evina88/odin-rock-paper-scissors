function getComputerChoice() {
	let selections = ["rock", "paper", "scissors"];
	let random = Math.floor(Math.random() * selections.length);
	return selections[random]; 
}

function getPlayerChoice() {
	return (prompt("Rock, Paper or Scissors?").toLowerCase());
}

function playRound() {
	let computerSelection = getComputerChoice();
	let playerSelection = getPlayerChoice();

	if (
		playerSelection !== "rock" &&
		playerSelection !== "scissors" &&
		playerSelection !== "paper"
	) {
		alert("Wrong input!");
		playRound();
	}
	

	else if (playerSelection === "rock") {
		if (computerSelection === "scissors") {
			console.log("You win! Rock beats scissors");
		} else if (computerSelection === "paper") {
			console.log("You lose! Paper beats rock");
		} else if (computerSelection === "rock") {
			console.log("It's a tie!");
		}
	}

	else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			console.log("You lose! Rock beats scissors");
		} else if (computerSelection === "paper") {
			console.log("You win! Scissors beats paper");
		} else if (computerSelection === "scissors") {
			console.log("It's a tie!");
		}
	} 
	
	else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			console.log("You win! Paper beats rock");
		} else if (computerSelection === "scissors") {
			console.log("You lose! Scissors beats paper");
		} else if (computerSelection === "paper") {
			console.log("It's a tie!");
		}
	}
};

playRound();