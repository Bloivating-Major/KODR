# 🚀 **Week 16 Day 3 - DSA Session 2** 🔥  
## 📌 **Topics Covered:**
1. **Binary Search - Revision** 🔍  
2. **Bubble Sort - Revision** 🫧  

---

## 🏹 **1️⃣ Binary Search Revision**  

### 📖 **What is Binary Search?**
Binary search is an efficient algorithm used to find a target element in a **sorted array**. It follows a divide-and-conquer approach by repeatedly halving the search range.

✅ **Time Complexity:** **O(log N)**  
✅ **Space Complexity:** **O(1)**  

---

### 🛠 **Binary Search Implementation in JavaScript**
```javascript
let arr = [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 50];
let target = 3;

let start = 0, end = arr.length - 1;
let ans = -1;

while (start <= end) {
    let mid = Math.floor((start + end) / 2); // Calculate mid index
    
    if (arr[mid] === target) {
        ans = mid;
        break;
    }
    else if (arr[mid] < target) {
        start = mid + 1; // Search in the right half
    }
    else {
        end = mid - 1; // Search in the left half
    }
}

console.log(ans); // Output: 1
```
✅ **Binary Search Steps:**
1. **Find the mid** index of the sorted array.  
2. **Compare mid with target:**  
   - If **equal**, return mid index.  
   - If **less than target**, search in the **right** half.  
   - If **greater than target**, search in the **left** half.  
3. Repeat until the element is found or `start > end`.  

---

## 🫧 **2️⃣ Bubble Sort Revision**  

### 📖 **What is Bubble Sort?**
Bubble Sort is a simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order.  

✅ **Time Complexity:** **O(N²)** in worst case  
✅ **Space Complexity:** **O(1)** (In-place sorting)  

---

### 🛠 **Bubble Sort Implementation in JavaScript**
```javascript
let arr = [5, 3, 4, 7, 2, 15, 6, 9];

console.log("Before Sorting:", arr);

let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("After Sorting:", arr);
```

✅ **Bubble Sort Steps:**
1. **Compare adjacent elements** and swap if needed.  
2. **Move the largest element to the right** after each pass.  
3. **Repeat the process** until the array is sorted.  

### 🏆 **Optimized Bubble Sort**
To improve efficiency, we introduce a **swapped flag** to detect whether the array is already sorted. If no swaps are performed in a pass, the algorithm stops early.

```javascript
function optimizedBubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap using destructuring
                swapped = true;
            }
        }
        if (!swapped) break; // Stop if no swaps happened
    }
    return arr;
}

let numbers = [5, 3, 4, 7, 2, 15, 6, 9];
console.log("Sorted Array:", optimizedBubbleSort(numbers));
```

---

## 🎯 **Key Takeaways**
### 🔍 **Binary Search**
✅ Works only on **sorted arrays**  
✅ Uses **divide and conquer** to find the target efficiently  
✅ Time Complexity: **O(log N)**  

### 🫧 **Bubble Sort**
✅ Swaps adjacent elements to **move the largest elements to the right**  
✅ Time Complexity: **O(N²)** (Not efficient for large data)  
✅ **Optimized Bubble Sort** reduces unnecessary comparisons  

---

## 🔥 **Final Thoughts**
- **Binary Search** is highly efficient for **searching in sorted data**.  
- **Bubble Sort** is useful for **small datasets** but inefficient for large-scale sorting.  
- Understanding these algorithms helps in **problem-solving and interviews**.  

🚀 **Practice these concepts regularly to master DSA!** 💡