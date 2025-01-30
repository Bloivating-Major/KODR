
---

# **Lecture 11: MongoDB Integration with Node.js 🗄️🚀**

Learn how to **connect MongoDB**, **create models**, and perform **CRUD operations** using **Mongoose** in a Node.js application.

---

## 📌 **1. Setting up MongoDB Connection**  

To connect MongoDB to your project, create a file named **`app.js`** and add the following:  

```javascript
const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://0.0.0.0/youtubeBackendSeries')
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch(err => console.error(err));
};

module.exports = connect;
```

🔹 **What does this code do?**  
- Connects to **MongoDB** running locally.  
- Logs a message upon successful connection.  
- Catches and displays errors if the connection fails.  

---

## 📌 **2. Creating a User Model (Schema Definition)**  

Create a file **`models/user.model.js`** and define a **User Schema** using Mongoose:  

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
```

🔹 **Key Points:**  
- **Defines a schema (`userSchema`)** with `username`, `email`, and `password`.  
- **Creates a model (`User`)** that represents the `user` collection in MongoDB.  
- **Exports the model** so it can be used in other files.

---

## 📌 **3. Creating API Routes using Express Router**  

Create **`routes/user.routes.js`** and define API endpoints:  

```javascript
const { Router } = require('express');
const router = Router();
const controller = require('../controller/index.controller');

router.get('/', controller.indexController);
router.get('/create', controller.createController);
router.get('/update', controller.updateController);
router.get('/read', controller.readController);
router.get('/delete', controller.deleteController);

module.exports = router;
```

🔹 **What does this code do?**  
- Defines **routes** for different CRUD operations.  
- Uses **controllers** to handle the logic for each route.  

---

## 📌 **4. Creating a User (POST Request)**  

Inside **`controller/index.controller.js`**, create the user using `User.create()`:  

```javascript
const User = require('../models/user.model');

module.exports.indexController = (req, res) => {
    res.send('Hello World!');
};

module.exports.createController = async (req, res) => {
    let createdUser = await User.create({
        username: "Soham",
        email: "soham@gmail.com",
        password: "12345"
    });

    res.send(createdUser);
};
```

🔹 **How does this work?**  
- Calls `User.create()` to insert a new user in the database.  
- Returns the newly created **user document**.  

---

## 📌 **5. Understanding the `id` Field in MongoDB**  

When a user is created, MongoDB automatically assigns an **_id** field to each document.  

Example response:  

```json
{
    "_id": "65bc12345678abcd",
    "username": "Soham",
    "email": "soham@gmail.com",
    "password": "12345",
    "__v": 0
}
```

🔹 **What is `_id`?**  
- It's a **unique identifier** for each document.  
- MongoDB uses it as the **primary key**.  

---

## 📌 **6. Updating a User (`findOneAndUpdate`)**  

To update a user's details, modify `controller/index.controller.js`:  

```javascript
module.exports.updateController = async (req, res) => {
    const updatedUser = await User.findOneAndUpdate(
        { username: "Sambhav" }, 
        { username: "Sambhav Rupesh Wakhariya" }, 
        { new: true }
    );   
    res.send(updatedUser);
};
```

🔹 **How does this work?**  
- Finds a user with `username: "Sambhav"`.  
- Updates the `username` field to `"Sambhav Rupesh Wakhariya"`.  
- `{ new: true }` ensures the **updated document** is returned.  

---

## 📌 **7. Reading Users (`find()` and `findOne()`)**  

### **a) Get All Users (`find()`)**  
```javascript
module.exports.readController = async (req, res) => {
    const users = await User.find();
    res.send(users);
};
```
- Returns **all users** as an **array**.
- If **no users exist**, it returns an **empty array `[]`**.

---

### **b) Get One User (`findOne()`)**  
```javascript
module.exports.readController = async (req, res) => {
    const user = await User.findOne({ username: "Soham" });
    res.send(user);
};
```
- Returns **a single user** as an **object**.
- If **no user is found**, it returns `null`.
- If **multiple users match**, it returns the **first match**.

---

## 📌 **8. Deleting a User (`findOneAndDelete`)**  

To delete a user, modify `controller/index.controller.js`:  

```javascript
module.exports.deleteController = async (req, res) => {
    const deletedUser = await User.findOneAndDelete({ username: "Soham" });
    res.send(deletedUser);
};
```

🔹 **How does this work?**  
- Searches for a user with `username: "Soham"`.  
- Deletes the first match found.  
- Returns the **deleted document** as confirmation.  

---

## 🎯 **Summary of CRUD Operations**  

| Operation  | Method  | Mongoose Query  | Returns  |
|------------|---------|----------------|----------|
| Create User  | `POST` | `User.create(data)` | Created document |
| Read All Users | `GET` | `User.find()` | Array of users |
| Read One User | `GET` | `User.findOne({ filter })` | Single user object |
| Update User  | `PUT` | `User.findOneAndUpdate(filter, update, { new: true })` | Updated user object |
| Delete User  | `DELETE` | `User.findOneAndDelete({ filter })` | Deleted user object |

---

## 🚀 **Next Steps**
1. Test API routes using **Postman** or a frontend UI.  
2. Implement **authentication** using **JWT**.  
3. Improve the **database schema** with validations & indexing.  

🎉 Happy Coding! Let me know if you need any clarifications! 😊