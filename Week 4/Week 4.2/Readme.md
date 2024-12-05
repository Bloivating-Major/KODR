```scss

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  
  body {
    min-height: 100vh;
    background: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
  }
  
  .stats-container {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 20px;
    gap: 40px;
  }
  
  .stat-box {
    background: #333;
    padding: 15px 30px;
    border-radius: 10px;
    color: #fff;
    text-align: center;
  
    h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
  
    .value {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  
  .bubble-container {
    width: 100%;
    max-width: 800px;
    background: #222;
    border-radius: 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    min-height: 500px;
  
    .game-over {
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
    
      h1 {
        font-size: 3rem;
        color: #ff4d4d;
        margin-bottom: 20px;
        text-transform: uppercase;
      }
    
      .final-score {
        font-size: 2rem;
        color: #fff;
        span {
          color: #ff4d4d;
          font-weight: bold;
        }
      }
    }
  }
  
  .bubble {
    aspect-ratio: 1;
    border-radius: 50%;
    background: #444;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
  
    &:hover {
      transform: scale(1.1);
      background: #ff4d4d;
    }
  }
  
  .reset-btn {
    margin-top: 30px;
    padding: 15px 40px;
    font-size: 1.2rem;
    background: #ff4d4d;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: transform 0.2s;
  
    &:hover {
      transform: scale(1.05);
    }
  
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  }

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    .stats-container {
      flex-direction: column;
      gap: 15px;
    }
  
    .bubble-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  


```


```javascript
let score = 0;
let timeLeft = 60;
let gameInterval;
let targetNumber;

const bubbleContainer = document.getElementById('bubbleContainer');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const targetElement = document.getElementById('targetNumber');
const resetBtn = document.getElementById('resetBtn');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBubbles() {
    bubbleContainer.innerHTML = '';
    for (let i = 0; i < 36; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = getRandomNumber(1, 9);
        bubble.addEventListener('click', handleBubbleClick);
        bubbleContainer.appendChild(bubble);
    }
}

function generateTarget() {
    targetNumber = getRandomNumber(1, 9);
    targetElement.textContent = targetNumber;
}

function handleBubbleClick(e) {
    console.log(e);
    const clickedNumber = Number(e.target.textContent);
    if (clickedNumber === targetNumber) {
        score += 10;
        scoreElement.textContent = score;
        createBubbles();
        generateTarget();
    }
}

function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
        endGame();
    } else {
        timeLeft--;
    }
}

function startGame() {
    score = 0;
    timeLeft = 3;
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    resetBtn.disabled = true;
    createBubbles();
    generateTarget();
    gameInterval = setInterval(updateTimer, 1000);
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

resetBtn.addEventListener('click', startGame);

startGame();

```