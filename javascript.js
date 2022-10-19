//querySelector
const btn = document.querySelector(`.playerBtn`);
const result = document.querySelector(`.result`);
const playerScore = document.querySelector(`.playerScore span`);
const computerScore = document.querySelector(`.computerScore span`);

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

// function game() {
//   let round = 0;

//   while (playerWin < 5 && computerWin < 5) {
//     const result = playRound();
//     round++;
//     console.log(result);
//     if (result.indexOf(`Win`) > -1) playerWin++;
//     else if (result.indexOf(`Lose`) > -1) computerWin++;
//   }

//   if (playerWin === 5) console.log(`Victory!!! 🏆`);
//   else console.log(`Defeat!!! 😢`);

//   console.log(round);
// }

//////////////////////////////////////////////
//addEventListener

let playerWin = 0,
  computerWin = 0,
  round = 0;

btn.addEventListener(`click`, function (e) {
  round++;

  const playerChoice = e.target.className;
  const computerChoice = getComputerChoice();

  const game = playRound(playerChoice, computerChoice);
  result.textContent = game;

  if (game.indexOf(`Win`) > -1) playerWin++;
  else if (game.indexOf(`Lose`) > -1) computerWin++;
  console.log(playerWin);

  playerScore.textContent = playerWin;
  computerScore.textContent = computerWin;

  if (+playerScore.textContent === 5) {
    result.textContent = `Victory!!! 🏆`;
  }

  if (+computerScore.textContent === 5) result.textContent = `Defeat!!! 😩`;
});
