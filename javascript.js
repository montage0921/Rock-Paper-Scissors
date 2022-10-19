const rockPaperScissor = [`rock`, `paper`, `scissor`];

function getComputerChoice() {
  const i = Math.floor(Math.random() * 3);
  return rockPaperScissor[i];
}

//Perform one single game
function playRound() {
  let playerSelection = prompt(`Enter rock, paper or scissor!`).toLowerCase();
  const computerSelection = getComputerChoice();

  //guard clause
  if (
    playerSelection !== `rock` &&
    playerSelection !== `paper` &&
    playerSelection !== `scissor`
  )
    return;

  if (playerSelection === computerSelection) return `Tie Game 🟰`;
  else if (playerSelection === `rock`) {
    return computerSelection === `paper`
      ? `You Lose! Paper beats Rock 🖐`
      : `You Win! Rock beats Scissor 👊🏻`;
  } else if (playerSelection === `paper`) {
    return computerSelection === `rock`
      ? `You Win! Paper beats Rock 🖐`
      : `You Lose! Scissor beats paper ✌🏿`;
  } else if (playerSelection === `scissor`) {
    return computerSelection === `rock`
      ? `You Lose! Rock beats Scissor 👊🏻 `
      : `You Win! Scissor beats paper ✌🏿`;
  }
}

//Perform user-defined times of game and determine the final winner!
function game() {
  let playerWin = 0,
    computerWin = 0;

  let round = 0;

  while (playerWin < 5 && computerWin < 5) {
    const result = playRound();
    round++;
    console.log(result);
    if (result.indexOf(`Win`) > -1) playerWin++;
    else if (result.indexOf(`Lose`) > -1) computerWin++;
  }

  if (playerWin === 5) console.log(`Victory!!! 🏆`);
  else console.log(`Defeat!!! 😢`);

  console.log(round);
}

game();
