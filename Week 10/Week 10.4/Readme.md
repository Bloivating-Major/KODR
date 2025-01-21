# 📅 **Week 10 - Day 4: Summary**  

Today's sessions were jam-packed with learning! We explored **Maps in JavaScript** during the first session and practiced some challenging DSA problems. Later, in the second session, we delved into the world of backend development, specifically learning how to connect the backend to a database using **Mongoose**. 🚀

---

## 🧠 **Session 1: DSA - Mastering Maps in JavaScript**  

### 🔑 **What are Maps in JavaScript?**  
A **Map** is a collection of key-value pairs where keys can be of any type (not limited to strings). Maps provide efficient data storage and retrieval operations.  

### 💡 **Key Features of Maps**  
- **Order Preservation**: Maps remember the original order of insertion.  
- **Flexible Keys**: Unlike objects, Maps allow keys to be any type (numbers, objects, etc.).  
- **Size Property**: Maps have a `size` property to directly fetch the number of entries.  
- **Built-in Methods**: Includes methods like `set`, `get`, `delete`, `has`, etc.

---

### 📚 **DSA Practice Questions**

#### **💬 Question 1: Unique Sum**  
📝 **Problem:**  
Find the sum of unique elements in an array using a Map.  
```javascript
function uniqueSum(nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let sum = 0;
  for (let [key, value] of map.entries()) {
    if (value === 1) sum += key;
  }
  return sum;
}

console.log(uniqueSum([1, 2, 3, 2])); // Output: 4
```

---

#### **💬 Question 2: Sort Names by Heights**  
📝 **Problem:**  
Sort names based on their heights.  
```javascript
function sortNames(names, heights) {
  let map = new Map();
  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }

  heights.sort((a, b) => b - a);
  let result = heights.map((height) => map.get(height));
  return result;
}

console.log(sortNames(["Mary", "John", "Emma"], [180, 165, 170])); 
// Output: ["Mary", "Emma", "John"]
```

### 🏆 **Takeaways from Session 1**  
1. **Efficient Data Management:** Maps provide an optimized way to store and manage key-value pairs.  
2. **Use Cases in DSA:** Maps are especially useful in problems involving frequency counts, sorting based on custom logic, and handling unique constraints.  
3. **Practice Is Key:** Solving DSA problems with Maps helps build problem-solving confidence.  

---

## 🖥️ **Session 2: Backend - Connecting to MongoDB with Mongoose**  

### 📂 **What is Mongoose?**  
Mongoose is an **ODM (Object Data Modeling)** library for MongoDB and Node.js. It helps developers interact with the database using an intuitive and structured syntax.  

---

### 🛠️ **Steps to Connect Backend to MongoDB**  

1. **Install Mongoose**:  
   ```bash
   npm install mongoose
   ```  

2. **Create a Database Connection File**:  
   Inside the `db` folder, create a `db.js` file to handle the MongoDB connection.  

   ```javascript
   const mongoose = require("mongoose");

   mongoose
     .connect("mongodb://localhost:27017/myDatabase")
     .then(() => console.log("Connected to MongoDB 🎉"))
     .catch((err) => console.log("Database connection error: ", err));
   ```

3. **Use the Connection in `server.js`**:  
   Link the database connection in the server's entry point.  

   ```javascript
   const database = require("./db/db");
   const app = require("./src/app");

   app.listen(3000, () => {
     console.log("Server is running on port 3000 🌐");
   });
   ```

4. **Create Models with Schemas**:  
   Use Mongoose schemas to define the structure of your MongoDB collections.  

   ```javascript
   const mongoose = require("mongoose");

   const userSchema = new mongoose.Schema({
     name: String,
     email: String,
     age: Number,
   });

   const User = mongoose.model("User", userSchema);

   module.exports = User;
   ```

5. **Perform CRUD Operations**:  
   Example of creating a new document:  
   ```javascript
   const User = require("./models/User");

   const newUser = new User({ name: "John Doe", email: "john@example.com", age: 25 });

   newUser.save()
     .then(() => console.log("User saved successfully!"))
     .catch((err) => console.log("Error saving user: ", err));
   ```

---

### 🏆 **Takeaways from Session 2**  
1. **Effortless MongoDB Integration:** Mongoose simplifies database connections and operations.  
2. **Schemas for Structure:** MongoDB is schema-less, but Mongoose adds a structured layer through schemas.  
3. **CRUD with Ease:** Performing database operations like create, read, update, and delete is seamless with Mongoose.  

---

## 🎉 **Highlights of the Day**  
- Explored **Maps in JavaScript** for optimized data handling.  
- Practiced DSA questions to strengthen problem-solving skills.  
- Learned how to **connect a backend** to a MongoDB database using **Mongoose**.  
- Understood the significance of schemas and how they bring structure to MongoDB.  

---

🌟 **Excited for more backend magic and DSA challenges tomorrow!** 💻  