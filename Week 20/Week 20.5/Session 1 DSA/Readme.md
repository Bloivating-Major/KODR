
# 🗼 Tower of Hanoi: A Recursive Riddle Solver! 🧩

Unravel the ancient puzzle of the **Tower of Hanoi** with this elegant JavaScript code! ✨  Watch as recursion dances its magic to solve this classic brain-teaser. 🧠

## 🤔 The Hanoi Hustle: What's the Puzzle?

Imagine you've got three rods (let's call them Source, Helper, and Destination) and a stack of disks, each smaller than the one below it, on the Source rod. 🪵  Your mission, should you choose to accept it, is to move the entire stack to the Destination rod, following these rules:

1.  **One disk at a time:** You can only move the top disk from a rod. ☝️
2.  **Smaller on top:** A larger disk cannot be placed on top of a smaller disk. 🚫

Sounds simple? Try it with more than a few disks, and you'll quickly see it's a brain-bender! 🤯

## 🚀 The Recursive Revelation: Code that Thinks for Itself!

This code cracks the puzzle using **recursion**, a technique where a function calls *itself* to solve smaller pieces of the problem. It's like magic, but it's actually clever logic! ✨

Here's the JavaScript code that performs the Hanoi Houdini act:

```javascript
let prompt = require("prompt-sync")

let n = Number(prompt("Enter a number")); // Get the number of disks from the user

towerOfHanoi(n, "Source", "Destination", "Helper"); // Initiate the Tower of Hanoi solver

function towerOfHanoi(n, s, d, h){
    if(n === 1){ // Base case: If only 1 disk, move it directly
        console.log("Move 1 plate from " + s + " to " + d);
        return;
    }
    towerOfHanoi(n-1, s, h, d); // Step 1: Move n-1 disks from Source to Helper, using Destination as auxiliary
    console.log("Move " + n + " th plate from " + s + " to " + d  ); // Step 2: Move the largest (nth) disk from Source to Destination
    towerOfHanoi(n-1, h, d, s); // Step 3: Move n-1 disks from Helper to Destination, using Source as auxiliary
}
```

### 🚶‍♀️ Dry Run - Let's Watch the Disks Dance! (Example: n = 2)

Let's see how the code solves the puzzle for `n = 2` disks.

1.  **Initial Call:** `towerOfHanoi(2, "Source", "Destination", "Helper")`

2.  **`towerOfHanoi(2, "Source", "Destination", "Helper")`:**
    *   `n` is 2 (not 1), so we don't hit the base case.
    *   **Recursive Call 1:** `towerOfHanoi(1, "Source", "Helper", "Destination")` (Move top (n-1=1) disk from Source to Helper, using Destination)

3.  **`towerOfHanoi(1, "Source", "Helper", "Destination")`:**
    *   `n` is 1! Base case! 🎉
    *   `console.log("Move 1 plate from Source to Helper")`  **Output:** `Move 1 plate from Source to Helper`
    *   `return;` (Base case returns)

4.  Back in **`towerOfHanoi(2, "Source", "Destination", "Helper")`**:
    *   **`console.log("Move 2 th plate from Source to Destination")`**  **Output:** `Move 2 th plate from Source to Destination` (Move the 2nd disk from Source to Destination)
    *   **Recursive Call 2:** `towerOfHanoi(1, "Helper", "Destination", "Source")` (Move n-1=1 disk from Helper to Destination, using Source)

5.  **`towerOfHanoi(1, "Helper", "Destination", "Source")`:**
    *   `n` is 1! Base case! 🎉
    *   `console.log("Move 1 plate from Helper to Destination")` **Output:** `Move 1 plate from Helper to Destination`
    *   `return;` (Base case returns)

The recursion unwinds, and we get the sequence of moves to solve the Tower of Hanoi for 2 disks:

```
Move 1 plate from Source to Helper
Move 2 th plate from Source to Destination
Move 1 plate from Helper to Destination
```

## 🏃‍♂️💨 Get Started & Solve the Tower!

1.  **Clone this repository** (or just copy-paste the code!).
2.  **Make sure you have Node.js installed.** 💻
3.  **Save the code** in a file named, for example, `hanoi.js`.
4.  **Run it from your terminal:** `node hanoi.js`
5.  **Enter the number of disks** when prompted!

   ```bash
   node hanoi.js
   Enter a number: 3
   Move 1 plate fromSource toHelper
   Move 2 th plate from Source to Destination
   Move 1 plate from Helper to Destination
   Move 3 th plate from Source to Helper
   Move 1 plate from Destination to Source
   Move 2 th plate from Destination to Helper
   Move 1 plate from Source to Helper
   ```

## 🌟 Key Concepts

*   **Recursion:**  Solving a problem by breaking it down into smaller, self-similar subproblems.  The `towerOfHanoi` function calls itself! 🔄
*   **Base Case:**  The stopping condition for recursion (when `n === 1`).  Without a base case, recursion would go on forever! 🛑
*   **Divide and Conquer:**  The Tower of Hanoi problem is elegantly solved by dividing it into smaller, manageable steps. 쪼개고 정복!

Challenge yourself! Try running the code with different numbers of disks and watch the recursive magic unfold! ✨  Happy puzzling! 🧩 🎉


# 👑 Circle of Champions: The Recursive Winner Finder 🏆

Ever wondered who would be the last one standing in a game of strategic elimination? 🤔  This project dives into the **Circular Game** (LeetCode 1823 - Find the Winner of the Circular Game) and reveals the ultimate champion using a clever recursive approach! 🚀

## 🎮 The Game Plan

Imagine a group of friends standing in a circle, ready for a playful showdown.  Starting from friend number 1, we count `k` steps clockwise. The friend at the `k`-th step is out! 💥 This continues, skipping the eliminated friend, until only one remains – the **WINNER**! 🥳

This code elegantly solves the puzzle of finding that winner when you have `n` friends and a skip count of `k`.

## 💡 The Recursive Revelation

Instead of simulating the entire game step-by-step, we use the magic of **recursion**! ✨  The core idea is to break down the problem into smaller, self-similar subproblems.

Here's the JavaScript code that does the trick:

```javascript
var solve = function(arr, k , i){
    if(arr.length === 1) return arr[0];
    i = (i+k)%arr.length
    arr.splice(i, 1);
    return solve(arr, k , i);
}

var findTheWinner = function(n, k) {
    k--; // Adjust k for 0-based indexing in the 'solve' function
    let arr = new Array(n);
    for(let i = 0; i < arr.length; i++){
        arr[i] = i + 1; // Initialize players array [1, 2, ..., n]
    }
    let ans = solve(arr, k , 0); // Start the recursive magic!
    return ans; // The ultimate winner!
};
```

### 🏃‍♀️💨 Dry Run - Let's See it in Action! (Example: n = 5, k = 2)

Imagine our circle of friends: `[1, 2, 3, 4, 5]` and we're skipping `k = 2` friends each time.

1.  **Initial Call:** `findTheWinner(5, 2)` calls `solve([1, 2, 3, 4, 5], 1, 0)` (k is adjusted to `k-1 = 1` for 0-based indexing within `solve`).

2.  **`solve([1, 2, 3, 4, 5], 1, 0)`:**
    *   `arr.length` is 5 (not 1), so we continue.
    *   `i = (0 + 1) % 5 = 1`.  Index 1 (value `2`) is to be eliminated.
    *   `arr.splice(1, 1)` modifies `arr` to `[1, 3, 4, 5]`.
    *   Recursive call: `solve([1, 3, 4, 5], 1, 1)` (Notice `i` is now `1`, the index of the next starting position in the *modified* array).

3.  **`solve([1, 3, 4, 5], 1, 1)`:**
    *   `arr.length` is 4 (not 1), continue.
    *   `i = (1 + 1) % 4 = 2`. Index 2 (value `4`) is eliminated.
    *   `arr.splice(2, 1)` modifies `arr` to `[1, 3, 5]`.
    *   Recursive call: `solve([1, 3, 5], 1, 2)`

4.  **`solve([1, 3, 5], 1, 2)`:**
    *   `arr.length` is 3 (not 1), continue.
    *   `i = (2 + 1) % 3 = 0`. Index 0 (value `1`) is eliminated.
    *   `arr.splice(0, 1)` modifies `arr` to `[3, 5]`.
    *   Recursive call: `solve([3, 5], 1, 0)`

5.  **`solve([3, 5], 1, 0)`:**
    *   `arr.length` is 2 (not 1), continue.
    *   `i = (0 + 1) % 2 = 1`. Index 1 (value `5`) is eliminated.
    *   `arr.splice(1, 1)` modifies `arr` to `[3]`.
    *   Recursive call: `solve([3], 1, 1)`

6.  **`solve([3], 1, 1)`:**
    *   `arr.length` is 1! Base case reached! 🎉
    *   Return `arr[0]` which is `3`.

The recursion unwinds, and the final result returned by `findTheWinner` is **3**!  Friend number 3 takes the crown! 👑

## 🚀 Get Started & Find Your Winner!

1.  **Clone this repository** (if you want to run it locally, though it's simple enough to just copy-paste the code!).
2.  **Open a JavaScript environment** (like your browser's developer console or Node.js).
3.  **Paste the code** into the console or a `.js` file.
4.  **Call `findTheWinner(n, k)`** with your desired values for `n` (number of friends) and `k` (skip count).

   ```javascript
   findTheWinner(5, 2); //  Will output: 3
   findTheWinner(6, 5); //  Will output: 1
   // ... try your own combinations!
   ```

## 🌟  Key Concepts

*   **Recursion:**  Breaking a problem into smaller, self-similar instances.
*   **Array Manipulation:**  Using `splice` to simulate elimination in the circle.
*   **Modulo Operator (%):**  Essential for handling the circular nature of the game.

Have fun discovering who the winner will be! 🥳 🎉 🏆
