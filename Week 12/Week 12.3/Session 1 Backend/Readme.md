## 🚀 Week 12 - Day 3: **Backend - User Authentication (Login & Registration) 🛡️**  

### **📌 What We Learned Today**
Today, we implemented **User Authentication** 🔐 using **Node.js, Express, MongoDB, and Bcrypt**.  
✅ **User Registration with Hashed Passwords 📝**  
✅ **User Login with Password Validation 🔑**  
✅ **Security Best Practices with Bcrypt 🔄**  

---

## **🛠️ Steps to Implement**
1️⃣ **User Registration** 📌  
- Accepts `username`, `email`, and `password`.  
- Hashes the password using **bcrypt**.  
- Stores the user in **MongoDB**.  

2️⃣ **User Login** 📌  
- Accepts `email` and `password`.  
- Verifies email exists in the database.  
- Compares password hash using **bcrypt.compare()**.  
- Returns **success** or **error** message.  

---

## **📝 Backend Implementation (Controller)**
```javascript
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// 📝 User Registration Controller
module.exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;

  // 🔐 Hashing the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  // 📌 Creating a new user in the database
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    user,
    message: "✅ User created successfully!",
  });
};

// 🔑 User Login Controller
module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 📌 Checking if user exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "❌ Invalid Email or Password" });
    }

    // 🔄 Verifying password
    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).json({ message: "❌ Invalid Email or Password" });
    }

    res.status(200).json({ message: "✅ User login successful!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
```

---

## **📌 How Does It Work?**
🔹 **Registration Process** 📝  
1️⃣ User sends `username`, `email`, and `password`.  
2️⃣ **bcrypt.hash()** encrypts the password.  
3️⃣ User details are stored in MongoDB.  

🔹 **Login Process** 🔑  
1️⃣ User enters email & password.  
2️⃣ System checks if the email exists.  
3️⃣ **bcrypt.compare()** verifies password.  
4️⃣ If correct, user successfully logs in! 🎉  

---

## **🚀 Next Steps**
🔹 **JWT Authentication for Secure Login Tokens 🔑**  
🔹 **Role-Based Access Control (RBAC) for Authorization 👥**  
🔹 **Middleware for Authentication & Protected Routes 🛡️**  

🔹 **Happy Coding! 🚀**