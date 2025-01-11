
---

# **📅 Week 9 - Day 4**  
## **Session 2: DSA Revision 🔢**  

---

## **📚 Problems Solved**

### 1️⃣ **LeetCode 2078: Distance Between Two Unique Houses 🏠**  
**Problem Description:**  
Given a row of houses painted with different colors, calculate the maximum distance between two houses with **different colors**.  

---

### **🛠️ Approach & Solution**  

#### **1. Code Implementation**
```javascript
function Question1() {
  // LeetCode 2078 🏠
  // Distance between 2 unique houses
  let colors = [1, 1, 1, 6, 1, 1, 1];
  let max1 = 0,
    max2 = 0;

  // Calculate max1
  for (let i = 0; i < colors.length; i++) {
    if (colors[0] != colors[i]) {
      max1 = Math.abs(0 - i);
    }
  }

  // Calculate max2
  for (let i = colors.length - 2; i >= 0; i--) {
    if (colors[i] != colors[colors.length - 1]) {
      max2 = Math.abs(colors.length - 1 - i);
    }
  }

  console.log(Math.max(max1, max2));
}

Question1();
```

---

### **🔍 Explanation:**  
1. **Input:** An array `colors` representing houses painted with various colors.  
   Example: `[1, 1, 1, 6, 1, 1, 1]`  
2. **Goal:** Find the **maximum distance** between two houses painted with **different colors**.  
3. **Steps:**  
   - Compare each house from the **left** side to the **first house** and calculate the distance (`max1`).  
   - Compare each house from the **right** side to the **last house** and calculate the distance (`max2`).  
   - Return the maximum of `max1` and `max2`.  
4. **Output:** `3` for the given input.  

---

### **🎉 Learning Highlights:**  
- 💡 **Two-Way Traversal:** Used from both ends of the array to maximize efficiency.  
- 🖍️ **Absolute Difference (`Math.abs`)**: Simplifies distance calculation.  

---

---

### 2️⃣ **LeetCode 2037: Minimum Moves to Seat Everyone 🎓**  
**Problem Description:**  
There are `n` seats and `n` students. The goal is to move each student to a seat such that the **total moves** are minimized.  

---

### **🛠️ Approach & Solution**  

#### **1. Code Implementation**
```javascript
function Question2() {
  // LeetCode 2037 🎓
  let seats = [3, 1, 5],
    students = [2, 7, 4];
  let moves = 0;

  // Sort both arrays
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  // Calculate total moves
  for (let i = 0; i < seats.length; i++) {
    moves += Math.abs(seats[i] - students[i]);
  }

  return moves;
}
console.log(Question2());
```

---

### **🔍 Explanation:**  
1. **Input:** Two arrays, `seats` and `students`.  
   Example:  
   - Seats: `[3, 1, 5]`  
   - Students: `[2, 7, 4]`  
2. **Goal:** Minimize the total number of moves required to seat all students.  
3. **Steps:**  
   - Sort both arrays to align students with the nearest seats.  
   - Use a **loop** to calculate the absolute difference (`Math.abs`) for each pair of `seat` and `student`.  
   - Accumulate the differences to get the total moves.  
4. **Output:** `4` for the given input.  

---

### **🎉 Learning Highlights:**  
- 🔄 **Sorting First:** Ensures alignment of students and seats in the most optimal way.  
- ➕ **Cumulative Moves:** Sum up minimal distances between seats and students for an efficient solution.  

---

## **✨ Key Takeaways:**  
- 🎯 **Greedy Algorithms** work well for problems requiring minimum operations like `LeetCode 2037`.  
- 🏠 Problems like `LeetCode 2078` highlight the importance of **traversal techniques**.  
- 🔍 Always verify logic with **edge cases** to ensure robustness.

---

Happy Problem-Solving! 💻✨