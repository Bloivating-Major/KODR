## 🚀 Week 13 - Day 1: **Backend - User Authentication & Layouts in EJS** 🎯  

### **📌 What We Built Today**
Today, we focused on **User Authentication** using **Node.js, Express, MongoDB, JWT, and Bcrypt**. We implemented:  
✅ **User Registration** 📝  
✅ **User Login** 🔑  
✅ **JWT-Based Authentication** 🔐  
✅ **Session Management with Cookies** 🍪  
✅ **EJS Layouts for Views** 🎨  

---

## **📂 Folder Structure**
```
📦 Project Folder
 ┣ 📂 src
 ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📜 index.controller.js
 ┃ ┃ ┗ 📜 user.controller.js
 ┃ ┣ 📂 db
 ┃ ┃ ┗ 📜 db.js
 ┃ ┣ 📂 models
 ┃ ┃ ┗ 📜 user.model.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📜 index.routes.js
 ┃ ┃ ┗ 📜 user.routes.js
 ┃ ┣ 📂 views
 ┃ ┃ ┣ 📜 feed.ejs
 ┃ ┃ ┣ 📜 index.ejs
 ┃ ┃ ┣ 📜 login.ejs
 ┃ ┃ ┗ 📜 register.ejs
 ┃ ┗ 📜 app.js
 ┣ 📜 server.js
 ┣ 📜 .env
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## **📌 Step-by-Step Implementation**

### **1️⃣ Setting Up the Server**
✔ First, we initialized our Node.js project:  
```bash
npm init -y
npm install express mongoose ejs bcrypt jsonwebtoken cookie-parser dotenv
```

✔ Created a **server.js** file to start the server and connect to the database:
```javascript
require("dotenv").config();
const app = require("./src/app");
const connect = require("./src/db/db");

// Connect to database
connect();

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started on port ${process.env.PORT}`);
});
```

---

### **2️⃣ Express App Configuration (app.js)**
✔ Configured **Express.js**, set up **EJS**, and enabled **cookie-parser**:
```javascript
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

const indexRoute = require("./routes/index.routes");
const userRoute = require("./routes/user.routes");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", indexRoute);
app.use("/user", userRoute);

module.exports = app;
```

---

### **3️⃣ Database Connection (MongoDB)**
✔ Connected **MongoDB Atlas** using **Mongoose**:
```javascript
const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("✅ Connected to MongoDB");
  }).catch(err => console.log(err.message));
};

module.exports = connect;
```

---

### **4️⃣ User Model (user.model.js)**
✔ Created a **User Schema** for storing user credentials:
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
```

---

### **5️⃣ User Authentication (Controllers)**
✔ Implemented **User Registration**:
```javascript
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerController = (req, res) => {
  res.render("register");
};

module.exports.postRegisterController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let foundUser = await User.findOne({ email });
    if (foundUser) return res.status(400).send("User Already Exists");

    let hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    let token = jwt.sign({ email: email, userid: user._id }, process.env.SECRET_KEY);
    res.cookie("token", token);

    res.redirect("/feed");
  } catch (err) {
    console.log(err);
  }
};
```

✔ Implemented **User Login**:
```javascript
module.exports.loginController = (req, res) => {
  res.render("login");
};

module.exports.postLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(401).send("Invalid Email or Password");

    let validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).send("Invalid Email or Password");

    let token = jwt.sign({ email: email, userid: user._id }, process.env.SECRET_KEY);
    res.cookie("token", token);

    res.redirect("/feed");
  } catch (err) {
    console.log(err);
  }
};
```

✔ Implemented **Feed Page with JWT Authentication**:
```javascript
module.exports.feedController = (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.redirect("/user/register");

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    res.render("feed");
  } catch (err) {
    res.redirect("/user/register");
  }
};
```

---

### **6️⃣ Routing (index.routes.js & user.routes.js)**
✔ **Index Routes**
```javascript
const { Router } = require("express");
const indexController = require("../controller/index.controller");

const Route = Router();
Route.get("/", indexController.indexController);
Route.get("/feed", indexController.feedController);

module.exports = Route;
```

✔ **User Routes**
```javascript
const { Router } = require("express");
const userController = require("../controller/user.controller");

const userRoute = Router();
userRoute.get('/register', userController.registerController);
userRoute.post('/register', userController.postRegisterController);
userRoute.get('/login', userController.loginController);
userRoute.post('/login', userController.postLoginController);

module.exports = userRoute;
```

---

## **🎨 Frontend (EJS Templates)**
✔ **Register Page (`register.ejs`)**
```html
<form action="/user/register" method="post">
    <input type="text" placeholder="Username" name="username">
    <input type="email" placeholder="Email" name="email">
    <input type="password" placeholder="Password" name="password">
    <input type="submit" value="Create Account">
</form>
```

✔ **Login Page (`login.ejs`)**
```html
<form action="/user/login" method="post">
    <input type="email" placeholder="Email" name="email">
    <input type="password" placeholder="Password" name="password">
    <input type="submit" value="Login">
</form>
```

✔ **Feed Page (`feed.ejs`)**
```html
<h1>Welcome to the Feed Page</h1>
```

---

## **🎯 Key Takeaways**
✔ **JWT-Based Authentication** ensures secure user sessions.  
✔ **Bcrypt Hashing** stores passwords securely.  
✔ **EJS Layouts** help in rendering dynamic views.  
✔ **Cookies** manage session authentication seamlessly.  
✔ **Modular MVC Structure** keeps code **clean and scalable**.  

---

## **🔗 Next Steps**
🔹 Implement **Logout Functionality** 🏃‍♂️  
🔹 Add **User Profile & Edit Feature** ✍  
🔹 Store user **session details in a database** 🔒  

🔥 **Stay tuned for more backend magic!** 🚀

## 🚀 Week 13 - Day 1: **DSA - Happy Number & Hashing in JavaScript** 🧮🔢  

### **📌 What We Learned Today**
Today, we dived into **Hashing** and solved the **Happy Number** problem using **Set in JavaScript**. 💡  
✅ **Concept of Happy Numbers** 🎯  
✅ **Using Set for Cycle Detection** 🔄  
✅ **Mathematical Breakdown & Optimization** 🏆  

---

## **🧠 What is a Happy Number?**
A **Happy Number** is a number where:
1. We repeatedly replace the number with the sum of squares of its digits.
2. If it eventually becomes **1**, it's a **Happy Number** 😊.
3. If it enters a cycle and never reaches **1**, it's **not a Happy Number** 😞.

Example:  
🔹 **19 → (1² + 9²) = 82**  
🔹 **82 → (8² + 2²) = 68**  
🔹 **68 → (6² + 8²) = 100**  
🔹 **100 → (1² + 0² + 0²) = 1 🎉**  
✅ **19 is a Happy Number!**

---

## **📝 JavaScript Implementation**
We used a **Set** to detect cycles in the number transformation.  
```javascript
var isHappy = function (n) {
    let set = new Set();  // 🗂️ Store seen numbers to detect cycles
    let sum = 0, digit = 0;

    if (n == 7) return true;  // 🚀 Quick check for base case

    while (n !== 1 && !set.has(n)) {  // 🔄 Loop until 1 or cycle detected
        set.add(n);  // 🔖 Store the number
        sum = 0;

        while (n > 0) {  // 🔢 Sum of squares of digits
            digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        n = sum;  // 🔄 Update n with the sum
    }

    return n == 1;  // ✅ If 1, it's happy, otherwise it's not
};
```

---

## **🔍 Complexity Analysis**
✅ **Time Complexity:** **O(log N)** (Each step reduces n by digits, similar to logarithmic behavior).  
✅ **Space Complexity:** **O(log N)** (Set stores a limited number of unique numbers).  

---

## **💡 Key Takeaways**
✔ **Hashing with Set** helps detect cycles efficiently. 🔄  
✔ **Mathematical Breakdown** optimizes the approach. 📏  
✔ **Edge Case Handling** (e.g., `n == 7` shortcut). 🚀  

---

## **🚀 Next Steps**
🔹 Solve **More Hashing-Based DSA Problems** 🔥  
🔹 Learn **Bit Manipulation for Efficient Computation** 🧠  

**Happy Coding! 🚀**