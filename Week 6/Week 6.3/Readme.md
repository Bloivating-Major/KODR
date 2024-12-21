# **DSA Session: Binary Search** 🔍

In today's **DSA Session**, we explored the **Binary Search** algorithm, a fundamental concept for efficiently searching elements in sorted arrays. This algorithm significantly reduces the time complexity compared to linear search by halving the search space at every step.

---

## **🔑 Key Concepts**

### **1. What is Binary Search?**
Binary Search is a search algorithm used on **sorted arrays**. It works by repeatedly dividing the search interval in half:
- Compare the target element with the middle element.
- If the middle element is the target, return its index.
- If the target is smaller, narrow the search to the left half.
- If the target is larger, narrow the search to the right half.
- Repeat until the element is found or the interval is empty.

---

### **2. Algorithm Steps**
1. Initialize two pointers:
   - `start` pointing to the beginning of the array.
   - `end` pointing to the end of the array.
2. While `start <= end`:
   - Calculate the middle index:  
     ```javascript
     mid = Math.floor((start + end) / 2);
     ```
   - Compare the middle element with the target:
     - If `arr[mid] == searchElem`, return the index.
     - If `arr[mid] > searchElem`, move the `end` pointer to `mid - 1`.
     - If `arr[mid] < searchElem`, move the `start` pointer to `mid + 1`.
3. If the element is not found, return `-1`.

---

## **🖥️ Code Implementation**
Here’s the implementation of **Binary Search** in JavaScript:

```javascript
function binarySearch(arr, searchElem) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == searchElem) return mid; // Element found
    else if (arr[mid] > searchElem) end = mid - 1; // Search in the left half
    else start = mid + 1; // Search in the right half
  }

  return -1; // Element not found
}

// Example usage:
let arr = [5, 8, 10, 12, 16, 17, 35, 40, 55, 75];
let elem = Number(prompt("Enter Search Element: "));

let index = binarySearch(arr, elem);
if (index == -1) console.log("Not Found");
else console.log("Found at index " + index);
```

---

## **🔢 Example**

### Input:
Array: `[5, 8, 10, 12, 16, 17, 35, 40, 55, 75]`  
Search Element: `16`

### Process:
1. Initial `start = 0`, `end = 9`, `mid = 4`.
2. Compare `arr[mid] = 16` with `16`.  
   - They are equal.  
   - Return `mid = 4`.

### Output:
```
Found at index 4
```

---

## **📝 Key Takeaways**
- **Efficient**: Binary Search has a time complexity of **O(log n)**, making it much faster than linear search (**O(n)**) for large datasets.
- **Works Only on Sorted Arrays**: Ensure your array is sorted before applying Binary Search.
- **Divide and Conquer**: This algorithm exemplifies the divide-and-conquer strategy, reducing the search space by half at every iteration.

---

## **🚀 Applications**
- Searching in **sorted datasets**.
- **Database indexing** for faster retrieval.
- **Competitive programming** problems where time efficiency is crucial.

---

## **💡 Practice Problem**
Try implementing Binary Search to find an element in a rotated sorted array! 🚀  
**Example**:  
Array: `[12, 16, 17, 35, 40, 55, 75, 5, 8, 10]`  
Search Element: `8`

---

This session provided a clear understanding of how to implement and optimize searches using Binary Search. Keep practicing to strengthen your problem-solving skills! 🎉