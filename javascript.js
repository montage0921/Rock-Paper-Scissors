const rockPaperScissor = [`rock`, `paper`, `scissor`];

function getComputerChoice() {
  const i = Math.floor(Math.random() * 3);
  console.log(rockPaperScissor[i]);
}

getComputerChoice();
