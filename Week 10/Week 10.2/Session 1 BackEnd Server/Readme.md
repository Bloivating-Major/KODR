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

### 🚀 Keep Learning!  
Stay tuned for more backend development topics as we delve deeper into Express.js and database integration!  