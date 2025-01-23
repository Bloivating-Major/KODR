# 🌟 Week 11 - Day 1: DSA & Backend Adventures 🚀  

Today, we delved into two exciting domains: **Recursion in DSA** and **User Models & Schemas in Backend Development**! Here's a detailed and creative breakdown of everything we learned. 🌟  

---

## 🧩 **Session 1: DSA - Understanding Recursion**  

Recursion is a powerful tool in programming that allows a function to call itself to solve a problem. It breaks down larger problems into smaller, manageable ones. Let's explore what we covered today:  

### 🔍 **What is Recursion?**  
Recursion is when a function calls itself until a base condition is met. Think of it as solving a problem step by step by reducing its size.  

### ✨ **Key Examples**  

#### 1️⃣ **Print "Hello World" N Times Using Recursion**  
```javascript
function printHello(n) {
    if (n === 0) return; // Base condition
    console.log("Hello World");
    printHello(n - 1); // Recursive call
}

printHello(5);
```

#### 2️⃣ **Print Numbers from N to 1**  
```javascript
function printNumber(n) {
    if (n === 0) return; // Base condition
    console.log(n);
    printNumber(n - 1); // Recursive call
}

printNumber(5);
```

#### 3️⃣ **Print Numbers from 1 to N**  
```javascript
function printNumberFrom1(n) {
    if (n === 0) return; // Base condition
    printNumberFrom1(n - 1); // Recursive call
    console.log(n);
}

printNumberFrom1(5);
```

---

## 💻 **Session 2: Backend - User Model, Schema & Database Connection**  

In this session, we learned how to create a **User Model** and connect it to our **MongoDB Database** using Mongoose. Let’s dive into the details:  

### 🗂️ **Steps We Followed**  

#### 1️⃣ **User Schema Creation**  
We created a schema that defines the structure of our **user documents** in MongoDB.  
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

#### 2️⃣ **Database Connection**  
We connected our backend server to the **MongoDB database**.  
```javascript
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myDatabase", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });
```

#### 3️⃣ **Server File Configuration**  
We ensured the server is ready to interact with the database and handle API requests.  
```javascript
const express = require("express");
const app = express();
const mongoose = require("./db/db"); // Database connection file

app.use(express.json());

// Example route
app.get("/", (req, res) => {
    res.send("🌟 Welcome to the Backend Server!");
});

app.listen(3000, () => {
    console.log("🚀 Server is running on port 3000");
});
```

---

## 🌟 **Highlights of the Day**  

### 📚 **DSA Takeaways**  
- Learned the **fundamentals of recursion** and how to apply it to real-world problems.  
- Solved problems like **printing numbers**, **factorials**, and **simple iterations** using recursion.  

### 🛠️ **Backend Takeaways**  
- Created a **User Model** and learned about **Schemas** in MongoDB.  
- Successfully **connected to the database** and ensured smooth integration.  
- Enhanced our understanding of **backend workflows** with **Express.js** and **Mongoose**.  

---

## 🎯 **What’s Next?**  
- Explore advanced recursion problems like **factorials**, **Fibonacci series**, and **maze solving**.  
- Dive deeper into backend topics like **authentication**, **CRUD operations**, and **API design**.  

---

🔥 **Keep Learning, Keep Building!** 🚀