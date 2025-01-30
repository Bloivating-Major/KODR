# 🌟 Week 11 - Day 4: DSA Session 1 (Factors of a Number)  

Today, we delved into the **fascinating world of factors** using **JavaScript**. Here's a detailed overview of what we learned and the code implementations we explored! 🚀  

---

## 🧠 **Key Concept: Factors of a Number**  

**Factors** of a number `n` are the integers that divide `n` without leaving a remainder.  
For example, the factors of `100` are:  
`1, 2, 4, 5, 10, 20, 25, 50, 100`.  

---

## 📜 **Code Implementations**  

### 🔢 **Question 1: Efficiently Finding Factors of a Number**  

#### **Approach**:  
1. Loop from `1` to `sqrt(n)`:
   - If `i` divides `n` evenly (`n % i === 0`), then:
     - Add both `i` and `n/i` to the list of factors.
     - Ensure `i` is not added twice when it's the square root of `n`.
2. Sort the list of factors in ascending order for better readability.

#### **Code**:  
```javascript
function Question1() {
    let n = 100; // The number whose factors are to be found
    let arr = []; // Array to store factors

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                // If i is the square root of n, add it once
                arr.push(i);
            } else {
                // Add both i and n/i
                arr.push(i);
                arr.push(n / i);
            }
        }
    }

    arr.sort((a, b) => a - b); // Sort the factors in ascending order
    console.log(arr); // Output the factors
}

// Call the function
Question1();
```

#### **Output**:  
For `n = 100`, the output will be:  
`[1, 2, 4, 5, 10, 20, 25, 50, 100]`.  

---

### 📚 **Alternative Implementation: Printing Factors**  

This version enhances the output by printing the factors as a comma-separated string.  

#### **Code**:  
```javascript
function printFactors(n) {
    let result = []; // Array to store factors

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                // If i is the square root of n, add it once
                result.push(i);
            } else {
                // Add both i and n/i
                result.push(i);
                result.push(n / i);
            }
        }
    }

    result.sort((a, b) => a - b); // Sort factors in ascending order
    console.log(result.join(",")); // Join factors with commas and print
}

// Call the function
printFactors(100);
```

#### **Output**:  
For `n = 100`, the output will be:  
`1,2,4,5,10,20,25,50,100`.  

---

## 💡 **Why Use Square Root Optimization?**  
1. **Efficiency**: Instead of iterating through all numbers up to `n`, we only loop up to `sqrt(n)`.  
2. **Avoid Redundancy**: Both `i` and `n/i` are captured in a single iteration.  
3. **Real-Life Use**: Efficient for large numbers, making it ideal for competitive programming and real-world applications.

---

## 🧩 **Key Takeaways**  
- **Factors** are numbers that divide `n` without leaving a remainder.  
- Using **square root optimization** is crucial for efficiently finding factors.  
- Sorting and presenting data in a clean format (e.g., comma-separated) improves readability.  

---

## ✨ **What's Next?**  
This session laid the groundwork for understanding factors. In future sessions, we'll explore advanced mathematical concepts like **prime factorization**, **GCD/LCM**, and their applications in solving real-world problems! 🌐  

Happy Coding! 🎉  

# 🚀 Week 11 - Day 4: Backend Session 2  
## 🔐 **Learning About Environment Variables in Node.js**  

Today, we explored **environment variables** and how to use them in a **Node.js + Express + MongoDB** project! 🌍✨  

---

## **📌 Steps We Followed**  

### 🔹 **Step 1: Initialize the Project**  
We started by setting up our Node.js project:  

```bash
npm init -y
npm i ejs mongoose express dotenv
```
This installs:  
- **EJS** → Templating engine 🖼️  
- **Mongoose** → MongoDB Object Modeling 🛢️  
- **Express** → Web framework 🚀  
- **dotenv** → Load environment variables 🔐  

---

### 🔹 **Step 2: Create a `.env` File**  
The `.env` file stores **sensitive information** (e.g., database connection URL, API keys).  

📍 **Example `.env` File**  
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydatabase
SECRET_KEY=mySuperSecretKey
```
> ⚠️ **Important:** Always add `.env` to your **.gitignore** to prevent accidental leaks!  

---

### 🔹 **Step 3: Load Environment Variables in `server.js`**  
To use environment variables, we **import `dotenv` and call `.config()`**.  

📍 **`server.js`**  
```javascript
require("dotenv").config();  // Load environment variables

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;  // Use .env variable or default to 3000
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.log("❌ MongoDB Connection Failed", err));

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
```
> 🎯 **Key Points:**  
> - **`process.env.PORT`** → Fetches `PORT` from `.env`  
> - **`process.env.MONGO_URI`** → Fetches `MONGO_URI` from `.env`  
> - **`dotenv.config()`** → Loads all environment variables  

---

### 🔹 **Step 4: Using Environment Variables in the Project**  

Now, we can use **environment variables** anywhere in our project!  

📍 **Example Usage in a Database Connection File (`db.js`)**  
```javascript
const mongoose = require("mongoose");
require("dotenv").config();  // Load environment variables

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Database Connected"))
    .catch(err => console.log("❌ Database Connection Error", err));

module.exports = mongoose;
```

📍 **Example Usage in a Secret Key (`auth.js`)**  
```javascript
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const token = jwt.sign({ userId: 123 }, secretKey, { expiresIn: "1h" });
console.log("Generated Token:", token);
```

---

## **🎯 What We Learned Today**  
✅ **What are Environment Variables?**  
✅ **How to Store Environment Variables in `.env`**  
✅ **How to Use `dotenv` in Node.js**  
✅ **Securely Store Sensitive Data (like API keys, database URIs)**  

🚀 **Great Work! Keep Coding!** 🔥💡