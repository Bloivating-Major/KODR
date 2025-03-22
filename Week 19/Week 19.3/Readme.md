
# 📚 **Week 19 Day 3 - DSA**
## 🚀 **Topics Covered**
✅ **Next Greater Element (GFG)**  
✅ **Smaller Element on the Left**  
✅ **Help Classmate Problem**  
✅ **Stock Span Problem**  

---

## **🛠️ Problem 1: Next Greater Element (GFG)**
**🔹 Problem Statement:**  
Given an array, find the **Next Greater Element (NGE)** for each element in the array.  
The **NGE** of an element is the **first greater** element to its **right**. If no greater element exists, return `-1`.  

### **💡 Approach (Stack)**
- Traverse the array **from right to left**.
- Use a **monotonic decreasing stack** to keep track of greater elements.
- Pop smaller elements from the stack before inserting the current element.
- The top of the stack after popping gives the next greater element.

### **🔢 Implementation**
```javascript
function nextGreaterElement(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop(); // Remove smaller elements
        }
        
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1]; // Next greater element
        }

        stack.push(arr[i]); // Push current element
    }

    return result;
}

// ✅ Example Usage
console.log(nextGreaterElement([1, 3, 2, 4])); // Output: [3, 4, 4, -1]
```

---

## **🛠️ Problem 2: Smaller on Left Element**
**🔹 Problem Statement:**  
Given an array, find the **greatest smaller element** for each element in the array appearing **before it**.

### **💡 Approach**
- Use a **Set** to maintain elements in sorted order.
- For each element, find the **maximum smaller element** from the Set.
- Insert the current element in the Set to use it for future queries.

### **🔢 Implementation**
```javascript
function smallestOnLeft(arr, n) {
    let ans = [];
    let sortedSet = new Set(); // To maintain sorted order
    
    for (let i = 0; i < n; i++) {
        let maxSmaller = -1;
        
        // Iterate over sortedSet to find the greatest smaller element
        for (let val of sortedSet) {
            if (val < arr[i]) {
                maxSmaller = val;
            } else {
                break; // No need to check further as it's sorted
            }
        }
        
        ans.push(maxSmaller);
        sortedSet.add(arr[i]); // Insert the current element
    }
    
    return ans;
}

// ✅ Example Usage
console.log(smallestOnLeft([3, 5, 4, 2, 2, 5, 5, 4, 2, 5], 10)); 
// Output: [-1, 3, 3, -1, -1, 4, 4, 3, -1, 4]
```

---

## **🛠️ Problem 3: Help Classmate**
**🔹 Problem Statement:**  
Given an array representing **students' heights**, find the **nearest shorter student** on the **right** for each student.  

### **💡 Approach**
- Traverse the array from **right to left**.
- Use a **monotonic increasing stack** to track smaller heights.
- The nearest smaller height is found at the **top of the stack** after popping larger elements.

### **🔢 Implementation**
```javascript
class Solution {
    help_classmate(arr,n){
        const stack = []
        const students = new Array(n).fill(-1)
 
        for(let i = n-1; i >= 0; i--){
            while(stack.length > 0 && stack[stack.length -1] >= arr[i]){
                stack.pop()
            }
            
            let len = stack.length
            if (len > 0) students[i] = stack[len-1]
            
            stack.push(arr[i])
        }
        
        return students
    }
}
```

---

## **🛠️ Problem 4: Stock Span Problem**
**🔹 Problem Statement:**  
Given daily **stock prices**, find the **span** for each day.  
Span is the count of **consecutive** days before the current day where the stock price is **less than or equal** to today’s price.

### **💡 Approach (Stack)**
- Use a **monotonic decreasing stack**.
- Store **indices** in the stack to calculate the span.
- If the stack is **empty**, span is `i + 1` (all previous days had lower price).
- Otherwise, span is the difference between the current index and the last greater element.

### **🔢 Implementation**
```javascript
class SolutionQ4 {
    calculateSpan(arr) {
        let n = arr.length;
        let span = new Array(n);
        let stk = [];

        for (let i = 0; i < n; i++) {
            while (stk.length > 0 && arr[stk[stk.length - 1]] <= arr[i]) {
                stk.pop();
            }

            span[i] = stk.length === 0 ? (i + 1) : (i - stk[stk.length - 1]);

            stk.push(i);
        }

        return span;
    }
}

// ✅ Example Usage
let solution = new SolutionQ4();
console.log(solution.calculateSpan([100, 80, 60, 70, 60, 75, 85])); 
// Output: [1, 1, 1, 2, 1, 4, 6]
```

---

## 🎯 **Key Takeaways**
✅ **Stacks help in solving problems with Next Greater / Smaller elements efficiently.**  
✅ **Monotonic Stacks are powerful for problems involving previous or next elements.**  
✅ **Set can be used to maintain order for finding elements in a sorted fashion.**  
✅ **Stock Span Problem can be solved efficiently using Stack instead of brute force O(N²) approach.**  

---

🎯 **Next Steps:**  
🚀 Solve more **Stack-based problems on Leetcode & GFG**  
🚀 Understand **Monotonic Stacks & Sliding Window Problems**  
🚀 Implement **Stack using Queue & Queue using Stack**  

🔥 **Great Work! Keep Practicing DSA Consistently!** 🚀