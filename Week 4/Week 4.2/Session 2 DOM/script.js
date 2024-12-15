let score = 0;
let timeleft = 60;
let gameInterval;
let targetNumber;

let bubbleContainer = document.querySelector("#bubbleContainer");
let scoreElement = document.querySelector("#score");
let targetNumberElement = document.querySelector("#targetNumber");
let timeleftElement = document.querySelector("#timer");
let resetBtn = document.querySelector("#resetBtn");

function getRandomNumber(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function createBubble() {
  bubbleContainer.innerHTML = '';
  let numbers = new Array(36).fill(null).map(() => getRandomNumber(1, 9)); // Fill the array with random numbers
  let targetPosition = getRandomNumber(0, 35); // Pick a random position
  numbers[targetPosition] = targetNumber; // Insert the targetNumber at the targetPosition

  numbers.forEach(number => {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = number;
    bubble.addEventListener("click", handleBubbleClick);
    bubbleContainer.appendChild(bubble);
  });
}


function generateTarget() {
  targetNumber = getRandomNumber(1, 9);
  targetNumberElement.textContent = targetNumber;
}

function handleBubbleClick(event) {
  const clickedNumber = Number(event.target.textContent);
  if (clickedNumber === targetNumber) {
    score += 10;
    scoreElement.textContent = score;
    createBubble();
    generateTarget();
  }
}

function updateTimer() {
  timeleftElement.textContent = timeleft;
  if (timeleft === 0) {
    endGame();
  } else {
    timeleft--;
  }
}

function endGame() {
  clearInterval(gameInterval);
  bubbleContainer.innerHTML = `
          <div class="game-over">
            <h1>Game Over!</h1>
            <div class="final-score">Final Score: <span>${score}</span></div>
        </div>
    `;
  resetBtn.disabled = false;
}

function startGame() {
  score = 0;
  timeleft = 60;
  timeleftElement.textContent = timeleft;
  scoreElement.textContent = score;
  resetBtn.disabled = true;
  generateTarget();
  createBubble();
  gameInterval = setInterval(updateTimer, 1000);
}

resetBtn.addEventListener('click', startGame);

startGame();

