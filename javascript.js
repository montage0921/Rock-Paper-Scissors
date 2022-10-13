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
  //ask number of total rounds users want to play
  const totalRound = +prompt(`How many times you wanna play?`);

  let playerWin = 0;
  let computerWin = 0;

  for (let i = 1; i <= totalRound; i++) {
    const result = playRound();

    console.log(result);
    if (result.indexOf(`Win`) > -1) playerWin++;
    else if (result.indexOf(`Lose`) > -1) computerWin++;
  }

  console.log(
    `You won ${playerWin} game! you lost ${computerWin} game! You tie ${
      totalRound - playerWin - computerWin
    } game!`
  );
  if (playerWin > computerWin) console.log(`Victory!!! 🏆`);
  else if (playerWin < computerWin) console.log(`Defeat!!! 😢`);
  else console.log(`Tie Game!`);
}

game();
