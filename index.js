let userScore = 0;
let computerScore = 0;
let round = 1;

for (let i = 0; i < 5; i++) {
  let playerSelection = prompt("Pick Rock, Paper, or Scissors!").toLowerCase();
  let computerSelection = getComputerChoice();
  let outcome = playRound(playerSelection, computerSelection);
  if (outcome == "You lost") {
    alert(`${outcome} round ${round}.`);
    round += 1;
    computerScore += 1;
  } else if (outcome == "You won") {
    alert(`${outcome} round ${round}!`);
    round += 1;
    userScore += 1;
  } else {
    alert(`Round ${round} was a ${outcome}.`);
    round += 1;
  }
}

if (userScore < computerScore) {
  alert("😂 you lost to a machine. Better luck next time!");
} else if (userScore > computerScore) {
  alert("You defeated the Superbot! 🤖");
}

function playRound(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (player == "rock" && computer == "paper") {
    return "You lost";
  } else if (player == "rock" && computer == "scissors") {
    return "You won";
  } else if (player == "paper" && computer == "rock") {
    return "You won";
  } else if (player == "paper" && computer == "scissors") {
    return "You lost";
  } else if (player == "sciccors" && computer == "rock") {
    return "You lost";
  } else if (player == "sciccors" && computer == "paper") {
    return "You won";
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  pick = choices[Math.floor(Math.random() * choices.length)];
  return pick;
}
