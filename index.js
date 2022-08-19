// Set the base of the game
let player1 = {
  score: 0,
  turn: true,
  winner: false,
};

let player2 = {
  score: 0,
  turn: false,
  winner: false,
};

// Store references from DOM into variables.
let playerStatus = document.getElementById('player-status');
let p1 = document.getElementById('player-one');
let p2 = document.getElementById('player-two');
let p1Scoreboard = document.getElementById('p1-scoreboard');
let p2Scoreboard = document.getElementById('p2-scoreboard');
let p1Dice = document.getElementById('p1-dice');
let p2Dice = document.getElementById('p2-dice');
let rollBtn = document.getElementById('roll-btn');
let resetBtn = document.getElementById('reset-btn');

playerStatus.textContent = 'Player 1 turn';

function showReset() {
  rollBtn.style.display = 'none';
  resetBtn.style.display = 'block';
  resetBtn.style.backgroundColor = 'red';
}

// Rolls the dice and generates a random number for each players turn.
rollBtn.addEventListener('click', function () {
  const rand = Math.floor(Math.random() * 6) + 1;

  if (player1.turn === true) {
    playerStatus.textContent = 'Player 2 turn';
    player1.score += rand;
    p1Scoreboard.textContent = player1.score;
    p1Dice.textContent = rand;
    p2Dice.classList.add('active');
    p1Dice.classList.remove('active');
    player1.turn = false;
    player2.turn = true;
  } else if (player2.turn === true) {
    playerStatus.textContent = 'Player 1 turn';
    player2.score += rand;
    p2Scoreboard.textContent = player2.score;
    p2Dice.textContent = rand;
    p1Dice.classList.add('active');
    p2Dice.classList.remove('active');
    player2.turn = false;
    player1.turn = true;
  }

  // If player reaches winning score, you win.
  if (player1.score >= 20) {
    playerStatus.textContent = 'Player 1 Won!';
    p1Dice.classList.add('active');
    p2Dice.classList.remove('active');
    player1.winner = true;
    showReset();
  } else if (player2.score >= 20) {
    playerStatus.textContent = 'Player 2 Won!';
    p2Dice.classList.add('active');
    p1Dice.classList.remove('active');
    player2.winner = true;
    showReset();
  }
});

// Resets the game and starts off with the loser.
resetBtn.addEventListener('click', function () {
  if (player1.winner === true) {
    playerStatus.textContent = 'Player 2 turn';
    p1Dice.classList.remove('active');
    p2Dice.classList.add('active');
    player1.turn = false;
  } else if (player2.winner === true) {
    playerStatus.textContent = 'Player 1 turn';
    p2Dice.classList.remove('active');
    p1Dice.classList.add('active');
    player2.turn = false;
  }

  player1.winner = false;
  player2.winner = false;
  player1.score = 0;
  player2.score = 0;
  p1Scoreboard.textContent = player1.score;
  p2Scoreboard.textContent = player2.score;
  p1Dice.textContent = '-';
  p2Dice.textContent = '-';
  resetBtn.style.display = 'none';
  rollBtn.style.display = 'block';
});
