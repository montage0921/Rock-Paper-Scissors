//querySelector
const body = document.querySelector(`body`);
const btn = document.querySelector(`.playerBtn`);
const result = document.querySelector(`.result`);
const playerScore = document.querySelector(`.playerScore span`);
const computerScore = document.querySelector(`.computerScore span`);
const winSound = document.querySelector("#win");
const loseSound = document.querySelector(`#lose`);
const playAgainBtn = document.querySelector(`.playagain`);
let popup = ``;

/////////////////////////////////////////

//Game Logic
const rockPaperScissor = [`rock`, `paper`, `scissor`];

function getComputerChoice() {
  const i = Math.floor(Math.random() * 3);
  return rockPaperScissor[i];
}

//Perform one single game
function playRound(player, computer) {
  //guard clause
  if (player !== `rock` && player !== `paper` && player !== `scissor`) return;

  if (player === computer) return `Tie Game 🟰`;
  else if (player === `rock`) {
    return computer === `paper`
      ? `You Lose! Paper beats Rock 🖐`
      : `You Win! Rock beats Scissor 👊🏻`;
  } else if (player === `paper`) {
    return computer === `rock`
      ? `You Win! Paper beats Rock 🖐`
      : `You Lose! Scissor beats paper ✌🏿`;
  } else if (player === `scissor`) {
    return computer === `rock`
      ? `You Lose! Rock beats Scissor 👊🏻 `
      : `You Win! Scissor beats paper ✌🏿`;
  }
}

let playerWin = 0,
  computerWin = 0,
  round = 0;

function game1(e) {
  round++;

  const playerChoice = e.target.className;
  const computerChoice = getComputerChoice();

  const computerBtn = document.querySelector(`.computerBtn .${computerChoice}`);

  const game = playRound(playerChoice, computerChoice);

  result.textContent = game;

  if (game.indexOf(`Win`) > -1) playerWin++;
  else if (game.indexOf(`Lose`) > -1) computerWin++;

  playerScore.textContent = playerWin;
  computerScore.textContent = computerWin;

  if (+playerScore.textContent === 5) {
    let popupHTML = `   <div class="popup">
    <div class="overlay"></div>
    <div class="content">
      <h1 style="margin: 0px">Victory🏆🏆🏆</h1>
      <h2 style="margin: 0px">You won after ${round} rounds</h2>
      <button class="playagain">Play Again!</button>
    </div>
  </div>`;

    body.insertAdjacentHTML(`beforeend`, popupHTML);

    winSound.play();

    const playAgainBtn = document.querySelector(`.playagain`);
    popup = document.querySelector(`.popup`);

    playAgainBtn.addEventListener(`click`, clear);
  }

  if (+computerScore.textContent === 5) {
    loseSound.play();

    let popupHTML = `  <div class="popup">
    <div class="overlay"></div>
    <div class="content">
      <h1 style="margin: 0px">Defeat💩💩💩</h1>
      <h2 style="margin: 0px">You lost after ${round} rounds</h2>
      <button class="playagain">Play Again!</button>
    </div>
  </div>`;

    body.insertAdjacentHTML(`beforeend`, popupHTML);

    loseSound.play();

    const playAgainBtn = document.querySelector(`.playagain`);

    popup = document.querySelector(`.popup`);

    playAgainBtn.addEventListener(`click`, clear);
  }
}

function clear(e) {
  body.removeChild(popup);
  playerWin = 0;
  computerWin = 0;
  result.textContent = ``;
  round = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}

//////////////////////////////////////////////
//addEventListener
btn.addEventListener(`click`, game1);
