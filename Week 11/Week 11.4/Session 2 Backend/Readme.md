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