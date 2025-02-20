# 📚 **Week 15 Day 4 - DSA Revision Session - Homework Questions** 🔥  

## **📝 Topics Covered:**
✅ **Checking if an Array is Sorted**  
✅ **Reversing an Array**  
✅ **Left Rotation of an Array (By 1 & K times)**  
✅ **Optimization Techniques for Array Rotations**  

---

## 🚀 **1. Checking if an Array is Sorted**  
📌 **Problem:** Given an array, check whether it is sorted in **ascending order** or not.  

### **🔢 Example**
```javascript
Input: arr = [1, 2, 3, 4, 5]
Output: Sorted ✅

Input: arr = [5, 3, 4, 2, 1]
Output: Not Sorted ❌
```

### **✅ Solution**
```javascript
function Question1(arr){
    let flag = 1;

    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            flag = 0;
            break;
        }
    }
    
    if(flag) console.log("Sorted ✅");
    else console.log("Not Sorted ❌");
}

Question1([1, 2, 3, 4, 5]); // Output: Sorted ✅
Question1([5, 3, 4, 2, 1]); // Output: Not Sorted ❌
```
---

## 🔄 **2. Reversing an Array**
📌 **Problem:** Reverse a given array **in-place**.  

### **🔢 Example**
```javascript
Input: arr = [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
```

### **✅ Solution**
```javascript
function Question2(arr){
    let i = 0, j = arr.length-1;

    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++, j--;
    }

    console.log(arr);
}

Question2([1, 2, 3, 4, 5]); // Output: [5, 4, 3, 2, 1]
```
---

## 🔄 **3. Left Rotation of an Array by 1**
📌 **Problem:** Rotate an array **left by 1 position**.  

### **🔢 Example**
```javascript
Input: arr = [1, 2, 3, 4, 5]
Output: [2, 3, 4, 5, 1]
```

### **✅ Solution**
```javascript
function Question3(arr){
    let temp = arr[0];
    for(let i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    console.log(arr);
}

Question3([1, 2, 3, 4, 5]); // Output: [2, 3, 4, 5, 1]
```
---

## 🔄 **4. Left Rotation of an Array by K**
📌 **Problem:** Rotate an array **left by `K` positions** efficiently.  
📌 **Optimization:** Instead of doing **K** iterations, we reduce it to `K % arr.length` to avoid redundant rotations.

### **🔢 Example**
```javascript
Input: arr = [1, 2, 3, 4, 5], k = 13
Output: [4, 5, 1, 2, 3]
```

### **✅ Solution**
```javascript
function Question3v2(arr, k){
    k = k % arr.length; // Optimization: Avoid extra rotations
    let n = 1;
    
    while(n <= k){
        let temp = arr[0];
        for(let i = 0; i < arr.length-1; i++){
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = temp;
        n++;
    }
    
    console.log(arr);
}

Question3v2([1, 2, 3, 4, 5], 13); // Output: [4, 5, 1, 2, 3]
```
---

## 🏆 **Key Takeaways**
🔹 **Checking Sorted Array:** Use a simple **for loop** to check if elements are in increasing order.  
🔹 **Reversing an Array:** Use **two-pointer swapping technique** for `O(N)` efficiency.  
🔹 **Left Rotation by 1:** Shift elements left & move first element to the last position.  
🔹 **Left Rotation by K:** Reduce redundant operations using `K % arr.length` for efficiency.  
