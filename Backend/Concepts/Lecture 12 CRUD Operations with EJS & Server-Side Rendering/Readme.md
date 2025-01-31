

---

# 🚀 **Lecture 12: CRUD Operations with MongoDB & EJS**  

## 🛠 **Project Setup**  
1️⃣ Initialize the project  
```sh
npm init -y  
npm install express mongoose ejs  
```
2️⃣ Create a project structure  
```
/project-folder  
 ├── server.js  
 ├── src/  
 │   ├── app.js  
 │   ├── db/  
 │   │   ├── db.js  
 │   ├── models/  
 │   │   ├── user.model.js  
 │   ├── routes/  
 │   │   ├── index.routes.js  
 │   ├── controllers/  
 │   │   ├── index.controller.js  
 │   ├── views/  
 │       ├── index.ejs  
 │       ├── read.ejs  
 │       ├── edit.ejs  
```  

---

## 🎯 **Step 1: Setting Up the Server**  
📌 *File:* `server.js`  
✅ **Connect MongoDB & Start Server**  
```js
const app = require('./src/app');
const connect = require('./src/db/db');

connect();
app.listen(3000, () => {
    console.log("🚀 Server started on port 3000");
});
```

---

## 🎯 **Step 2: Creating the Express App**  
📌 *File:* `src/app.js`  
✅ **Initialize Express, Set View Engine & Middleware**  
```js
const express = require('express');
const indexRoute = require('./routes/index.routes');

const app = express();

app.set('view engine', 'ejs');  
app.set('views', './src/views');  

app.use(express.urlencoded({ extended: true }));  
app.use(express.json());  

app.use('/', indexRoute);

module.exports = app;
```

---

## 🎯 **Step 3: Database Connection**  
📌 *File:* `src/db/db.js`  
✅ **Connect to MongoDB**  
```js
const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://0.0.0.0/youtubeBackendSeries')
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error(err));
}

module.exports = connect;
```

---

## 🎯 **Step 4: Creating the User Model**  
📌 *File:* `src/models/user.model.js`  
✅ **Define User Schema**  
```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
```

---

## 🎯 **Step 5: Creating Routes**  
📌 *File:* `src/routes/index.routes.js`  
✅ **Define CRUD Routes**  
```js
const { Router } = require("express");
const router = Router();
const controller = require("../controllers/index.controller");

router.get("/", controller.indexController);
router.get("/read", controller.readController);
router.post("/create", controller.createController);
router.get("/delete/:id", controller.deleteController);
router.get("/edit/:userId", controller.editController);
router.post("/update/:userId", controller.updateController);

module.exports = router;
```

---

## 🎯 **Step 6: Implementing CRUD Controllers**  
📌 *File:* `src/controllers/index.controller.js`  
✅ **Controller Functions for CRUD Operations**  

🔹 **Homepage (Create User Form)**  
```js
module.exports.indexController = (req, res) => {
    res.render("index");
};
```

🔹 **Create User** 📝  
```js
module.exports.createController = async (req, res) => {
    const { name, email, image } = req.body;
    const user = new User({ name, email, image });
    await user.save();
    res.redirect("/read");
};
```

🔹 **Read Users** 👀  
```js
module.exports.readController = async (req, res) => {
    let users = await User.find();
    res.render("read", { users });
};
```

🔹 **Delete User** ❌  
```js
module.exports.deleteController = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id });
    res.redirect("/read");
};
```

🔹 **Edit User Page** ✏  
```js
module.exports.editController = async (req, res) => {
    let user = await User.findById(req.params.userId);
    res.render("edit", { user });
};
```

🔹 **Update User** 🔄  
```js
module.exports.updateController = async (req, res) => {
    const { name, email, image } = req.body;
    await User.findOneAndUpdate({ _id: req.params.userId }, { name, email, image });
    res.redirect("/read");
};
```

---

## 🎯 **Step 7: Creating Views with EJS**  
📌 *File:* `src/views/index.ejs`  
✅ **Form to Create a User**  
```html
<div class="container">
    <h1>Create User</h1>
    <form action="/create" method="post">
        <input type="text" name="name" placeholder="Enter Name">
        <input type="email" name="email" placeholder="Enter Email">
        <input type="url" name="image" placeholder="Enter Image URL">
        <button type="submit">Create</button>
    </form>
    <a href="/read">Show Users</a>
</div>
```

📌 *File:* `src/views/read.ejs`  
✅ **Display Users**  
```html
<div class="container">
    <h1>All Users</h1>
    <% users.forEach(user => { %>
        <div>
            <img src="<%= user.image %>" alt="<%= user.name %>">
            <h3><%= user.name %></h3>
            <h5><%= user.email %></h5>
            <a href="/edit/<%= user._id %>">Edit</a>
            <a href="/delete/<%= user._id %>">Delete</a>
        </div>
    <% }) %>
</div>
```

📌 *File:* `src/views/edit.ejs`  
✅ **Edit User Form**  
```html
<div class="container">
    <h1>Update User</h1>
    <form action="/update/<%= user._id %>" method="post">
        <input type="text" name="name" value="<%= user.name %>">
        <input type="email" name="email" value="<%= user.email %>">
        <input type="url" name="image" value="<%= user.image %>">
        <button type="submit">Update</button>
    </form>
</div>
```

---

## 🎯 **Step 8: Running the Project**  
🔹 **Start the server** 🚀  
```sh
node server.js  
```
🔹 **Visit:**  
- **http://localhost:3000/** → Create a User  
- **http://localhost:3000/read** → View & Manage Users  

---

## 🎯 **Key Takeaways** 📌  
✅ **CRUD Operations** with MongoDB 🛢  
✅ **Server-Side Rendering** using EJS 🎨  
✅ **Express & Mongoose Integration** 🚀  
✅ **Routing & Controllers for Clean Code** ✨  

---

### 🎉 Congratulations! You have built a fully functional CRUD app with MongoDB, Express, and EJS! 🚀💡