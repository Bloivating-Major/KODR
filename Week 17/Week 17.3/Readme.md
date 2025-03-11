

# 📝 **Blog API Backend - Express, MongoDB, JWT, Authentication & Authorization** 🚀  

This backend API is designed for a **Blog Application** using **Node.js, Express, MongoDB, and JWT authentication**. It allows users to **register, login, create, update, delete, and fetch blog posts**.  

---

## 📌 **Project Features**
✅ **User Authentication** (Register/Login with JWT)  
✅ **User Authorization** (Only authors can modify their blogs)  
✅ **Blog Management** (CRUD - Create, Read, Update, Delete)  
✅ **Secure Password Hashing** (Using `bcrypt`)  
✅ **JWT Token Authentication** (Middleware-based)  
✅ **Validation** (Using `Zod` for request validation)  
✅ **Middleware Implementation** (Auth & Validation)  
✅ **Database Connection** (MongoDB Atlas or Local MongoDB)  

---

## 📂 **Project Structure**
```
📦 src
 ┣ 📂 config
 ┃ ┗ 📜 config.js
 ┣ 📂 controllers
 ┃ ┣ 📜 blog.controller.js
 ┃ ┗ 📜 user.controller.js
 ┣ 📂 db
 ┃ ┗ 📜 db.js
 ┣ 📂 middlewares
 ┃ ┣ 📜 auth.middleware.js
 ┃ ┗ 📜 user.middleware.js
 ┣ 📂 models
 ┃ ┣ 📜 blog.model.js
 ┃ ┗ 📜 user.model.js
 ┣ 📂 routes
 ┃ ┣ 📜 blog.routes.js
 ┃ ┗ 📜 user.routes.js
 ┣ 📜 app.js
 ┗ 📜 server.js
```

---

## 🔥 **Database Connection**
📌 **File:** `src/db/db.js`  
This connects to **MongoDB** using Mongoose.

```javascript
const mongoose = require('mongoose');
const config = require('../config/config');

const connect = () => {
    mongoose.connect(config.MONGO_URL)
        .then(() => console.log("✅ Connected to MongoDB"))
        .catch(err => console.error("❌ Database Connection Error:", err));
};

module.exports = connect;
```

---

## 🔐 **Authentication & Security**
📌 **File:** `src/middlewares/auth.middleware.js`  
Middleware to **authenticate** users using JWT.

```javascript
const userModel = require('../models/user.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = userModel.verifyToken(token);
        req.user = await userModel.findById(decoded.id);
        next(); 
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
```

---

## 🏗️ **User Authentication**
📌 **File:** `src/controllers/user.controller.js`  
Handles **User Registration & Login**.

```javascript
const userModel = require('../models/user.model');

// Register User
module.exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await userModel.hashPassword(password);
        const newUser = await userModel.create({ username, email, password: hashedPassword });

        const token = newUser.generateToken();
        delete newUser._doc.password; 

        return res.status(201).json({ token, user: newUser });
    } catch (err) {
        return res.status(500).json({ message: "Server Error" });
    }
};

// Login User
module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ message: "User Not Found" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(401).json({ message: "Invalid Credentials" });

        const token = user.generateToken();
        delete user._doc.password;

        return res.status(200).json({ token, user });
    } catch (err) {
        return res.status(500).json({ message: "Server Error" });
    }
};
```

---

## 📝 **Blog CRUD Operations**
📌 **File:** `src/controllers/blog.controller.js`  
Handles **Create, Read, Update, Delete** blog posts.

```javascript
const Blog = require('../models/blog.model');

// Get all blogs
module.exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate("author", "username email").sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Create a new blog
exports.createBlog = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const newBlog = new Blog({ title, content, author: req.user._id, tags });

        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        if (blog.author.toString() !== req.user._id.toString()) 
            return res.status(403).json({ message: "Unauthorized to update this blog" });

        blog.title = req.body.title || blog.title;
        blog.content = req.body.content || blog.content;

        await blog.save();
        res.status(200).json({ message: "Blog updated successfully", blog });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Delete a blog post
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        if (blog.author.toString() !== req.user._id.toString()) 
            return res.status(403).json({ message: "Unauthorized to delete this blog" });

        await blog.deleteOne();
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
```

---

## 🔄 **API Endpoints**
| **Method** | **Endpoint**       | **Description**              |
|------------|--------------------|------------------------------|
| `POST`     | `/api/v1/user/register` | Register a new user          |
| `POST`     | `/api/v1/user/login`    | Login user                   |
| `GET`      | `/api/v1/blog`          | Get all blogs                 |
| `POST`     | `/api/v1/blog`          | Create a new blog (Auth)      |
| `GET`      | `/api/v1/blog/:id`      | Get a blog by ID              |
| `PUT`      | `/api/v1/blog/:id`      | Update blog (Only Author)     |
| `DELETE`   | `/api/v1/blog/:id`      | Delete blog (Only Author)     |

---

## 🎯 **Next Steps**
🔹 Add **Comment Functionality**  
🔹 Implement **Like/Dislike System**  
🔹 Connect **Frontend with React.js**  

---

🚀 **Great Job! Now Keep Building More Features!** 🚀