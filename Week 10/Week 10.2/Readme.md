# 🌟 Week 10 - Day 2: **Building a Backend Server with Express.js**  

---

## 🎯 **Topics Covered**  
In today’s session, we focused on learning how to:  
1. **Start a Server** 🚀  
2. **Connect to a Database** 💾  
3. Configure **Express Middleware** ⚙️  
4. Organize code into **Controllers, Routes, and App Structure** 📂  

---

## 🛠️ **Steps to Create the Backend**

### 1️⃣ **Initialize the Project**  
- Start by initializing the project:  
  ```bash
  npm init -y
  ```  
- Update the `package.json` to set the entry point to `server.js`.  

---

### 2️⃣ **Create Entry Point (server.js)**  
- This file starts the server and connects it to the application logic.  
```javascript
const app = require("./src/app");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

---

### 3️⃣ **Express Configuration (app.js)**  
- The `app.js` file handles:  
  - Configuring middleware.  
  - Defining routes for various endpoints (`/`, `/users`, `/products`, etc.).  

```javascript
const express = require("express");
const controller = require("../controllers/index.controller");
const userController = require("../controllers/user.controller");
const indexRoutes = require("../routes/index.routes");
const userRoutes = require("../routes/users.routes");

const app = express();

// Route Configurations
app.use("/", indexRoutes);
app.use("/users", userRoutes);

// Direct Routes
app.get("/about", controller.aboutController);
app.get("/", controller.indexController);
app.get("/user/profile", userController.profileController);

module.exports = app;
```

---

### 4️⃣ **Controllers**  
Controllers contain the logic for handling specific routes.  

#### **Controller 1: index.controller.js**
```javascript
module.exports.indexController = (req, res) => {
  res.send("Hello World This is Routes");
};

module.exports.aboutController = (req, res) => {
  res.send("Welcome to About Page");
};
```

#### **Controller 2: user.controller.js**
```javascript
module.exports.userController = (req, res) => {
  res.send("Hello World This is User Routes");
};

module.exports.profileController = (req, res) => {
  res.send("Profile Page");
};
```

---

### 5️⃣ **Routes**  
Routes are used to link endpoints with their respective controllers.  

#### **Route File 1: index.routes.js**
```javascript
const express = require("express");
const controller = require("../controllers/index.controller");
const router = express.Router();

console.log("This is Running");

router.get("/", controller.indexController);
router.get("/about", controller.aboutController);

module.exports = router;
```

#### **Route File 2: users.routes.js**
```javascript
const express = require("express");
const userControl = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/", userControl.userController);

module.exports = userRouter;
```

---

## 🌟 **Directory Structure**  
Here's how the project directory is organized:  
```
project/
├── controllers/
│   ├── index.controller.js
│   ├── user.controller.js
├── routes/
│   ├── index.routes.js
│   ├── users.routes.js
├── src/
│   ├── app.js
├── server.js
├── package.json
```

---

## 🧠 **Key Learnings**
1. **Express Basics:**  
   - `app.get()`: Define routes.  
   - `app.listen()`: Start the server.  

2. **Separation of Concerns:**  
   - Controllers manage logic.  
   - Routes manage URL endpoints.  

3. **Middleware Configuration:**  
   - Modularize functionality using `app.use()`.  

---

## ✅ **What We Built**
- A simple **Express server** with multiple routes.  
- **Controllers** for handling logic.  
- Organized **routes** for scalable project development.  

---

# 🌟 Week 10 - Day 2: **DSA Session Recap**  
Today's session focused on solving interesting **LeetCode-style problems** and introduced the concepts of **Set** and **Map** in JavaScript. Let's dive into what we learned! 🚀  

---

## 🧩 **Questions Solved**

### 🥇 **Question 1: Maximum Candies Distribution**  
**Problem Statement:**  
You are given an array `candyType`, where each value represents a type of candy. Your task is to determine how many **unique types** of candies a girl can eat if she can eat at most half of the candies.

```javascript
function Question1() {
  let candyType = [1, 1, 2, 3];
  let set = new Set(candyType); // Create a Set to store unique candy types
  console.log(set);

  let size = candyType.length / 2; // Calculate the maximum number of candies she can eat

  if (size >= set.size) {
    console.log("Max Candies she can have is ", set.size); // All unique candies
  } else {
    console.log("Min Candies she can have is ", size); // Half of the candies
  }
}

Question1();
```

**Output:**  
- If the unique candy types (`set.size`) are less than or equal to half the total candies, she can have all unique candies.  
- Otherwise, she can only have up to `size` unique candies.  

---

### 🥈 **Question 2: Find Duplicate and Missing Number**  
**Problem Statement:**  
Given an array `nums` of size `n`, containing numbers from `1` to `n`, find one duplicate number and the missing number.

```javascript
function Question2() {
  let nums = [1, 2, 2, 4];
  let set = new Set();
  let dup = 0;

  // Find duplicate number
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) dup = nums[i];
    else set.add(nums[i]);
  }

  // Find missing number
  let count = 1;
  for (let i = 0; i < set.size; i++) {
    if (set.has(count)) count++;
    else return [dup, count];
  }

  return [dup, count];
}

console.log(Question2());
```

**Output:**  
- Returns an array `[duplicate, missing]`.  

**Example:**  
For `nums = [1, 2, 2, 4]`:  
- Duplicate: `2`  
- Missing: `3`  
- Output: `[2, 3]`  

---

## 🔑 **New Concepts: Set and Map**

### 🎯 **Set**  
A **Set** is a collection of unique values.  

**Key Features of Set:**  
1. **Unique Values Only:** Automatically removes duplicates.  
2. **Common Methods:**
   - `set.add(value)` → Adds a value to the set.  
   - `set.has(value)` → Checks if the value exists in the set.  
   - `set.delete(value)` → Removes a value from the set.  
   - `set.size` → Returns the size of the set.  

**Example:**  
```javascript
let set = new Set([1, 1, 2, 3]);
console.log(set); // Output: Set { 1, 2, 3 }
```

---

### 🎯 **Map**  
A **Map** is a collection of key-value pairs, where both keys and values can be of any data type.  

**Key Features of Map:**  
1. **Unique Keys:** Each key must be unique.  
2. **Order-Preserved:** Keys are iterated in the order they were added.  
3. **Common Methods:**
   - `map.set(key, value)` → Adds a key-value pair.  
   - `map.get(key)` → Retrieves the value associated with the key.  
   - `map.delete(key)` → Removes a key-value pair.  
   - `map.size` → Returns the number of key-value pairs.  

**Example:**  
```javascript
let map = new Map();

map.set("raj", 5);
map.set("amit", 7);
map.set("kunal", 5);
map.set("raj", 9); // Updates the value for key "raj"
map.set(10, 5);

console.log(map);
// Output: Map(4) { 'raj' => 9, 'amit' => 7, 'kunal' => 5, 10 => 5 }
```

---

## 📝 **Takeaways**

1. **Set:**  
   - Use when you need to store unique values.  
   - Great for finding duplicates or ensuring uniqueness.  

2. **Map:**  
   - Use for key-value pairs where keys can be of any type.  
   - Useful for scenarios like counting occurrences or storing configurations.  

3. **Problem-Solving Insights:**  
   - Leverage **Set** for duplicate elimination and quick lookups.  
   - Use **Map** to efficiently store and retrieve values based on unique keys.  

---

🎉 Happy Coding!