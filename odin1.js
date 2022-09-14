let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();


function getComputerChoice(computerSelection) {
	let selections = ["rock", "paper", "scissors"];
	let random = Math.floor(Math.random() * selections.length);
	let randomSelection = selections[random];
	computerSelection = randomSelection;
	//console.log(typeof computerSelection);
    console.log(computerSelection);
}

function getPlayerChoice(playerSelection) {
	let askPlayer = prompt("Rock, Paper or Scissors?");
	playerSelection = askPlayer.toLowerCase();
	//console.log(typeof playerSelection);
}
function playRound(playerSelection, computerSelection) {
	
    if (playerSelection === "rock" && computerSelection ==="scissors") {
	    console.log("You win! Rock beats scissors");
	}
	
    else if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock");
    }

    else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper");
    }

    else if (computerSelection === "scissors" && playerSelection === "paper") {
		console.log("You lose! Scissors beats paper");
	}

    else if (computerSelection === "rock" && playerSelection === "paper") {
		console.log("You win! Paper beats rock");
	}

    else if (computerSelection === "rock" && playerSelection === "scissors") {
		console.log("You lose! Rock beats scissors");
	}

    // else if(playerSelection === computerSelection) {
    //     alert("It's a tie!");
    // }

};

playRound();