# 🚀 **Week 14 Day 5 - DSA Session 2** 🔍  
## **Binary Search & LeetCode Practice Problems**  

---

## 📌 **Concepts Covered:**  
✅ **Binary Search Algorithm**  
✅ **Finding First & Last Occurrence of a Target in a Sorted Array**  
✅ **LeetCode 34 - First and Last Position of Element in Sorted Array**  
✅ **LeetCode 704 - Binary Search**  
✅ **LeetCode 162 - Find Peak Element**  
✅ **LeetCode 153 - Find Minimum in Rotated Sorted Array**  

---

## **💡 Understanding Binary Search**
Binary Search is an efficient search algorithm that works on a **sorted array**. It repeatedly divides the search interval in half until the target value is found.

### **⏳ Time Complexity:**  
- **Best Case:** `O(1)` (When the middle element is the target)  
- **Worst & Average Case:** `O(log N)` (Each step reduces the search space by half)

---

# **💻 LeetCode Problems & Solutions**
### **📝 1. LeetCode 34 - First and Last Position of Element in Sorted Array**
📌 **Problem:**  
Find the **first** and **last occurrence** of a given target in a sorted array. If the target is not found, return `[-1, -1]`.

### **🔢 Example**
```javascript
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Input: nums = [1,2,3,4,5,6,7], target = 9
Output: [-1,-1]
```

### **✅ Solution**
```javascript
function BinarySearch(nums, target, firstPosition) {
    let ans = -1, first = 0, last = nums.length - 1;

    while (first <= last) {
        let mid = first + Math.floor((last - first) / 2);

        if (nums[mid] == target) {
            ans = mid; // Store index
            if (firstPosition) last = mid - 1; // Move left for first occurrence
            else first = mid + 1; // Move right for last occurrence
        } 
        else if (nums[mid] > target) last = mid - 1;
        else first = mid + 1;
    }
    return ans;
}

function LeetCode34() {
    let nums = [5, 7, 7, 8, 8, 10], target = 8;
    return [BinarySearch(nums, target, true), BinarySearch(nums, target, false)];
}

console.log(LeetCode34()); // Output: [3,4]
```
---

### **📝 2. LeetCode 704 - Binary Search**
📌 **Problem:**  
Given a sorted array and a target, return its index. If not found, return `-1`.

### **🔢 Example**
```javascript
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
```

### **✅ Solution**
```javascript
function search(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}

console.log(search([-1,0,3,5,9,12], 9)); // Output: 4
```
---

### **📝 3. LeetCode 162 - Find Peak Element**
📌 **Problem:**  
A peak element is an element that is greater than its neighbors. Find a peak element and return its index.

### **🔢 Example**
```javascript
Input: nums = [1,2,3,1]
Output: 2
```

### **✅ Solution**
```javascript
function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) right = mid;
        else left = mid + 1;
    }

    return left;
}

console.log(findPeakElement([1,2,3,1])); // Output: 2
```
---

### **📝 4. LeetCode 153 - Find Minimum in Rotated Sorted Array**
📌 **Problem:**  
Given a rotated sorted array, find the **minimum** element.

### **🔢 Example**
```javascript
Input: nums = [3,4,5,1,2]
Output: 1
```

### **✅ Solution**
```javascript
function findMin(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }

    return nums[left];
}

console.log(findMin([3,4,5,1,2])); // Output: 1
```
---

# 🎯 **Key Takeaways**
🔹 **Binary Search** efficiently reduces search space by half at each step.  
🔹 **Variations of Binary Search:**
   - First & Last Occurrence of an Element  
   - Peak Element Detection  
   - Minimum Element in Rotated Sorted Array  
🔹 **Time Complexity:** `O(log N)` in all cases.  

🔥 **Keep practicing, and happy coding!** 🚀