function getComputerChoice() {
  const selectionChoice = ["Rock", "Paper", "Scissors"];
  const compChoice = selectionChoice[Math.floor(Math.random() * 3)];
  return compChoice;
}

function getResult(playerChoice, computerChoice) {
  let score = 0;

  if (playerChoice == computerChoice) {
    score = 0;
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    score = 1;
  } else {
    score = -1;
  }
  // return score
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  let resultDiv = document.getElementById("result");

  if (score == 1) {
    resultDiv.innerText = "You Win !";
  } else if (score == -1) {
    resultDiv.innerText = "You Loose.";
  } else {
    resultDiv.innerText = "It's a Draw!";
  }

  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const compChoice = getComputerChoice();
  const score = getResult(playerChoice.value, compChoice);
  showResult(score, playerChoice.value, compChoice);
}

function playGame() {
  let rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton);
  });
  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

function endGame() {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
