

### 🚀 Week 20 | Day 6 | DSA Session - Lecture 2  

> **"Backtracking: The Art of Exploring All Possibilities 🎭"**  

💡 Today, I tackled three classic **backtracking** problems that dive deep into recursion, decision trees, and problem-solving strategies!  

---

## 📌 **Problems Covered**  

### 🔹 **1️⃣ Subsets (Power Set without Empty Set)**
🔹 **Concept:** Generate all subsets of a given array.  
🔹 **Approach:**  
   - **Include** the element and move forward.  
   - **Exclude** the element and move forward.  
   - **Base Case:** When the index reaches the end, store the current subset.  

✅ **Key Learning:** **Recursive branching creates all subsets naturally!**  

---

### 🔹 **2️⃣ Power Set (All Possible Non-Empty Strings)**
🔹 **Concept:** Generate all possible non-empty subsequences of a string.  
🔹 **Approach:**  
   - Either **pick** or **skip** each character recursively.  
   - Once the recursion reaches the end, store the string.  
   - **Sort the results** to get lexicographically ordered subsets.  

✅ **Key Learning:** **Subsequence generation is just subsets in disguise!**  

---

### 🔹 **3️⃣ Permutations**
🔹 **Concept:** Generate all possible **arrangements** of given numbers.  
🔹 **Two Approaches:**  
   1️⃣ **Using extra space** – Track used elements with a boolean array.  
   2️⃣ **In-place swapping** – Swap elements and restore order after recursion.  

✅ **Key Learning:** **Swapping minimizes extra space while maintaining order!**  

---

## ⚡ **Code Snippets**  

### 🔹 **Subsets (Power Set)**
```javascript
var subsets = function(nums) {
    let ans = [];
    let current = [];

    function solve(nums, ans, current, i) {
        if(i === nums.length){
            ans.push([...current]);
            return;
        }
        current.push(nums[i]);
        solve(nums, ans, current, i+1);
        current.pop();
        solve(nums, ans, current, i+1);
    }

    solve(nums, ans, current, 0);
    return ans;
};
```

---

### 🔹 **Power Set (Non-Empty Subsequences)**
```javascript
class Solution {
    solve(s, ans, cur, i){
        if(i === s.length){
            if(cur.length !== 0) ans.push(cur);
            return;
        }
        this.solve(s, ans, cur + s.charAt(i), i+1);
        this.solve(s, ans, cur, i+1);
    }

    AllPossibleStrings(s){
        let ans = [];
        this.solve(s, ans, "", 0);
        ans.sort();
        return ans;
    }
}
```

---

### 🔹 **Optimized Permutations (In-Place)**
```javascript
var permute = function(nums) {
    const result = [];

    function permuteRecursive(nums, start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            permuteRecursive(nums, start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    permuteRecursive(nums, 0);
    return result;
};
```

---

## 🎯 **Takeaways from the Session**
✔️ **Backtracking is all about making choices & undoing them carefully!**  
✔️ **Power Sets and Subsequences follow the same recursive pattern.**  
✔️ **In-place permutations avoid unnecessary extra space.**  
✔️ **Sorting results for subsequences improves readability.**  

---

## 🚀 **Next Steps**
🔸 Solve more **backtracking** problems (like N-Queens & Combination Sum).  
🔸 Explore **Memoization** to optimize overlapping subproblems.  
🔸 Try implementing these in **TypeScript** for stronger typing.  

---

💭 **"Recursion is not just a function call; it's a journey through decision trees!"** 🌱  

---
