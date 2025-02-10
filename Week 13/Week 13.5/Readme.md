# 📌 **Week 13 - Day 5: DSA - Sorting Algorithms** 🔢🚀  

## **🔍 What We Covered Today**
Today, we explored **sorting algorithms** with a focus on **stable vs. unstable sorting** and implemented **Bubble Sort, Selection Sort, and Insertion Sort** in JavaScript.

✅ **Stable vs. Unstable Sorting**  
✅ **Bubble Sort** 🫧  
✅ **Selection Sort** 🎯  
✅ **Insertion Sort** 📌  

---

## **📌 Stable vs. Unstable Sorting Algorithms**  

🔹 **Stable Sorting Algorithm**: Maintains the relative order of equal elements.  
🔹 **Unstable Sorting Algorithm**: Can change the relative order of equal elements.  

| **Algorithm**      | **Stable?** |
|--------------------|------------|
| **Bubble Sort** 🫧 | ✅ Stable   |
| **Selection Sort** 🎯 | ❌ Unstable |
| **Insertion Sort** 📌 | ✅ Stable   |

---

## **🛠️ Implemented Sorting Algorithms**
### 📌 **Bubble Sort (Stable)**
Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order.

```javascript
function BubbleSort(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // Optimization: If no swap, array is sorted
    }
}
```
🔹 **Time Complexity**:  
- Best Case (Already Sorted): **O(n)**  
- Worst & Average Case: **O(n²)**  
🔹 **Stable?** ✅ Yes  

---

### 🎯 **Selection Sort (Unstable)**
Selection Sort repeatedly selects the smallest element and swaps it to the correct position.

```javascript
function SelectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}
```
🔹 **Time Complexity**: **O(n²)** (always)  
🔹 **Stable?** ❌ No  

---

### 📌 **Insertion Sort (Stable)**
Insertion Sort builds the sorted array one element at a time, placing each element in its correct position.

```javascript
function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```
🔹 **Time Complexity**:  
- Best Case (Already Sorted): **O(n)**  
- Worst & Average Case: **O(n²)**  
🔹 **Stable?** ✅ Yes  

---

## **🚀 Key Takeaways**
✅ **Bubble Sort & Insertion Sort are Stable** 🏆  
✅ **Selection Sort is Unstable** ❌  
✅ **Insertion Sort is Efficient for Small or Nearly Sorted Data** 🏁  
✅ **Selection Sort has Consistent O(n²) Time Complexity**  

---

## **🔜 Next Steps**
🔹 Implement **Merge Sort** and **Quick Sort**  
🔹 Compare **Time Complexity & Stability** of Different Sorting Algorithms  
🔹 Optimize Sorting Techniques for Large Datasets  

**Happy Coding! 🚀**

## 🚀 Week 13 - Day 5: **Backend - Extra Security Layer via Config File 🔒**  

### **📌 What We Learned Today**
Today, we implemented an **additional security layer** in our backend by using a **config file** to store essential environment variables securely.  

✅ **Centralized Configuration Management 📂**  
✅ **Prevention of Hardcoded Secrets 🔑**  
✅ **Improved Code Maintainability & Security 🚀**  

---

## **🛠️ Why Use a Config File?**
🔹 **Security**: Prevents hardcoding sensitive information like database URLs or API keys.  
🔹 **Flexibility**: Easily update configurations without modifying multiple files.  
🔹 **Environment-Specific Settings**: Allows different configurations for development, testing, and production.  

---

## **📌 Implementing the Config File**
We created a **config file** to manage environment variables **securely** and **efficiently**.

### **📂 File: `config.js`**
```javascript
const _config = {
    PORT: process.env.PORT || 3000,  // 🌍 Fallback to 3000 if PORT is not set
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/extraSecure",  // 🛡️ Secure DB Connection
};

// 🔒 Freezing the object to prevent modifications
const config = Object.freeze(_config);

module.exports = config;
```

---

## **📌 How It Works?**
1️⃣ **Reads environment variables (`.env` file)** using `process.env`.  
2️⃣ **Provides fallback values** if environment variables are missing.  
3️⃣ **Freezes the configuration object** using `Object.freeze()` to prevent accidental modifications.  
4️⃣ **Exports the config object** so it can be used across the project.  

---

## **📌 How to Use the Config File?**
Simply import the config file in **`server.js`** or any other file:

```javascript
const config = require("./config"); 

console.log("Server running on port:", config.PORT);
console.log("Connected to Database:", config.MONGO_URL);
```

---

## **🚀 Key Takeaways**
✅ **Better security** by avoiding hardcoded credentials.  
✅ **Easier environment management** for different setups (development, staging, production).  
✅ **Prevents accidental modifications** by freezing the config object.  

---

## **🔜 Next Steps**
🔹 Implement **dotenv** (`npm i dotenv`) for better **environment management**.  
🔹 Add **CORS protection & Helmet.js** for additional **security layers**.  
🔹 Secure **JWT Authentication Tokens** using **config-based secrets**.  

🔹 **Happy Coding! 🚀**