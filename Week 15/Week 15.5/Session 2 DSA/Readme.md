# 📊 **Week 15 Day 5 - DSA Session** 🔥  

## 🔍 **LeetCode 128: Longest Consecutive Sequence**  

### 🎯 **Problem Statement**  
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.  

**Example:**  
```
Input: [100, 4, 200, 1, 3, 2]  
Output: 4  
Explanation: The longest consecutive sequence is [1, 2, 3, 4]. Therefore, the length is 4.  
```
**Constraints:**  
- Time Complexity: O(n)  
- Space Complexity: O(n)  

---

## 🏗️ **Solution 1: Using HashMap** 🔍  

In this approach, we use a **Map** to keep track of elements and whether they can start a new sequence.  

### ✅ **Code Explanation:**  
1. **Insert elements into the map.**  
2. **Mark elements as false** if they have a predecessor (`element - 1`).  
3. **Start a streak** for numbers that don't have a predecessor and track the longest sequence.  

### 📜 **Code:**  
```js
function LeetCode128() {
    let nums = [100, 4, 200, 1, 3, 2];
    let largest = 0;
    let map = new Map();

    // Step 1: Add all numbers to the map
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], true);
    }

    // Step 2: Mark elements with a predecessor as false
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i] - 1)) {
            map.set(nums[i], false);
        }
    }

    // Step 3: Count streaks for potential starting elements
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) {
            let counter = 1;
            while (map.has(nums[i] + counter)) {
                counter++;
            }
            largest = Math.max(largest, counter);
        }
    }

    console.log(`Longest Consecutive Sequence Length: ${largest}`);
}

LeetCode128();
```

### 🏷️ **Complexity Analysis:**  
- 🕒 **Time Complexity:** O(n)  
- 📦 **Space Complexity:** O(n)  

---

## ⚡ **Solution 2: Using HashSet (Optimized Solution)** 🚀  

This approach is more efficient and easier to understand. It ensures that for each number, we only start counting if it's the **beginning** of a sequence (i.e., `num - 1` is not in the set).  

### ✅ **Code Explanation:**  
1. Add all numbers to a **Set**.  
2. For each number, check if it can be the start of a sequence.  
3. Count the length of the sequence starting from that number.  
4. Track the longest streak.  

### 📜 **Optimized Code:**  
```js
function LeetCode128v2() {
    let nums = [100, 4, 200, 1, 3, 2];
    let numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        // Check if this number is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let streak = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }

    console.log(`Optimized Longest Consecutive Sequence Length: ${longest}`);
}

LeetCode128v2();
```

### 🏷️ **Complexity Analysis:**  
- 🕒 **Time Complexity:** O(n)  
- 📦 **Space Complexity:** O(n)  

---

## 🔥 **Key Takeaways**  
✅ **HashMap Approach:** Helps in understanding how sequences can be tracked using mappings.  
✅ **HashSet Approach:** More efficient and simpler to implement for consecutive sequence problems.  
✅ **Best Practice:** Always check for edge cases where the array might be empty or have duplicates.  

---

💡 **Insight:** This problem is great for mastering hash-based data structures and understanding time complexity optimization for sequence detection. 🚀