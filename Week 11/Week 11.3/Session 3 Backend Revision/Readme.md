# 📚 Week 11 - Day 3: Backend Notes (Session 2)  
Today, we explored **how to set up a complete backend server** using **Express**, **EJS**, and **MongoDB**. This guide provides a step-by-step walkthrough to help you create a backend application with user management, including forms, database connection, and routing. 🚀  

---

## 🛠️ **Step-by-Step Implementation**  

### 🌀 **1. Initialize the Project**  
1. Run the following command to create a new `package.json` file:  
   ```bash
   npm init -y
   ```  
2. Install **Nodemon** globally for easy server restarts during development:  
   ```bash
   npm i nodemon -g
   ```  

---

### 📦 **2. Install Required Dependencies**  
Install the following essential packages:  
- **EJS** (View Engine)  
- **Express** (Server Framework)  
- **Mongoose** (MongoDB ODM)  
- **Nodemon** (For Development)  

Run the command:  
```bash
npm i ejs express mongoose nodemon
```  

---

### 📂 **3. Create `server.js`**  
This is your entry point for the application.  

- Update the `main` attribute in the `package.json` file:  
  ```json
  "main": "server.js"
  ```  

- Basic `server.js` structure:  
  ```javascript
  const database = require('./src/db/db'); // Import DB connection
  const app = require('./src/app');       // Import Express configuration

  database(); // Connect to MongoDB

  app.listen(3000, () => {
    console.log('🚀 Server is running on http://localhost:3000');
  });
  ```  

---

### 🚀 **4. Configure Express in `src/app.js`**  
- **Create `src/app.js`** and configure Express:  
  ```javascript
  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');
  const indexRoutes = require('./routes/index.routes'); // Import Routes

  app.set('view engine', 'ejs'); // Set EJS as View Engine
  app.use(express.static('public')); // Serve Static Files
  app.use(bodyParser.urlencoded({ extended: true })); // Parse Form Data

  // Use Routes
  app.use('/', indexRoutes);

  module.exports = app;
  ```  

---

### 🛤️ **5. Create Routes (`src/routes`)**  
- Create a `routes` folder inside `src`.  
- Add a file named `index.routes.js` to manage all routes:  
  ```javascript
  const express = require('express');
  const router = express.Router();
  const userController = require('../controllers/user.controller'); // Import Controller

  // Home Route (Display Form)
  router.get('/', userController.renderHome);

  // Create User Route
  router.post('/create', userController.createUser);

  // Display All Users Route
  router.get('/users', userController.getAllUsers);

  module.exports = router;
  ```  

---

### 🧠 **6. Create Controllers (`src/controllers`)**  
Controllers handle the logic for each route.  

- Create a file named `user.controller.js`:  
  ```javascript
  const User = require('../models/user.model'); // Import User Model

  // Render Home Page with Form
  module.exports.renderHome = (req, res) => {
    res.render('home');
  };

  // Create User and Redirect to Users Page
  module.exports.createUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      await User.create({ name, email });
      res.redirect('/users');
    } catch (error) {
      res.send('Error creating user: ' + error.message);
    }
  };

  // Get All Users
  module.exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find(); // Fetch All Users from DB
      res.render('users', { users }); // Pass Users Data to EJS
    } catch (error) {
      res.send('Error fetching users: ' + error.message);
    }
  };
  ```  

---

### 🗂️ **7. Connect to Database (`src/db/db.js`)**  
- **Create a `db` folder inside `src`**.  
- Add a file named `db.js` to handle the database connection:  
  ```javascript
  const mongoose = require('mongoose');

  const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/mydatabase');
      console.log('✅ Connected to MongoDB');
    } catch (error) {
      console.error('❌ Error connecting to MongoDB:', error);
    }
  };

  module.exports = connectDB;
  ```  

---

### 📄 **8. Create User Model (`src/models/user.model.js`)**  
- **Add a `models` folder in `src`**.  
- Create a file named `user.model.js` for the user schema:  
  ```javascript
  const mongoose = require('mongoose');

  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;
  ```  

---

### 🖼️ **9. Create Views (`views`)**  
- Add a `views` folder at the root of your project.  
- Create the following **EJS** files:

#### 1️⃣ **Home Page (`home.ejs`)**  
Contains a form to add a new user:  
```html
<!DOCTYPE html>
<html>
<head>
  <title>Add User</title>
</head>
<body>
  <h1>Add a New User</h1>
  <form action="/create" method="POST">
    <input type="text" name="name" placeholder="Name" required />
    <input type="email" name="email" placeholder="Email" required />
    <button type="submit">Create</button>
  </form>
</body>
</html>
```  

#### 2️⃣ **Users Page (`users.ejs`)**  
Displays all users in card format:  
```html
<!DOCTYPE html>
<html>
<head>
  <title>All Users</title>
</head>
<body>
  <h1>All Users</h1>
  <div>
    <% users.forEach(user => { %>
      <div style="border: 1px solid black; padding: 10px; margin: 10px;">
        <h3><%= user.name %></h3>
        <p><%= user.email %></p>
      </div>
    <% }); %>
  </div>
</body>
</html>
```  

---

### 🎉 **How It Works**  
1. The **home route (`/`)** renders a form to create a new user.  
2. Submitting the form sends a `POST` request to **`/create`**, which saves the user to the database.  
3. The **`/users`** route displays all users in a card layout.

---

### 📈 **Project Flow Overview**  
1. **Routes**: `/`, `/create`, `/users`  
2. **Backend**: Express handles routing and middleware.  
3. **Frontend**: EJS dynamically renders pages.  
4. **Database**: MongoDB stores user data, connected via Mongoose.  

---

### 💡 **Key Concepts Learned**  
- Configuring **Express** for middleware and routing.  
- Using **EJS** for dynamic templates.  
- Connecting **MongoDB** with **Mongoose**.  
- Organizing code into **routes**, **controllers**, and **models**.  

---

### ✨ **Final Words**  
This structure will help you build scalable and maintainable backend applications. Keep experimenting and adding features to improve your skills! 🚀