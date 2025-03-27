# 📌 Week 20 - Day 4 - Session 2: DSA Journey 🚀

## 🏆 Problem Set: Stack-Based Histogram Challenges

### 📌 1️⃣ Leetcode 84 - **Largest Rectangle in Histogram** 📊
**Goal:** Find the largest rectangle area in a histogram represented by an array of heights.

✅ **Approach:**
- **Monotonic Stack** for finding **Nearest Smaller Element (NSE) Left & Right**.
- Calculate the **width** of each bar using NSE indices.
- Compute the **area** and track the maximum.

📜 **Code Implementation:**
```javascript
var largestRectangleArea = function(heights) {
    const n = heights.length;
    const leftBoundaries = new Array(n);
    const rightBoundaries = new Array(n);
    const leftStack = [], rightStack = [];
    
    // Find Nearest Smaller to Left
    for (let i = 0; i < n; i++) {
        while (leftStack.length > 0 && heights[i] <= heights[leftStack[leftStack.length - 1]]) {
            leftStack.pop();
        }
        leftBoundaries[i] = leftStack.length === 0 ? -1 : leftStack[leftStack.length - 1];
        leftStack.push(i);
    }

    // Find Nearest Smaller to Right
    for (let i = n - 1; i >= 0; i--) {
        while (rightStack.length > 0 && heights[i] <= heights[rightStack[rightStack.length - 1]]) {
            rightStack.pop();
        }
        rightBoundaries[i] = rightStack.length === 0 ? n : rightStack[rightStack.length - 1];
        rightStack.push(i);
    }

    // Compute Max Area
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        const width = rightBoundaries[i] - leftBoundaries[i] - 1;
        maxArea = Math.max(maxArea, heights[i] * width);
    }
    return maxArea;
};
```
📝 **Key Takeaways:**
- **Monotonic Stack** helps find **next smaller elements efficiently**.
- Time Complexity: **O(N)**
- Space Complexity: **O(N)** (Can be optimized to O(1))

---

### 📌 2️⃣ Leetcode 85 - **Maximal Rectangle** 🔳
**Goal:** Given a binary matrix (`0s` and `1s`), find the largest rectangle containing only `1s`.

✅ **Approach:**
- Convert each row into a **histogram representation**.
- Use **Largest Rectangle in Histogram (Leetcode 84)** to compute max area at each row.

📜 **Code Implementation:**
```javascript
var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    const rows = matrix.length;
    const cols = matrix[0].length;
    const histogramHeights = new Array(cols).fill(0);
    let maxRectangleArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            histogramHeights[j] = (matrix[i][j] === '1') ? histogramHeights[j] + 1 : 0;
        }
        maxRectangleArea = Math.max(maxRectangleArea, largestRectangleArea(histogramHeights));
    }
    return maxRectangleArea;
};
```
📝 **Key Takeaways:**
- Converts **2D problem into multiple 1D histogram problems**.
- Uses **Leetcode 84’s stack-based approach** for quick computation.
- Time Complexity: **O(rows × cols)**
- Space Complexity: **O(cols)**

---

## 📊 Summary
| 🔢 Problem | ⏳ Time Complexity | 📦 Space Complexity | 🚀 Approach |
|-----------|------------------|------------------|------------|
| **Leetcode 84** | O(N) | O(N) | Monotonic Stack |
| **Leetcode 85** | O(rows × cols) | O(cols) | Histogram + Stack |

🔥 **This session was intense but rewarding!** Mastering stacks and histograms helped in solving **range-based problems efficiently**. 💡

🚀 **Next Steps:** Solve **Skyline Problem**, **Rainwater Trapping**, and explore **Segment Trees** for range-based queries.

📌 **Week 20, Day 4 - Session 2 ✅**

💡 Keep solving, keep learning! 💪😎

