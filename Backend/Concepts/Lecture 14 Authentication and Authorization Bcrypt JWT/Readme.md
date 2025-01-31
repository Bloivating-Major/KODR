
---

# 🔐 **Lecture 14: Authentication, Authorization & Security**  

## 📌 **1. Understanding Authentication & Authorization**  

### ✅ **Authentication (Who are you?)**  
- **Example:** Before showing a user profile, we need to verify the user's identity.  
- **Purpose:** Ensures the user is who they claim to be.  

### 🔑 **Authorization (What can you do?)**  
- **Example:** After authentication, check if the user has admin permissions.  
- **Purpose:** Grants or restricts access based on user roles.  

---

## 🎯 **2. What You’ll Learn in This Lecture?**  
1️⃣ How to set **cookies** for session management.  
2️⃣ How to use **bcrypt** for password hashing.  
3️⃣ How to use **JWT (JSON Web Token)** for authentication.  

---

## 🍪 **3. Setting Up Cookies**  
### 📦 **Install Required Packages**  
```sh
npm install cookie-parser bcrypt jsonwebtoken express ejs mongoose
```

### ✍ **Code: Setting & Reading Cookies**  
```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser()); // Middleware to parse cookies

app.get('/', (req, res) => {
    res.cookie('name', 'Sambhav');
    res.send('Hello World');
});

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send('Read Cookies');
});

module.exports = app;
```
✔ **Browser Extension Used:** *Cookie Changer* for viewing stored cookies.  

---

## 🔒 **4. Hashing Passwords with bcrypt**  
### 🔹 **Why Hash Passwords?**  
- Protects user credentials from being stored in plain text.  
- Even if the database is leaked, passwords remain unreadable.  

### ✍ **Code: Encrypting Password with bcrypt**  
```javascript
const bcrypt = require('bcrypt');

app.get('/', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash('sambhav', salt, (err, hash) => {
            res.send('Hashed Password: ' + hash);
        });
    });
});
```
✔ **Note:** Hashed passwords **cannot** be decrypted, only compared.  

### ✍ **Code: Comparing a Password with bcrypt**  
```javascript
app.get('/', (req, res) => {
    bcrypt.compare('sambhav', '$2b$10$7bcBmGRYoGYLMzjCIFWN8ejb9iD.FrbFZ8A/J1l/Qn38ylLhGFPNe', (err, result) => {
        res.send(result);
    });
});
```
✔ **Returns `true`** if passwords match, **`false`** otherwise.  

---

## 🔑 **5. JWT (JSON Web Token) for Authentication**  
### 🏗 **JWT Structure**  
1️⃣ **Header** (Algorithm & Token Type)  
2️⃣ **Payload** (User Data)  
3️⃣ **Signature** (Hash of Header & Payload)  

### ✍ **Code: Creating & Storing a JWT Token**  
```javascript
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => {
    let token = jwt.sign({ email: "stark@gmail.com" }, "secretkey");
    res.cookie('token', token);
    res.send("Token Set!");
});
```

### ✍ **Code: Verifying a JWT Token**  
```javascript
app.get('/read', (req, res) => {
    const data = jwt.verify(req.cookies.token, "secretkey");
    console.log(data);
    res.send("Token Verified!");
});
```
✔ **JWT is used for:**  
- Secure **API authentication**  
- Storing user identity in a **stateless manner**  

---

## 🏁 **Summary of Lecture 14**
| Concept | Purpose | Example |
|---------|---------|---------|
| **Authentication** | Verify who the user is | Logging in to an account |
| **Authorization** | Check user permissions | Admin access for deleting users |
| **Cookies** | Store session-related data | Save a user’s token |
| **bcrypt** | Encrypt passwords securely | Hashing and verifying passwords |
| **JWT** | Authenticate API requests | Securely store user info |

🔥 **Next Steps:** Implement **full authentication flow** with login, signup, and protected routes!  

---

This structured format makes it easy to **review, understand, and implement** the concepts. 🚀 Let me know if you need any modifications! 😊