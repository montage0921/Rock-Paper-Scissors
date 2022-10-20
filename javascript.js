//querySelector
const body = document.querySelector(`body`);
const btn = document.querySelector(`.playerBtn`);
const result = document.querySelector(`.result`);
const playerScore = document.querySelector(`.playerScore span`);
const computerScore = document.querySelector(`.computerScore span`);
const winSound = document.querySelector("#win");
const loseSound = document.querySelector(`#lose`);

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
    const popupWindow = `  <div class="popup">
    <div class="overlay"></div>
    <div class="content">
      <h1>Victory!!!!🏆</h1>
      <button class="playagain">Play Again!</button>
    </div>
  </div>`;

    body.insertAdjacentHTML(`beforeend`, popupWindow);

    winSound.play();
  }

  if (+computerScore.textContent === 5) {
    loseSound.play();

    const popupWindow = `  <div class="popup">
    <div class="overlay"></div>
    <div class="content">
      <h1>Defeat!!!!💩</h1>
      <button class="playagain">Play Again!</button>
    </div>
  </div>`;

    body.insertAdjacentHTML(`beforeend`, popupWindow);

    loseSound.play();
  }
}

function clear() {
  (playerWin = 0), (computerWin = 0), (round = 0);
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}

//////////////////////////////////////////////
//addEventListener
btn.addEventListener(`click`, game1);
