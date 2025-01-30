# 🚀 **Week 11 - Day 5: Backend Session 1**  

## 📌 **Today's Learning - Creating MongoDB Schemas in Mongoose**  

In this session, we learned how to create **Mongoose schemas** and handle **User** and **Post** data efficiently in a backend project! 🎯  

---

## **📂 What We Built?**  
✅ **User Schema** → Stores user details like username, email, bio, and profile image.  
✅ **Post Schema** → Stores media posts with images, captions, and like counts.  
✅ **Index Controller** → Handles requests to create and display users & posts.  

---

## **1️⃣ Post Model (Schema for User Posts) 📸**  
📍 **`models/post.model.js`**  
```javascript
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    mediaImage: {
        type: String,
    },
    caption: {
        type: String,
    },
    likeCount: {
        type: Number,
    }
});

const Post = mongoose.model('post', postSchema);
module.exports = Post;
```
📝 **Explanation:**  
- `mediaImage` → Stores the image URL of the post.  
- `caption` → Stores the text caption for the post.  
- `likeCount` → Stores the number of likes the post has received.  

---

## **2️⃣ User Model (Schema for User Data) 👤**  
📍 **`models/user.model.js`**  
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    bio: {
        type: String,
    },
    image: {
        type: String,
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;
```
📝 **Explanation:**  
- `username` → Stores the name of the user.  
- `email` → Stores the email address of the user.  
- `bio` → Stores the user's bio or description.  
- `image` → Stores the profile picture URL of the user.  

---

## **3️⃣ Index Controller (Handling Routes & Logic) 🚀**  
📍 **`controllers/index.controller.js`**  
```javascript
const User = require('../models/user.model');
const Post = require('../models/post.model');

module.exports.indexController = (req, res) => {
    res.render('index');
};
```
📌 **`indexController`** → Renders the homepage.

---

### **👤 User Controller: Creating a New User**  
```javascript
module.exports.createUserController = async (req, res) => {
    const { username, bio, email, image } = req.body;

    const newUser = await User.create({
        username,
        bio,
        email,
        image,
    });

    res.redirect('/home');
};
```
📌 **What it does?**  
✅ Accepts `username`, `email`, `bio`, and `image` from `req.body`.  
✅ Creates a new user in the database using `User.create()`.  
✅ Redirects to `/home` after user creation.

---

### **🏠 Home Controller: Displaying Posts**  
```javascript
module.exports.homeController = async (req, res) => {
    const posts = await Post.find({});
    res.render('home', { posts });
};
```
📌 **What it does?**  
✅ Fetches all posts from the database.  
✅ Passes the posts to the `home.ejs` template for rendering.  

---

### **📝 Post Controller: Creating a New Post**  
```javascript
module.exports.createPostController = (req, res) => {
    res.render('createPost');
};
```
📌 **What it does?**  
✅ Renders the `createPost.ejs` template (UI for adding posts).  

```javascript
module.exports.createPost = async (req, res) => {
    const { mediaImage, caption } = req.body;

    const newPost = await Post.create({
        mediaImage,
        caption
    });

    res.redirect("/home");
};
```
📌 **What it does?**  
✅ Accepts `mediaImage` and `caption` from `req.body`.  
✅ Creates a new post using `Post.create()`.  
✅ Redirects to `/home` after successfully creating the post.  

---

## **🎯 Summary - What We Learned?**  
✅ **Created a `User` Schema** for managing user data.  
✅ **Created a `Post` Schema** for storing user posts.  
✅ **Built Controllers** to handle user and post creation.  
✅ **Integrated MongoDB with Express** for data storage.  

---

🔥 **Next Steps:**  
- Implement `CRUD` operations for users and posts.  
- Add authentication using `JWT`.  
- Optimize the database structure.  

🚀 **Great Work! Keep Building!** 🏗️🔥

# 🚀 **Week 11 - Day 5: DSA Session 2**  

## 📌 **Today's Learning - Prime Numbers in JavaScript**  

In this session, we explored **Prime Numbers** and how to efficiently check whether a number is prime using JavaScript. 🔢  

---

## **1️⃣ Basic Approach: Checking Prime Numbers 🧐**  

📌 **Concept:**  
A **Prime Number** is a number greater than `1` that is only divisible by `1` and itself.  
For example: `2, 3, 5, 7, 11, 13, ...` are prime numbers.  

📍 **Naive Approach:** (Loop through half the number and count divisors)  
```javascript
let n = 11;
let count = 0;

if (n <= 1) console.log("Not Prime");
else {
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) count++;
    }
}

if (count == 1) console.log("Prime Number");
```
📝 **Drawbacks:**  
- Inefficient for large numbers.  
- Loops through `n/2`, which is unnecessary.  

---

## **2️⃣ Optimized Approach: Checking Prime Numbers Efficiently 🚀**  

📌 **Concept:**  
- A number `n` is **prime** if it has no divisors other than `1` and itself.  
- We only need to check divisibility up to `sqrt(n)`, because if `n = a * b`, then **one of the factors must be ≤ sqrt(n)**.  

📍 **Optimized Code:**  
```javascript
let n = 11;

if (isPrime(n)) console.log("Prime Number");
else console.log("Not Prime Number");

function isPrime(num) {
    if (num <= 1) return false;  // 0 and 1 are not prime
    if (num == 2) return true;   // 2 is the only even prime
    if (num % 2 == 0) return false; // Exclude all even numbers > 2

    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
        if (num % i == 0) return false; // If divisible, not prime
    }
    return true;
}
```
---

## **🔥 What We Improved?**  
✅ **Reduced Time Complexity** from **O(n/2) → O(sqrt(n))** 💡  
✅ **Eliminated Even Numbers** (except `2`) to reduce unnecessary checks.  
✅ **Optimized for Large Inputs** (e.g., checking primes up to `10^9`).  

---

## **🎯 Summary - What We Learned?**  
✅ **Prime Numbers** and their properties.  
✅ **Naive approach (looping half the number)** for prime checking.  
✅ **Optimized method (checking up to sqrt(n))** for efficiency.  

---

🔥 **Next Steps:**  
- Implement **Prime Factorization** using `O(sqrt(n))` method.  
- Solve **LeetCode Prime Number Questions**.  
- Optimize further using **Sieve of Eratosthenes** (for multiple primes).  

🚀 **Great Work! Keep Practicing!** 🏗️🔥