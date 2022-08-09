//Toggle rules
const rulesBtn = document.querySelector('#rules');
const rulesModal = document.querySelector('#rules-modal');
const userResult = document.querySelectorAll('.user-result');
const computerResult = document.querySelectorAll('.computer-result');
const gameResultContainer = document.querySelector('.game-result');
const finalMessage = document.querySelector('#final-message');
const gameContainer = document.querySelector('.game-container');
const userChoice = document.querySelectorAll('[data-choice]');
const playAgainBtn = document.querySelector('#play-again');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const resetScore = document.querySelector('#reset');
let choices = [];

playAgainBtn.addEventListener('click', playAgain);

rulesBtn.addEventListener('click', () => {
  rulesModal.classList.toggle('active');
});

resetScore.addEventListener('click', scoreReset);

userChoice.forEach(choice => {
  choice.addEventListener('click', event => {
    gameOn(event.currentTarget.dataset.choice);
  });
});

function gameOn(userChoice) {
  let computer = computerChoice();
  let computerWins = 'You lose';
  let userWins = 'You win';
  let finalMessage = '';

  console.log(`Computer choice: ${computer}`);
  console.log(`User choice: ${userChoice}`);

  if (userChoice === computer) {
    finalMessage = 'Draw';
  } else if (userChoice === 'paper' && computer === 'scissors') {
    finalMessage = computerWins;
  } else if (userChoice === 'scissors' && computer === 'rock') {
    finalMessage = computerWins;
  } else if (userChoice === 'rock' && computer === 'paper') {
    finalMessage = computerWins;
  } else {
    finalMessage = userWins;
  }

  if (finalMessage === 'You win') {
    playerScore.textContent = Number.parseInt(playerScore.textContent) + 1;
  }

  if (finalMessage === 'You lose') {
    computerScore.textContent = Number.parseInt(computerScore.textContent) + 1;
  }

  gameContainer.classList.add('result');
  createResult(userChoice, computer, finalMessage);
}

/*Função para criar escolha do computador*/

function computerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = '';

  switch (randomNumber) {
    case 0:
      computerChoice = 'paper';
      break;
    case 1:
      computerChoice = 'scissors';
      break;
    case 2:
      computerChoice = 'rock';
      break;
  }

  return computerChoice;
}

/**/

function createResult(userChoice, computerChoice, message) {
  console.log('computer choice inside createReseult' + computerChoice);

  userResult.forEach(result => {
    result.classList.add(`${userChoice}`);
  });

  computerResult.forEach(result => {
    result.classList.add(`${computerChoice}`);
  });

  gameResultContainer.classList.add('on');

  finalMessage.textContent = message;

  return (choices = [`${userChoice}`, `${computerChoice}`]);
}

function playAgain() {
  userResult.forEach(result => {
    result.classList.remove(choices[0]);
  });

  computerResult.forEach(result => {
    result.classList.remove(choices[1]);
  });

  choices = [];

  gameContainer.classList.remove('result');
  gameResultContainer.classList.remove('on');
}

function scoreReset() {
  computerScore.textContent = 0;
  playerScore.textContent = 0;
}
