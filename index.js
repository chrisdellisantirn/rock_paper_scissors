const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const roboPick = document.getElementById("robo-pick");
const playerPick = document.getElementById("player-pick");
const result = document.getElementById("instruct");
const explainer = document.getElementById("detail");
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");

rockButton.addEventListener("click", () => playGame("Rock"));
paperButton.addEventListener("click", () => playGame("Paper"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));
restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", closeEndgameModal);

let playerScore = 0;
let computerScore = 0;

function playGame(userInput) {
  if (playerScore == 5 || computerScore == 5) {
    openEndgameModal();
    setFinalMessage();
  } else {
    let computerSelection = getComputerChoice();
    let outcome = playRound(userInput, computerSelection);
    updateChoice(computerSelection, userInput);
    if (outcome == "You Lost") {
      incrementScore(computerScoreSpan);
      result.textContent = `${outcome}`;
      explainer.textContent = `${computerSelection} beats ${userInput}`;
      computerScore++;
    } else if (outcome == "You Won!") {
      incrementScore(playerScoreSpan);
      result.textContent = `${outcome}`;
      explainer.textContent = `${userInput} beats ${computerSelection}`;
      playerScore++;
    } else {
      result.textContent = `${outcome}`;
      explainer.textContent = "Try Again!";
    }
    if (playerScore == 5 || computerScore == 5) {
      openEndgameModal();
      setFinalMessage();
    }
  }
}

function playRound(player, computer) {
  if (player == computer) {
    return "DRAW";
  } else if (player == "Rock" && computer == "Paper") {
    return "You Lost";
  } else if (player == "Rock" && computer == "Scissors") {
    return "You Won!";
  } else if (player == "Paper" && computer == "Rock") {
    return "You Won!";
  } else if (player == "Paper" && computer == "Scissors") {
    return "You Lost";
  } else if (player == "Scissors" && computer == "Rock") {
    return "You Lost";
  } else if (player == "Scissors" && computer == "Paper") {
    return "You Won!";
  }
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  pick = choices[Math.floor(Math.random() * choices.length)];
  return pick;
}

function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1;
}

function updateChoice(pick1, pick2) {
  switch (pick1) {
    case "Rock":
      roboPick.textContent = "🗿";
      break;
    case "Paper":
      roboPick.textContent = "📰";
      break;
    case "Scissors":
      roboPick.textContent = "✂️";
      break;
  }
  switch (pick2) {
    case "Rock":
      playerPick.textContent = "🗿";
      break;
    case "Paper":
      playerPick.textContent = "📰";
      break;
    case "Scissors":
      playerPick.textContent = "✂️";
      break;
  }
}

function openEndgameModal() {
  endgameModal.classList.add("active");
  overlay.classList.add("active");
}
function closeEndgameModal() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}
function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = "You won!")
    : (endgameMsg.textContent = "You lost...");
}
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  result.textContent = "Choose Your Weapon";
  explainer.textContent = "First to Five Wins";
  playerScoreSpan.textContent = "0";
  computerScoreSpan.textContent = "0";
  playerPick.textContent = "❔";
  roboPick.textContent = "🖥️";
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}
