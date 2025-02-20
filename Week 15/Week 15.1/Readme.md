# 🚀 **Week 15 Day 1 - Backend Session** 🔥  

## **🔗 Connecting Frontend with Backend**
Today, we focused on understanding how the **frontend** (React) communicates with the **backend** (Express.js + MongoDB). We also implemented a **register page** and handled form submission properly.

---

## 📌 **1. Registration Flow**
1️⃣ **User enters details in the form** (username, email, password).  
2️⃣ **Form submission** triggers a function that:  
   - Prevents default behavior (`e.preventDefault()`).  
   - Captures input values.  
   - Sends a `POST` request to the backend using `axios`.  
3️⃣ The **backend processes the request**, validates the input, and saves user data in the **database**.  
4️⃣ Once the user is created, the frontend **navigates** to another page using **useNavigate()**.  

---

## 🎯 **2. Implementing the Register Page in React**
### **📌 Creating the Registration Form**
```jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // useNavigate Hook

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default page refresh

        try {
            const res = await axios.post("http://localhost:3000/api/register", {
                username,
                email,
                password
            });

            console.log(res.data); // Logging response from backend
            navigate("/profile"); // Redirect to profile page after successful registration
        } catch (err) {
            console.error(err);
            if (err.response?.data?.message) {
                setError(err.response.data.message);
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
```
---

## 🌐 **3. Backend API for Registering Users**
### **📌 Backend Route (`/api/register`)**
```javascript
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user exists
        let userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
```
---

## 🏆 **Key Takeaways**
✅ **Frontend:** Form submission using React (`useState`, `useNavigate`).  
✅ **Backend:** Handling `POST` requests with Express, hashing passwords with `bcrypt`.  
✅ **Database:** Storing user data in **MongoDB** with Mongoose.  
✅ **Error Handling:** Displaying backend errors on the frontend.  

---

🚀 **This session helped us bridge the gap between frontend & backend, making our React app communicate with our Node.js server effectively!**