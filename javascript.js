////////////querySelector////////////////
const body = document.querySelector(`body`);
const btnPlayer = document.querySelector(`.playerBtn`);
const result = document.querySelector(`.result`);
const playerScore = document.querySelector(`.playerScore span`);
const computerScore = document.querySelector(`.computerScore span`);
const winSound = document.querySelector("#win");
const loseSound = document.querySelector(`#lose`);
const playAgainBtn = document.querySelector(`.playagain`);
let popup = ``;

///////Game Logic(Functions) /////////////

//Function: allow computer get game choices.
//return: a string (`rock`,`paper` or `scissor`)
const rockPaperScissor = [`rock`, `paper`, `scissor`];

function getComputerChoice() {
  const i = Math.floor(Math.random() * 3);
  return rockPaperScissor[i];
}

//Function: Perform one single game
//Arguments:  two strings (`rock`,`paper` or `scissor`)
//return: result sentences
function playRound(player, computer) {
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

//Function: show results and "play again" button on a popup window
//Arguments: true or false
function showPopup(isPlayerWin) {
  const victoryOrDefeat =
    isPlayerWin === true ? `Victory🏆🏆🏆` : `Defeat💩💩💩`;
  const wonOrLost = isPlayerWin === true ? `won` : `lost`;

  isPlayerWin === true ? winSound.play() : loseSound.play();

  const popupHTML = `   <div class="popup">
    <div class="overlay"></div>
    <div class="content">
      <h1 style="margin: 0px">${victoryOrDefeat}</h1>
      <h2 style="margin: 0px">You ${wonOrLost} after ${round} rounds</h2>
      <button class="playagain">Play Again!</button>
    </div>
  </div>`;

  body.insertAdjacentHTML(`beforeend`, popupHTML);
}

//Function: event listener when click "play again" button
function clear(e) {
  body.removeChild(popup);
  winCounter = 0;
  loseCounter = 0;
  result.textContent = ``;
  round = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}

//Function for refactoring playagain process
function playAgain() {
  const playAgainBtn = document.querySelector(`.playagain`);
  popup = document.querySelector(`.popup`);
  playAgainBtn.addEventListener(`click`, clear);
}

function computerBtnAnimation(computerChoice) {
  const computerDOM = document.querySelectorAll(`.pc`);
  computerDOM.forEach((ele) => {
    if (ele.className.indexOf(`${computerChoice}`) > -1) {
      ele.style.backgroundColor = `#fc5868`;
    } else ele.style.backgroundColor = `#bbd979`;
  });
}

//Variables: count win, lose and total round played
let winCounter = 0,
  loseCounter = 0,
  round = 0;

//Function: eventListener when click buttons on game board.
function game1(e) {
  //guard clause
  if (e.target.className === `playerBtn`) return;

  round++;

  const playerChoice = e.target.className;
  const computerChoice = getComputerChoice();

  //computer's button effects
  computerBtnAnimation(computerChoice);

  const game = playRound(playerChoice, computerChoice);

  //show result on web
  result.textContent = game;

  //Logic for counting win or lose times and show them on web
  if (game.indexOf(`Win`) > -1) winCounter++;
  else if (game.indexOf(`Lose`) > -1) loseCounter++;

  playerScore.textContent = winCounter;
  computerScore.textContent = loseCounter;

  //Logic for showing final results (final winner is whoever reaches 5 firstly)
  const scoreForWin = 5;

  if (+playerScore.textContent === scoreForWin) {
    showPopup(true);
    playAgain();
  }

  if (+computerScore.textContent === scoreForWin) {
    showPopup(false);
    playAgain();
  }
}

//////////////////////////////////////////////
////////////////addEventListener//////////////
btnPlayer.addEventListener(`click`, game1);
