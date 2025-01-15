# 🚀 Week 10 - Day 3: **Introduction to Databases**  

In today’s session, we explored the fundamentals of **databases** and connected our **Express server** to a **MongoDB database** using Mongoose. Let’s break down everything we learned!  

---

## 🧠 **What is a Database?**  
A **database** is like a container that stores data in an organized way, allowing for easy access, management, and manipulation.

### 📦 **Why Use a Database?**  
- Imagine creating an app like **Instagram**:  
  - You can **post** images with captions.  
  - Users can **like** and **comment** on posts.  
  - There are **millions of posts** and interactions.  
  - To manage this massive amount of data, we need a **database**!  

---

## 🔥 **Types of Databases**  

### 1️⃣ **Relational Database**  
- Stores data in **tables** with relationships.  
- **Example:** A table showing crops stored by companies:  
  | Company   | Product   | Quantity |  
  |-----------|-----------|----------|  
  | Amazon    | Wheat     | 1000 kg  |  
  | Netflix   | Rice      | 500 kg   |  
  | Flipkart  | Pulses    | 300 kg   |  

### 2️⃣ **Non-Relational Database**  
- Stores data in a more flexible, **document-oriented** format.  
- **Example:** MongoDB stores data in **JSON-like documents**.  

---

## 🌐 **MongoDB: Our Non-Relational Database**  

### 🛠️ **Tools to Work with MongoDB**  
1. **MongoDB Community Server**:  
   - Local database to store your data.  
2. **MongoDB Compass**:  
   - A graphical interface to visualize your MongoDB data.

---

## 🔗 **Connecting MongoDB to Express Server**  

To connect MongoDB with your **Express server**, we use a package called **Mongoose**.  

---

### 📂 **Directory Structure**  
```
project/
├── db/
│   ├── db.js        # Database connection
├── src/
│   ├── app.js       # Express configuration
├── server.js        # Server entry point
├── package.json
```

---

### 💾 **Step 1: Setting Up Database Connection**  
1. **Install Mongoose**:  
   ```bash
   npm install mongoose
   ```

2. **Create a `db.js` File** in the `db` Folder:  

   ```javascript
   const mongoose = require("mongoose");

   mongoose
     .connect("mongodb://localhost:27017/")
     .then(() => {
       console.log("Connected to MongoDB");
     })
     .catch((err) => console.log(err));
   ```

---

### 🚀 **Step 2: Connect Database in `server.js`**  

Here, we import the database connection and initialize the server:  

```javascript
const database = require("./db/db"); // Import database connection
const app = require("./src/app");    // Import Express app

console.log(database); // Log database status

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

---

## 🎯 **What We Learned Today**  
1. **Databases Basics**:  
   - Databases are essential for storing and managing application data.  
   - Two main types: **Relational** and **Non-Relational** databases.  

2. **MongoDB Overview**:  
   - Used as a **non-relational database** for flexibility and scalability.  
   - Visualize your data using **MongoDB Compass**.  

3. **Connecting MongoDB to Express**:  
   - Use **Mongoose** for seamless integration with your application.  

---

## 🌟 **Code Recap**

### Database Connection (`db.js`)  
```javascript
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));
```

### Server Entry Point (`server.js`)  
```javascript
const database = require("./db/db");
const app = require("./src/app");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

---

## 📝 **Takeaways**  
- Databases are the backbone of any application dealing with large amounts of data.  
- MongoDB is a powerful non-relational database that's easy to use.  
- Mongoose simplifies the integration of MongoDB with Node.js applications.  

---  

Happy Coding! 🎉  