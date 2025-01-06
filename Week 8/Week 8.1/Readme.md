# **Week 8 - Day 1: Nike Project with React and LeetCode Questions**  

Today, we worked on two exciting areas:  
1. Building components for the **Nike Project with React**.  
2. Solving **LeetCode Problem 2357 - Minimum Operations to Make the Array Zero**.  

---

## **LeetCode Problem: Minimum Operations to Make the Array Zero**  

### **Problem Description**  
You are given an array `nums` consisting of positive integers. In one operation, you can subtract the smallest non-zero element from all the non-zero elements of `nums`. Return the minimum number of operations required to make the array zero.

---

## **Solution**  

We solved this problem using two approaches:  

### **Approach 1: Optimized Solution with Set (Efficient)**  
This approach utilizes a `Set` to keep track of unique non-zero elements.  

#### **Code**  
```javascript
var minimumOperations = function(nums) {
    let uniqueValues = new Set(); // To track unique non-zero elements
    for (let num of nums) {
        if (num > 0) {
            uniqueValues.add(num);
        }
    }
    return uniqueValues.size; // Each unique non-zero value requires one operation
};
```

#### **Explanation**  
1. Create a `Set` to hold unique non-zero elements.  
2. Traverse the array. For every non-zero element, add it to the `Set`.  
3. The size of the `Set` will give the minimum number of operations.  

#### **Complexity**  
- **Time Complexity**: O(n)  
- **Space Complexity**: O(n)  

---

### **Approach 2: Brute Force Method**  

This approach repeatedly finds the smallest non-zero element, subtracts it from all non-zero elements, and counts the operations.  

#### **Code**  
```javascript
var minimumOperations = function(nums) {
    let count = 0;
    while (hasNonZero(nums)) {
        let smallest = findMinimum(nums);
        subtractMinimum(nums, smallest);
        count++;
    }
    return count;
};

function hasNonZero(nums) {
    for (let num of nums) {
        if (num !== 0) return true;
    }
    return false;
}

function findMinimum(nums) {
    let min = Infinity;
    for (let num of nums) {
        if (num !== 0) {
            min = Math.min(min, num);
        }
    }
    return min;
}

function subtractMinimum(nums, x) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[i] -= x;
        }
    }
}
```

#### **Explanation**  
1. **`hasNonZero(nums)`**: Checks if there are any non-zero elements left in the array.  
2. **`findMinimum(nums)`**: Finds the smallest non-zero element in the array.  
3. **`subtractMinimum(nums, x)`**: Subtracts the smallest non-zero element from all non-zero elements.  
4. Repeat these steps until all elements become zero, counting the operations.  

#### **Complexity**  
- **Time Complexity**: O(n^2) (due to repeated traversal and subtraction).  
- **Space Complexity**: O(1).  

---

## **Comparison of Approaches**  

| Feature               | Optimized Approach (Set) | Brute Force Approach   |
|-----------------------|--------------------------|-------------------------|
| **Time Complexity**   | O(n)                    | O(n^2)                 |
| **Space Complexity**  | O(n)                    | O(1)                   |
| **Readability**       | Easy to understand      | More verbose           |
| **Use Case**          | Preferred for large arrays | Only for small datasets |  

---

## **How to Test the Solutions**  

### **Test Cases**  
```javascript
console.log(minimumOperations([1, 5, 0, 3, 5])); // Output: 3
console.log(minimumOperations([0, 0, 0]));       // Output: 0
console.log(minimumOperations([4, 4, 4]));       // Output: 1
```

---

## **Takeaways from Today**  

1. **Optimized Problem-Solving**  
   - Learned how to use `Set` to handle unique values efficiently.  
   - Understood the benefits of reducing unnecessary iterations.  

2. **Brute Force for Concept Clarity**  
   - Practiced breaking the problem into smaller functions for better readability.  

3. **Code Testing**  
   - Importance of testing code with edge cases like arrays with zeros or repeated elements.  

---

Happy Coding! 🚀 