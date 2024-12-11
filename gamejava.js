let score = 0;
let timeLeft = 30;
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const target = document.getElementById('target');

// Move target to a random position
function moveTarget() {
  const game = document.getElementById('game');
  const gameWidth = game.offsetWidth;
  const gameHeight = game.offsetHeight;

  const randomX = Math.random() * (gameWidth - 50);
  const randomY = Math.random() * (gameHeight - 50);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

// Handle target click
target.addEventListener('click', () => {
  score++;
  scoreElement.textContent = score;
  moveTarget();
});

// Countdown timer
function startGame() {
  const timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert(`Game over! Your score is ${score}`);
    }
  }, 1000);

  moveTarget(); // Start moving the target
}

// Start the game on page load
window.onload = startGame;
