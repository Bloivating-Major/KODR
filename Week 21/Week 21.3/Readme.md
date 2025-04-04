# 🚀 **Week 21 | Day 3| DSA Session - LeetCode Questions**  

---

## 🌳 **Binary Tree Implementation**
```javascript
const prompt = require("prompt-sync")();

class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    createTree() {
        let data = parseInt(prompt("Enter a value (-1 for no node): "));
        if (data === -1) return null;

        let newNode = new Node(data);

        console.log("Enter Left Child for " + data);
        newNode.left = this.createTree();

        console.log("Enter Right Child for " + data);
        newNode.right = this.createTree();

        return newNode;
    }

    build() {
        this.root = this.createTree();
    }

    preorder(root) {
        if (root == null) return;
        process.stdout.write(root.val + " ");
        this.preorder(root.left);
        this.preorder(root.right);
    }

    postorder(root) {
        if (root == null) return;
        this.postorder(root.left);
        this.postorder(root.right);
        process.stdout.write(root.val + " ");
    }

    inorder(root) {
        if (root == null) return;
        this.inorder(root.left);
        process.stdout.write(root.val + " ");
        this.inorder(root.right);
    }
}

let tree = new Tree();
tree.build();

console.log("Preorder Traversal:");
tree.preorder(tree.root);
console.log("\nPostorder Traversal:");
tree.postorder(tree.root);
console.log("\nInorder Traversal:");
tree.inorder(tree.root);
```
### **Key Concepts:**
- **Binary Tree Creation:** Using recursion to build a tree.
- **Traversals:**
  - **Preorder (Root-Left-Right)**
  - **Postorder (Left-Right-Root)**
  - **Inorder (Left-Root-Right)**

---

## 🔢 **Sudoku Solver**
```javascript
var solve = function(board, row = 0, col = 0) {
    if (row === 9) return true; // If row reaches 9, board is solved

    let newRow = row, newCol = col + 1;
    if (col === 8) { // Move to the next row when reaching the end of a row
        newRow = row + 1;
        newCol = 0;
    }

    if (board[row][col] !== ".") { // Skip pre-filled cells
        return solve(board, newRow, newCol);
    }

    for (let i = 1; i <= 9; i++) { // Digits 1-9
        let ch = i.toString();
        if (isValid(board, row, col, ch)) {
            board[row][col] = ch;
            if (solve(board, newRow, newCol)) return true;
            board[row][col] = "."; // Backtrack
        }
    }
    
    return false;
};

var isValid = function(board, row, col, ch) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === ch) return false; // Row check
        if (board[i][col] === ch) return false; // Column check
    }

    let subBoxi = Math.floor(row / 3) * 3;
    let subBoxj = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[subBoxi + i][subBoxj + j] === ch) return false;
        }
    }

    return true;
};

var solveSudoku = function(board) {
    solve(board);
};
```
### **Key Concepts:**
- **Backtracking Approach** to solve Sudoku.
- **Row, Column, and 3x3 Subgrid Validity Checks** before placing a number.
- **Recursive Solution** that tries all possible values and backtracks if needed.

---

## 👑 **N-Queens Problem**
```javascript
var solveNQueens = function(n) {
    let results = [];
    let board = new Array(n).fill(null).map(() => new Array(n).fill(".")); // Fill board with "."

    solve(board, 0, n, results);
    return results;
};

function solve(board, row, n, results) {
    if (row === n) {
        results.push(board.map(row => row.join(""))); // Convert board to string format
        return;
    }

    for (let col = 0; col < n; col++) {
        if (isValid(board, row, col, n)) {
            board[row][col] = "Q"; // Place queen
            solve(board, row + 1, n, results);
            board[row][col] = "."; // Backtrack
        }
    }
}

function isValid(board, row, col, n) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === "Q") return false; // Same column
        
        if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q") return false; // Main diagonal
        
        if (col + (row - i) < n && board[i][col + (row - i)] === "Q") return false; // Anti-diagonal
    }
    return true;
}
```
### **Key Concepts:**
- **Backtracking Approach** to place `N` queens on an `N x N` board.
- **Validation Checks** to ensure:
  - No two queens are in the same column.
  - No two queens are in the same diagonal.
- **Recursive Call and Backtracking** after placing each queen.

---

## 🔍 **Word Search (Backtracking)**
```javascript
var exist = function(board, word) {
    let rows = board.length, cols = board[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (solve(board, word, r, c, 0)) return true;
        }
    }

    return false;
};

function solve(board, word, r, c, count) {
    if (count === word.length) return true;

    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] !== word[count]) {
        return false;
    }

    let temp = board[r][c];
    board[r][c] = "#"; // Mark as visited

    let isFound = solve(board, word, r + 1, c, count + 1) || // Down
                  solve(board, word, r - 1, c, count + 1) || // Up
                  solve(board, word, r, c + 1, count + 1) || // Right
                  solve(board, word, r, c - 1, count + 1);  // Left

    board[r][c] = temp; // Restore the character (backtracking)

    return isFound;
}
```
### **Key Concepts:**
- **Backtracking Approach** to search for a word in a `2D` board.
- **Recursive DFS Search** in all four directions.
- **Backtracking Step** to reset the board after searching.

---

## 🎯 **Summary of Techniques**
| Problem       | Approach |
|--------------|----------|
| Binary Tree Traversals | Recursion |
| Sudoku Solver | Backtracking |
| N-Queens | Backtracking |
| Word Search | Backtracking + DFS |

Each problem relies on recursion, backtracking, and validation checks to explore possible solutions effectively.

---

### 🚀 **Next Steps**
- **Optimize solutions** for time and space complexity.
- **Explore iterative approaches** for tree traversal.
- **Apply bit manipulation** in Sudoku/N-Queens.
