Here’s a **beautiful README** with proper explanations and emojis for **Week 12 - Day 4, Session 2 (Backend: Authentication System)**.  

---

# 🚀 **User Authentication System (Week 12 - Day 4, Session 2 - Backend)**  
A **secure authentication system** built using **Node.js, Express, MongoDB, bcrypt, and JWT** to handle **User Registration, Login, and Profile Authentication**.

---

## **📌 Features**
✅ **User Registration** (Hash password before saving)  
✅ **User Login** (Verify email & password)  
✅ **JWT Token Generation** (For authentication)  
✅ **Protected Profile Route** (Access user details via token)  
✅ **Error Handling & Validation**  

---

## **🛠 Technologies Used**
- **Node.js** (Backend Server)  
- **Express.js** (API Framework)  
- **MongoDB** (Database)  
- **Mongoose** (ODM for MongoDB)  
- **bcrypt** (Password Hashing)  
- **jsonwebtoken (JWT)** (Authentication)

---

## **📂 Folder Structure**
```
/project-folder
│── /src
│   ├── /models
│   │   ├── user.model.js    # User Schema
│   │
│   ├── /controllers
│   │   ├── user.controller.js  # Authentication Controllers
│   │
│   ├── /routes
│   │   ├── user.routes.js  # API Routes for User Authentication
│   │
│   ├── /db
│   │   ├── db.js  # MongoDB Connection File
│   │
│── server.js  # Main entry point
│── .env  # Environment Variables
│── package.json  # Project Dependencies
```

---

## **🔧 Installation & Setup**
1️⃣ **Initialize the Project**  
```sh
npm init -y
```

2️⃣ **Install Dependencies**  
```sh
npm i express mongoose dotenv bcrypt jsonwebtoken
```

3️⃣ **Create `.env` file**  
```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/authDB
JWT_SECRET=your_secret_key
```

4️⃣ **Connect to MongoDB (`db/db.js`)**
```javascript
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("🚀 MongoDB Connected!"))
  .catch((err) => console.log("❌ MongoDB Connection Failed!", err));
```

---

## **📌 User Model (`models/user.model.js`)**
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
```

---

## **📌 User Authentication Controllers (`controllers/user.controller.js`)**

### 1️⃣ **User Registration (Hash Password Before Saving)**
```javascript
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.registerController = async (req, res) => {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    res.status(201).json({
        user,
        message: "🎉 User registered successfully!"
    });
};
```

### 2️⃣ **User Login (Verify Email & Password)**
```javascript
module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "⚠️ Invalid Email or Password" });

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) return res.status(400).json({ message: "⚠️ Invalid Email or Password" });

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ token, message: "✅ Login Successful" });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
```

### 3️⃣ **User Profile (Protected Route)**
```javascript
module.exports.profileController = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(400).json({ message: "⚠️ Token is required!" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id });

        res.status(200).json({ user, message: "✅ User Profile" });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
```

---

## **📌 API Routes (`routes/user.routes.js`)**
```javascript
const express = require("express");
const { registerController, loginController, profileController } = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", registerController); // Register User
router.post("/login", loginController);       // Login User
router.get("/profile", profileController);    // Get User Profile

module.exports = router;
```

---

## **🚀 Run the Project**
```sh
node server.js
```
OR (if using **nodemon**)
```sh
nodemon server.js
```

---

## **🛠 Testing with Postman**
### **🔹 Register a User**
- **Method**: `POST`
- **URL**: `http://localhost:3000/user/register`
- **Body (JSON)**:
```json
{
    "username": "JohnDoe",
    "email": "john@example.com",
    "password": "123456"
}
```

### **🔹 Login User**
- **Method**: `POST`
- **URL**: `http://localhost:3000/user/login`
- **Body (JSON)**:
```json
{
    "email": "john@example.com",
    "password": "123456"
}
```
- **Response**:
```json
{
    "token": "your_jwt_token",
    "message": "✅ Login Successful"
}
```

### **🔹 Get Profile (Protected Route)**
- **Method**: `GET`
- **URL**: `http://localhost:3000/user/profile`
- **Headers**:
  - Key: `Authorization`
  - Value: `Bearer your_jwt_token`

---

## **🎯 Key Takeaways**
✔️ **User Authentication using bcrypt & JWT**  
✔️ **Password Hashing to Enhance Security**  
✔️ **Middleware for Protected Routes**  
✔️ **Best Practices for Authentication APIs**  

---

### 🎉 **Congratulations! You’ve successfully built an authentication system using Express, MongoDB, bcrypt, and JWT! 🚀**
🚀 **Next Steps:**  
- Implement **Session-Based Authentication**  
- Add **Forgot Password & Reset Password**  
- Implement **Role-Based Authorization**  

Happy Coding! 🚀🔥