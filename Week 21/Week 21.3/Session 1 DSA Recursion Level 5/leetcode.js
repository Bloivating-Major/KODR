// Sudoku Solver
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

    for (let i = 1; i <= 9; i++) { // Correct loop for digits 1-9
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

// N Queens

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let results = [];
    let board = new Array(n).fill(null).map(() => new Array(n).fill(".")); // Fill board with "."

    solve(board, 0, n, results);
    return results;
};

/**
 * solveing function to place queens row by row.
 */
function solve(board, row, n, results) {
    if (row === n) {
        results.push(board.map(row => row.join(""))); // Convert board to string format
        return;
    }

    for (let col = 0; col < n; col++) {
        if (isValid(board, row, col, n)) {
            board[row][col] = "Q"; // Place queen
            solve(board, row + 1, n, results);
            board[row][col] = "."; // solve (remove queen)
        }
    }
}

/**
 * Checks if placing a queen at (row, col) is valid.
 */
function isValid(board, row, col, n) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === "Q") return false; // Same column
        
        if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q") return false; // Main diagonal
        
        if (col + (row - i) < n && board[i][col + (row - i)] === "Q") return false; // Anti-diagonal
    }
    return true;
}



// Word Search
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length, cols = board[0].length;

    // Loop through every cell to start searching
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (solve(board, word, r, c, 0)) return true;
        }
    }

    return false;
};

/**
 * Recursive function to search for the word.
 */
function solve(board, word, r, c, count) {
    // Base case: if count equals word length, we've found the word
    if (count === word.length) return true;

    // Edge cases: Out of bounds or mismatch
    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] !== word[count]) {
        return false;
    }

    // Store the current character and mark it visited
    let temp = board[r][c];
    board[r][c] = "#"; // Mark as visited

    // Recursive calls for all 4 directions
    let isFound = solve(board, word, r + 1, c, count + 1) || // Down
                  solve(board, word, r - 1, c, count + 1) || // Up
                  solve(board, word, r, c + 1, count + 1) || // Right
                  solve(board, word, r, c - 1, count + 1);  // Left

    // Restore the character (backtracking)
    board[r][c] = temp;

    return isFound;
}

