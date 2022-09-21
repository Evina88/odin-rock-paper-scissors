function getComputerChoice() {
	let selections = ["rock", "paper", "scissors"];
	let random = Math.floor(Math.random() * selections.length);
	return selections[random]; 
}

function getPlayerChoice() {
	return (prompt("Rock, Paper or Scissors?").toLowerCase());
}

let playerScore = 0;
let computerScore = 0;

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
			playerScore =1;
			computerScore=0;
			return playerScore, computerScore;
			
		} else if (computerSelection === "paper") {
			console.log("You lose! Paper beats rock");
			playerScore =0;
			computerScore=1;
			return playerScore, computerScore;

		} else if (computerSelection === "rock") {
			console.log("It's a tie!");
			playerScore = 0;
			computerScore = 0;
			return playerScore, computerScore;
		}
	}

	else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			console.log("You lose! Rock beats scissors");
			playerScore =0;
			computerScore=1;
			return playerScore, computerScore;

		} else if (computerSelection === "paper") {
			console.log("You win! Scissors beats paper");
			playerScore =1;
			computerScore=0;
			return playerScore, computerScore;

		} else if (computerSelection === "scissors") {
			console.log("It's a tie!");
			playerScore = 0;
			computerScore = 0;
			return playerScore, computerScore;
		}
	} 
	
	else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			console.log("You win! Paper beats rock");
			playerScore =1;
			computerScore=0;
			return playerScore, computerScore;

		} else if (computerSelection === "scissors") {
			console.log("You lose! Scissors beats paper");
			playerScore =0;
			computerScore=1;
			return playerScore, computerScore;

		} else if (computerSelection === "paper") {
			console.log("It's a tie!");
			playerScore = 0;
			computerScore = 0;
			return playerScore, computerScore;
		}
	}
};

let playerTotal = 0;
let computerTotal = 0;

function printWinner() {		
	if (playerTotal > computerTotal) console.log ("You win the 5 round game");

	else if (playerTotal< computerTotal) console.log ("You lose the 5 round game")
	
	else console.log("It's a tie!");
}

function game() {
	
	for (let i = 1; i < 6; i++) {	
		playRound(playerScore, computerScore);
		playerTotal = playerTotal + playerScore;
		computerTotal = computerTotal + computerScore; 
		console.log("Round:" + i +"! " + "Player Score: " + playerTotal + ", " + "Computer Score: " + computerTotal);
	}

	printWinner();
};

game();