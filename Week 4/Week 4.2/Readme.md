# **Bubble Pop Game**

This project is a fun and interactive **Bubble Pop Game** where players aim to score as many points as possible within a 60-second time frame by clicking on the correct target number. The game is built using vanilla JavaScript, HTML, and CSS.

---

## **📂 Features**

| **Feature**                  | **Description**                                                                |
|-------------------------------|--------------------------------------------------------------------------------|
| **Dynamic Bubble Creation**   | Generates 36 bubbles with random numbers, including a target number.           |
| **Target Matching**           | Player earns points by clicking the bubble that matches the target number.     |
| **Timer Functionality**       | The game runs for 60 seconds, with the timer decreasing each second.           |
| **Score Tracking**            | Tracks and displays the player's current score dynamically.                    |
| **Game Over Screen**          | Displays a "Game Over" screen with the final score when the timer ends.        |
| **Reset Functionality**       | Allows players to reset and start a new game.                                  |

---

## **🕹️ How to Play**

1. **Objective**: Click the bubble that matches the displayed target number to score points.
2. **Scoring**: Each correct bubble click adds 10 points to your score.
3. **Timer**: You have 60 seconds to score as many points as possible.
4. **Game Over**: Once time is up, the game displays your final score.
5. **Reset**: Click the reset button to start a new game.

---

## **💻 Code Breakdown**

### **1. Random Number Generation**
Used to generate random numbers for bubbles and the target number:
```javascript
function getRandomNumber(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
```

---

### **2. Dynamic Bubble Creation**
Creates 36 bubbles, randomly assigning numbers. One bubble contains the target number:
```javascript
function createBubble() {
  bubbleContainer.innerHTML = '';
  let numbers = new Array(36).fill(null); 
  let targetPosition = getRandomNumber(0, 35);
  numbers[targetPosition] = targetNumber;
  numbers = numbers.map(num => num === null ? getRandomNumber(1, 9) : num);
  numbers.forEach(number => {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = number;
    bubble.addEventListener("click", handleBubbleClick);
    bubbleContainer.appendChild(bubble);
  });
}
```

---

### **3. Target Number Generation**
Randomly generates a target number between 1 and 9:
```javascript
function generateTarget() {
  targetNumber = getRandomNumber(1, 9);
  targetNumberElement.textContent = targetNumber;
}
```

---

### **4. Bubble Click Handler**
Checks if the clicked bubble matches the target number, updates the score, and regenerates bubbles:
```javascript
function handleBubbleClick(event) {
  const clickedNumber = Number(event.target.textContent);
  if (clickedNumber === targetNumber) {
    score += 10;
    scoreElement.textContent = score;
    createBubble();
    generateTarget();
  }
}
```

---

### **5. Timer Management**
Counts down from 60 seconds, updating the timer display. Ends the game when the timer reaches 0:
```javascript
function updateTimer() {
  timeleftElement.textContent = timeleft;
  if (timeleft === 0) {
    endGame();
  } else {
    timeleft--;
  }
}
```

---

### **6. Game Over and Reset**
Displays the game over screen and allows players to reset the game:
```javascript
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
```

---

## **🎮 Live Demo**
You can play the game [here](./Session%202%20DOM/index.html). 

---

## **📂 Project Structure**

```plaintext
BubblePopGame/
├── index.html        # HTML structure of the game
├── style.css         # Styles for game layout and bubbles
├── main.js           # JavaScript logic for game functionality
├── README.md         # Documentation
```

---

## **💡 Key Learnings**
1. **DOM Manipulation**:
   - Dynamically created and updated HTML elements (`bubbles`, `game over screen`).
2. **Event Handling**:
   - Used `click` events to handle bubble interactions and reset functionality.
3. **Game Logic**:
   - Implemented a scoring system, timer, and target-based gameplay.
4. **Responsive Design**:
   - Ensured the game remains visually appealing across different screen sizes.
5. **State Management**:
   - Managed game state variables like `score`, `timeleft`, and `targetNumber`.

---


This **Bubble Pop Game** is a simple yet engaging project that demonstrates practical JavaScript skills for interactive web development. Feel free to enhance it further with animations, sound effects, or new features! 😊