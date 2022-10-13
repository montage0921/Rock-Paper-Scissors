const rockPaperScissor = [`rock`, `paper`, `scissor`];

function getComputerChoice() {
  const i = Math.floor(Math.random() * 3);
  return rockPaperScissor[i];
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  //guard clause
  if (
    playerSelection !== `rock` &&
    playerSelection !== `paper` &&
    playerSelection !== `scissor`
  )
    return;

  console.log(playerSelection, computerSelection);

  if (playerSelection === computerSelection) console.log(`Tie Game 🟰`);
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

const playerSelection = prompt(`Enter rock, paper or scissor!`).toLowerCase();

console.log(playRound(playerSelection, computerSelection));
