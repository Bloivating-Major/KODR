# 📌 **Week 14 - Day 1: DSA - Merge Sort & Quick Sort** 🚀🔢  

## **🔍 What We Covered Today**
Today, we dived into two powerful **divide and conquer** sorting algorithms:  

✅ **Merge Sort** 🧩  
✅ **Quick Sort** ⚡  

---

## **🛠️ Implemented Sorting Algorithms**
### 📌 **Merge Sort (Stable)**
Merge Sort is a **divide and conquer** algorithm that:  
1. **Divides** the array into halves.  
2. **Sorts** each half recursively.  
3. **Merges** the sorted halves.  

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i]);
            i++;
        } else {
            sortedArr.push(right[j]);
            j++;
        }
    }

    return [...sortedArr, ...left.slice(i), ...right.slice(j)];
}

let arr = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(mergeSort(arr));
```
🔹 **Time Complexity**: **O(n log n)** (always)  
🔹 **Stable?** ✅ Yes  

---

### ⚡ **Quick Sort (Unstable)**
Quick Sort also follows **divide and conquer** but chooses a **pivot** and:  
1. Places smaller elements **left** of pivot.  
2. Places larger elements **right** of pivot.  
3. Recursively sorts both sides.

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    let pivot = arr[arr.length - 1]; // Choosing last element as pivot
    let left = [], right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(quickSort(arr));
```
🔹 **Time Complexity**:  
- **Best & Average Case**: **O(n log n)**  
- **Worst Case (if pivot is smallest/largest)**: **O(n²)**  
🔹 **Stable?** ❌ No  

---

## **📊 Merge Sort vs Quick Sort**
| Feature       | Merge Sort 🧩 | Quick Sort ⚡ |
|--------------|--------------|--------------|
| **Time Complexity (Best/Average)** | O(n log n) | O(n log n) |
| **Time Complexity (Worst)** | O(n log n) | O(n²) |
| **Space Complexity** | O(n) (extra array) | O(log n) (recursive calls) |
| **Stable Sorting?** | ✅ Yes | ❌ No |
| **Used In** | Large datasets | Fast in practice |

---

## **🚀 Key Takeaways**
✅ **Merge Sort** is always **O(n log n)** but uses extra space 🧩  
✅ **Quick Sort** is faster **in practice** but can be **O(n²) worst case** ⚡  
✅ **Merge Sort is Stable**, while **Quick Sort is Unstable**  
✅ **Quick Sort is great for in-memory sorting** due to **low space usage**  

---

## **🔜 Next Steps**
🔹 Implement **Heap Sort & Radix Sort**  
🔹 Optimize Quick Sort with **randomized pivot selection**  
🔹 Compare **real-world performance** of sorting algorithms  

✨ **Happy Coding! 🚀**