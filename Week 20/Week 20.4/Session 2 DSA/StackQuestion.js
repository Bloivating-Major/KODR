// Leetcode 84 Stack Histogram Question

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // Creating 2 Empty Stacks and then 2 Empty Arrays 
    const n = heights.length;
    const leftBoundaries = new Array(n);
    const rightBoundaries = new Array(n);
    const leftStack = [];
    const rightStack = [];

    // 1. Find Nearest Smaller Element to the Left
    for (let i = 0; i < n; i++) {
        while (leftStack.length > 0 && heights[i] <= heights[leftStack[leftStack.length - 1]]) {
            leftStack.pop();
        }
        leftBoundaries[i] = leftStack.length === 0 ? -1 : leftStack[leftStack.length - 1];
        leftStack.push(i);
    }

    // 2. Find Nearest Smaller Element to the Right
    for (let i = n - 1; i >= 0; i--) {
        while (rightStack.length > 0 && heights[i] <= heights[rightStack[rightStack.length - 1]]) {
            rightStack.pop();
        }
        rightBoundaries[i] = rightStack.length === 0 ? n : rightStack[rightStack.length - 1];
        rightStack.push(i);
    }

    // 3. Calculate Areas
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        const width = rightBoundaries[i] - leftBoundaries[i] - 1;
        const area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
};

// Leetcode 85 Question 

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const histogramHeights = new Array(cols).fill(0);
    let maxRectangleArea = 0;

    for (let i = 0; i < rows; i++) {
        // Build histogram for current row
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                histogramHeights[j] = (i === 0) ? 1 : histogramHeights[j] + 1;
            } else {
                histogramHeights[j] = 0;
            }
        }

        // Calculate largest rectangle area for current histogram
        const currentMaxRowArea = largestRectangleAreaInHistogram(histogramHeights);
        maxRectangleArea = Math.max(maxRectangleArea, currentMaxRowArea);
    }

    return maxRectangleArea;
};

// Helper function: Largest Rectangle Area in Histogram (Two-Stack approach - from previous example)
function largestRectangleAreaInHistogram(heights) {
    const n = heights.length;
    const leftBoundaries = new Array(n);
    const rightBoundaries = new Array(n);
    const leftStack = [];
    const rightStack = [];

    // 1. Nearest Smaller Element to the Left
    for (let i = 0; i < n; i++) {
        while (leftStack.length > 0 && heights[i] <= heights[leftStack[leftStack.length - 1]]) {
            leftStack.pop();
        }
        leftBoundaries[i] = leftStack.length === 0 ? -1 : leftStack[leftStack.length - 1];
        leftStack.push(i);
    }

    // 2. Nearest Smaller Element to the Right
    for (let i = n - 1; i >= 0; i--) {
        while (rightStack.length > 0 && heights[i] <= heights[rightStack[rightStack.length - 1]]) {
            rightStack.pop();
        }
        rightBoundaries[i] = rightStack.length === 0 ? n : rightStack[rightStack.length - 1];
        rightStack.push(i);
    }

    // 3. Calculate Areas
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        const width = rightBoundaries[i] - leftBoundaries[i] - 1;
        const area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
}