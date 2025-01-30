# 🚀 Week 11 - Day 3: DSA Session 1  
## 📌 **Topic: Recursion - Factorials, GCD, and Finding Factors**  

Today, we explored **recursion** in depth and learned how to solve problems like **factorial computation, GCD (Greatest Common Divisor), and finding factors of a number** using recursion. 🔥  

---

## **🔢 Finding the GCD (Greatest Common Divisor) Using Recursion**  
The **GCD (HCF - Highest Common Factor)** of two numbers is the largest number that divides both numbers completely.  

### **Approach 1: Iterative Recursive Method**  
- Start from the **minimum of two numbers** and check divisibility.
- Decrease the divisor (`c`) until the GCD is found.  

```javascript
let a = 20;
let b = 32;
let c = a < b ? a : b;

console.log(findGCD(a, b, c));

function findGCD(a, b, c) {
    if (c == 1) return c;
    if (a % c == 0 && b % c == 0) return c;
    return findGCD(a, b, c - 1);
}
```
⏳ **Time Complexity:** `O(min(a, b))`

---

### **Approach 2: Using Euclidean Algorithm (Optimized)**  
🔹 The Euclidean algorithm **reduces the problem** by subtracting the smaller number from the larger one.  
🔹 This is **much faster** than iterating from min(a, b) downwards.  

```javascript
console.log(GCD(20, 32));

function GCD(a, b) {
    if (a == b) return a; 
    if (a > b) return GCD(a - b, b);
    else return GCD(a, b - a);
}
```
🔹 **Time Complexity:** `O(log(min(a, b)))`  
✔ **Most efficient way** to find GCD using recursion! ✅  

---

## **🔄 Printing Numbers Using Recursion**  
This function prints numbers from **n to 1** recursively. 📉  

```javascript
let n = 5;
temp(n);

function temp(n) {
    if (n == 0) return;
    console.log(n);
    temp(--n);
}
```
✔ This function **decrements** `n` until `0` is reached.  

---

## **🧩 Finding Factors of a Number Using Recursion**  
🔹 A factor of `n` is any number that **divides `n` completely**.  
🔹 We recursively check divisibility starting from `1`.  

### **Method 1: Checking from 1 to n/2**
```javascript
let n = 50;
factor(n, 1);

function factor(n, i) {
    if (n % i == 0) console.log(i); // Print factor
    if (i > Math.floor(n / 2)) {
        console.log(n); // Print n itself as a factor
        return;
    }
    factor(n, i + 1);
}
```
✔ **Time Complexity:** `O(n/2)`  

---

### **Method 2: Optimized Factorization (Using sqrt(n))**  
Instead of checking all numbers **up to `n/2`**, we **only go up to `sqrt(n)`**, which is **more efficient**.  

```javascript
function printFactors(n) {
    let result = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                result.push(i);
            } else {
                result.push(i);
                result.push(n / i);
            }
        }
    }
    result.sort((a, b) => a - b);
    console.log(result.join(", "));
}

printFactors(50);
```
✔ **Time Complexity:** `O(√n)` (Much Faster!)  

---

## **🔑 Key Takeaways**  
✅ **Recursion is a powerful concept** that helps break problems into smaller instances of the same problem.  
✅ **GCD can be optimized** using the **Euclidean algorithm**.  
✅ **Factorization can be optimized** by checking **only up to `sqrt(n)`** instead of `n/2`.  

🔥 Keep practicing recursion, and you'll master it in no time! 🚀💡

# 🚀 Week 11 - Day 3: Backend Session 2  
## 🛠️ **Building a User Management System with Express & MongoDB**  

Today, we built a **User Management System** using **Express, MongoDB (Mongoose), and EJS**! 🎉  

---

## **📌 Steps We Followed**  

### 🔹 **Step 1: Initialize the Project**  
We started by setting up our Node.js project:  

```bash
npm init -y
npm i ejs mongoose express
```
This installs:  
- **EJS** for templating 🖼️  
- **Mongoose** for database interaction 🛢️  
- **Express** for handling routes 🚀  

---

### 🔹 **Step 2: Create a Simple User Form 📝**  
Our form collects:  
✔ **Username**  
✔ **Email**  
✔ **Bio**  
✔ **Profile Image (URL)**  

📍 **Route to Render the Form:**  
```javascript
app.get("/create", (req, res) => {
    res.render("createUser");  // Renders EJS form
});
```

📍 **EJS Form (`views/createUser.ejs`):**  
```html
<form action="/create" method="POST">
    <input type="text" name="username" placeholder="Enter Username" required />
    <input type="email" name="email" placeholder="Enter Email" required />
    <textarea name="bio" placeholder="Enter Bio"></textarea>
    <input type="text" name="profileImage" placeholder="Enter Profile Image URL" />
    <button type="submit">Create User</button>
</form>
```

---

### 🔹 **Step 3: Store User Data in MongoDB**  
We **post** the form data to **/create** and store it in our MongoDB database.  

📍 **Mongoose User Schema (`models/user.model.js`):**  
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    bio: String,
    profileImage: String
});

const User = mongoose.model("User", userSchema);
module.exports = User;
```

📍 **Handling Form Submission in Express (`routes/userRoutes.js`)**  
```javascript
const User = require("../models/user.model");

app.post("/create", async (req, res) => {
    try {
        const { username, email, bio, profileImage } = req.body;
        await User.create({ username, email, bio, profileImage });
        res.redirect("/users");  // Redirect to users list after creation
    } catch (error) {
        res.status(500).send("Error creating user");
    }
});
```

---

### 🔹 **Step 4: Display All Users**  
We now **fetch all users** and display them as cards! 📜  

📍 **Fetching Users (`routes/userRoutes.js`)**  
```javascript
app.get("/users", async (req, res) => {
    const users = await User.find();  
    res.render("users", { users });  
});
```

📍 **EJS Template to Show Users (`views/users.ejs`)**  
```html
<% users.forEach(user => { %>
    <div class="card">
        <img src="<%= user.profileImage %>" alt="Profile" />
        <h2><%= user.username %></h2>
        <a href="/userDetails/<%= user._id %>">View Profile</a>
    </div>
<% }); %>
```

---

### 🔹 **Step 5: Show User Details**  
When clicking a user **card**, it redirects to **userDetails/:user_id** 📌  

📍 **Route for User Details (`routes/userRoutes.js`)**  
```javascript
app.get("/userDetails/:user_id", async (req, res) => {
    const user = await User.findById(req.params.user_id);
    res.render("userDetails", { user });
});
```

📍 **EJS Template for User Details (`views/userDetails.ejs`)**  
```html
<div class="profile">
    <img src="<%= user.profileImage %>" alt="Profile" />
    <h2><%= user.username %></h2>
    <p>Email: <%= user.email %></p>
    <p>Bio: <%= user.bio %></p>
</div>
```

---

## **🎯 Features Implemented Today**  
✅ **Form to Create Users**  
✅ **Store Users in MongoDB**  
✅ **Display Users as Cards**  
✅ **Click on User Card to View Full Profile**  

🚀 **Awesome Work! Keep Learning!** 💡🔥