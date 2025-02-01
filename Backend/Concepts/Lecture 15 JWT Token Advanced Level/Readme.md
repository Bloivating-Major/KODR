# 🔐 **Lecture 15: User Authentication System (Signup & Login)**
  
## 📌 **1. User Account Creation Flow**  
1️⃣ **Mongoose Setup** – Connect MongoDB with Express.  
2️⃣ **Schema Setup** – Define user structure (username, email, password).  
3️⃣ **Model Setup** – Create a Mongoose model.  
4️⃣ **User Creation** – Hash the password and store it securely.  
5️⃣ **JWT Token & Cookie** – Generate a token and store it in a cookie.  

---

## 🏗 **2. Mongoose Setup**
### 📦 **Install Dependencies**
```sh
npm install mongoose
```
### ✍ **Connect MongoDB with Express**
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/authDB')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('DB Connection Error:', err));
```
---

## 📜 **3. User Schema Setup**
### ✍ **Define Schema & Model (`user.model.js`)**
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

---

## 📝 **4. Creating a New User (Signup)**
### ✍ **Code: Signup Route (`POST /create`)**
```javascript
app.post('/create', async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    let user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    // Create JWT Token
    let token = jwt.sign({ email: user.email }, "secretkey");

    // Store token in cookies
    res.cookie('token', token);

    res.redirect('/login');
});
```
✔ **Steps Followed:**  
✅ Take user input (username, email, password).  
✅ Hash the password using `bcrypt`.  
✅ Store user details in **MongoDB**.  
✅ Generate **JWT token** and store it in cookies.  
✅ Redirect to login page.  

---

## 🔐 **5. User Login Flow**
### **Steps:**  
1️⃣ User enters email & password.  
2️⃣ **Find user** in the database.  
3️⃣ **Compare hashed password** using bcrypt.  
4️⃣ If valid, **generate JWT token** & store in cookies.  

### ✍ **Code: Login Route (`POST /login`)**
```javascript
app.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });

    if (!user) return res.send("Invalid Email or Password");

    // Compare the hashed password
    if (await bcrypt.compare(req.body.password, user.password)) {
        // Create JWT Token
        let token = jwt.sign({ email: user.email }, "secretkey");

        // Store token in cookies
        res.cookie('token', token);

        res.send("Login Successful");
    } else {
        res.send("Invalid Email or Password");
    }
});
```
✔ **Steps Followed:**  
✅ Find user by email in the database.  
✅ Compare entered password with the **hashed password**.  
✅ If correct, generate **JWT token**.  
✅ Store token in **cookies** for authentication.  

---

## 🔓 **6. Logout Functionality**
### ✍ **Code: Logout Route (`GET /logout`)**
```javascript
app.get('/logout', (req, res) => {
    res.cookie('token', '');  // Clear token from cookies
    res.redirect('/');
});
```
✔ Clears authentication token by setting an empty cookie.  

---

## 🏁 **7. Summary of Lecture 15**
| Concept | Purpose | Example |
|---------|---------|---------|
| **Mongoose** | Connect MongoDB to Express | Store user data in DB |
| **Schema & Model** | Define structure for user | `{ username, email, password }` |
| **User Signup** | Hash password & store user data | `bcrypt.hash(password, 10)` |
| **JWT Token** | Authenticate user & store session | `jwt.sign({ email }, "secretkey")` |
| **Login** | Compare hashed password & generate token | `bcrypt.compare()` |
| **Logout** | Remove session | `res.cookie('token', '')` |

🚀 **Next Steps:** Implement **protected routes** using JWT authentication!  

---
