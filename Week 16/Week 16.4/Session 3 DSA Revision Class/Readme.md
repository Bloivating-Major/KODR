# 🚀 **Week 16 Day 4 - Session 3 (DSA Revision: Selection Sort & Insertion Sort)** 🔢  

## 📌 **Topics Covered:**  
✅ **Selection Sort Algorithm** 🎯  
✅ **Insertion Sort Algorithm** 🏗️  
✅ **Sorting Step-by-Step Explanation** 🛠️  
✅ **Optimized Approach for Sorting** ⚡  

---

## 🔢 **Selection Sort: Finding the Minimum**  
📌 **Concept:**  
Selection Sort works by **finding the smallest element** and placing it at the **correct position** step by step.

📜 **Algorithm Steps:**  
1️⃣ Start from the first element.  
2️⃣ Find the **smallest element** in the remaining **unsorted** portion.  
3️⃣ Swap it with the **first unsorted element**.  
4️⃣ Repeat the process for the **next position** until the array is sorted.  

---

## 📜 **Selection Sort Code:**
```javascript
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i; // Assume current index is minimum
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j; // Find minimum in remaining array
        }
        if (i !== min) { // Swap if needed
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr = [7, 10, 12, 6, 1];
console.log("Before Sorting:", arr);
console.log("After Selection Sort:", selectionSort(arr));
```

✅ **Time Complexity:**  
- **Best Case:** `O(n²)`  
- **Worst Case:** `O(n²)`  
- **Space Complexity:** `O(1) (In-place sort)`

---

## 🔄 **Insertion Sort: Building a Sorted Array**  
📌 **Concept:**  
Insertion Sort works like sorting playing cards in your hand. It **shifts elements** to make space for the **current element** and places it at the correct position.

📜 **Algorithm Steps:**  
1️⃣ Start from the **second element**.  
2️⃣ Compare it with **previous elements**.  
3️⃣ Shift elements if needed to make space.  
4️⃣ Insert the **current element** at its correct position.  
5️⃣ Repeat for all elements.

---

## 📜 **Insertion Sort Code:**
```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // Pick the current element
        let previous = i - 1; // Start comparing from the previous element
        while (previous >= 0 && arr[previous] > current) {
            arr[previous + 1] = arr[previous]; // Shift elements
            previous--;
        }
        arr[previous + 1] = current; // Place current element in correct position
    }
    return arr;
}

let arr2 = [7, 10, 12, 6, 1];
console.log("Before Sorting:", arr2);
console.log("After Insertion Sort:", insertionSort(arr2));
```

✅ **Time Complexity:**  
- **Best Case:** `O(n)` (Already Sorted)  
- **Worst Case:** `O(n²)`  
- **Space Complexity:** `O(1) (In-place sort)`

---

## 🎯 **Key Takeaways:**  
🔹 **Selection Sort**: Always swaps the **smallest element** into position.  
🔹 **Insertion Sort**: **Shifts elements** to insert elements in the correct position.  
🔹 **Insertion Sort is faster for small arrays or nearly sorted data.**  

---

## 🚀 **Final Thoughts**  
🎉 Congratulations! You've revised **Selection Sort & Insertion Sort** with **step-by-step implementation**.  
🔹 **Next Steps:**  
✅ Implement **Bubble Sort** for further comparison.  
✅ Optimize sorting by using **Merge Sort or Quick Sort**.  
✅ Solve **LeetCode sorting problems** for practice!  

💡 **Keep Learning, Keep Growing!** 💻🔥