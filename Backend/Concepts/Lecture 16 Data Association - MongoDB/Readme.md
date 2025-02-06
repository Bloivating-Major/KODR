
---

# 🚀 **Lecture 16 - Backend Project: User Authentication & Post Management**

## 📌 **Overview**
This project is a **full-fledged backend web application** built using:
- 🌐 **Node.js & Express.js** – Handles the backend logic.
- 🗄 **MongoDB & Mongoose** – Stores user and post data.
- 🔐 **JWT Authentication** – Secures user login & signup.
- 🎨 **EJS Templating** – Renders dynamic HTML.
- ✍️ **CRUD Operations** – Allows users to create, edit, like, and delete posts.
- 🔧 **Middleware & Security** – Protects routes, encrypts passwords, and handles cookies.

This guide provides a **step-by-step breakdown** of the project, **detailed explanations**, and **code snippets** to make everything clear.

---

## 🏗️ **Project Structure**
```
📂 project-folder/
│── 📁 models/         # Database models (User, Post)
│── 📁 routes/         # API routes (Authentication, Posts)
│── 📁 views/          # EJS Templates (Frontend)
│── 📁 public/         # Static files (CSS, JS, Images)
│── 📄 app.js          # Main Express Server
│── 📄 package.json    # Dependencies and Scripts
│── 📄 .env            # Environment variables
```

---

## 🏁 **1️⃣ Project Initialization**
To get started, initialize a **Node.js project**:

```sh
mkdir my-backend-project && cd my-backend-project
npm init -y
```

### 📦 **Install Dependencies**
```sh
npm install express mongoose dotenv bcryptjs jsonwebtoken ejs cookie-parser body-parser method-override
```

### 🔧 **Set Up Environment Variables**
Create a `.env` file in the root directory:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🔐 **2️⃣ User Authentication (Signup/Login)**
User authentication allows users to **register and log in securely** using **bcrypt for password hashing** and **JWT for authentication**.

### 🔹 **User Schema (models/User.js)**
```js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
```

---

### 🚀 **User Signup (Register)**
**🔹 Process:**
1. User enters **name, email, password**.
2. Password is **hashed using bcrypt**.
3. JWT token is generated for authentication.
4. User is stored in the database.

**🔹 Route (routes/auth.js)**
```js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard");
});

module.exports = router;
```

---

### 🔑 **User Login**
**🔹 Process:**
1. User enters email and password.
2. Password is compared with the hashed password in the database.
3. JWT token is issued and stored in a **cookie**.
4. If login is successful, the user is redirected to the dashboard.

**🔹 Route**
```js
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard");
});
```

---

## 📝 **3️⃣ Post Management (CRUD Operations)**

### 🔹 **Post Schema (models/Post.js)**
```js
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Post", PostSchema);
```

---

### 📝 **Create Post**
Users can create posts by entering a **title and content**.

**🔹 Route (routes/posts.js)**
```js
router.post("/posts", authenticateUser, async (req, res) => {
    const { title, content } = req.body;
    const post = await Post.create({ title, content, author: req.user._id });
    res.redirect("/dashboard");
});
```

---

### ✏️ **Edit Post**
Users can update their own posts.

**🔹 Route**
```js
router.put("/posts/:id", authenticateUser, async (req, res) => {
    const { title, content } = req.body;
    await Post.findByIdAndUpdate(req.params.id, { title, content });
    res.redirect("/dashboard");
});
```

---

### ❌ **Delete Post**
Users can delete their own posts.

**🔹 Route**
```js
router.delete("/posts/:id", authenticateUser, async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/dashboard");
});
```

---

## 💙 **4️⃣ Like System**
Users can like/unlike posts.

**🔹 Route**
```js
router.post("/posts/:id/like", authenticateUser, async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.user._id)) {
        post.likes.push(req.user._id);
    } else {
        post.likes = post.likes.filter(id => id.toString() !== req.user._id.toString());
    }
    await post.save();
    res.redirect("/dashboard");
});
```

---

## 🎨 **5️⃣ Frontend with EJS**
📌 **Views (EJS Templates)**
- `views/index.ejs` – Homepage
- `views/dashboard.ejs` – User dashboard
- `views/login.ejs` – Login page
- `views/signup.ejs` – Signup page

**🔹 Example (views/dashboard.ejs)**
```html
<% posts.forEach(post => { %>
    <h2><%= post.title %></h2>
    <p><%= post.content %></p>
    <form action="/posts/<%= post._id %>/like" method="POST">
        <button>❤️ Like</button>
    </form>
<% }); %>
```

---

## 🔥 **6️⃣ Running the Project**
```sh
npm start
```
📌 Visit: `http://localhost:5000`

---

## 🎯 **Future Enhancements**
✅ **Comments System**  
✅ **User Profiles**  
✅ **Real-time notifications**  

---


---