# 🚀 **Week 16 Day 3 - Backend Session 1** 🔥  
## 📌 **Topics Covered:**  
✅ **Connecting Frontend to Backend** 🔗  
✅ **Creating Register & Login Routes** 👤🔑  

---

## 📡 **1️⃣ Connecting Frontend to Backend**  

### 🏗 **Steps to Connect Frontend & Backend:**
1. **Setup Backend (Express + MongoDB)**  
   - Install dependencies:  
     ```bash
     npm init -y  
     npm install express mongoose dotenv cors bcrypt jsonwebtoken  
     ```
   - Create a **server.js** file:
     ```javascript
     require("dotenv").config();
     const express = require("express");
     const connectDB = require("./src/db/db");
     const userRoutes = require("./src/routes/user.routes");

     const app = express();

     // Middleware
     app.use(express.json());
     app.use(express.urlencoded({ extended: true }));
     app.use(require("cors")());

     // Database Connection
     connectDB();

     // Routes
     app.use("/api/user", userRoutes);

     // Start Server
     app.listen(process.env.PORT, () => {
       console.log(`Server started on port ${process.env.PORT}`);
     });
     ```
   
---

## 🔐 **2️⃣ Register & Login Routes (Backend)**  

### 📝 **Register Route**
- Takes `username`, `email`, and `password` from the frontend.
- Hashes the password before saving to the database.
- Returns a **JWT Token** for authentication.

```javascript
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    let userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ token, user: newUser, message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

---

### 🔑 **Login Route**
- Verifies **email** and **password**.
- Generates a **JWT token** if credentials are valid.

```javascript
module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Email or Password" });

    // Compare password
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) return res.status(400).json({ message: "Invalid Email or Password" });

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ token, user, message: "User logged in successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

---

## 🎨 **3️⃣ Connecting React Frontend with API**
### 📡 **Axios POST Request for Register**
```javascript
import axios from "axios";

const handleRegister = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/user/register", {
      username,
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    navigate("/profile");
  } catch (err) {
    console.error(err);
    if (err.response?.data?.message) {
      setError(err.response.data.message);
    }
  }
};
```

---

## 🎯 **Key Takeaways**
✅ **Backend is built with Express & MongoDB.**  
✅ **JWT-based authentication for security.**  
✅ **Password hashing with bcrypt.**  
✅ **React frontend sends requests to backend using Axios.**  

---

🚀 **With this setup, your frontend & backend are now fully connected!** 🎉