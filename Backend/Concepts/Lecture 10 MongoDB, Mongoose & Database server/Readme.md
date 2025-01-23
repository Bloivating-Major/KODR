
---

# Lecture 10: Data Storage & MongoDB 🗄️

Learn about how **data storage** works, the **types of databases**, and how to integrate and manage data using **MongoDB** with Node.js. Let’s dive in! 🏊‍♂️

---

## 📂 **What is Data Storage?**

Data storage allows us to keep information about users, such as:

- **Text**: Usernames, emails, etc.
- **Images**: Profile pictures, product photos, etc.
- **Other Formats**: Videos, PDFs, etc.

Databases play a crucial role in storing and organizing this data efficiently.

---

## 🔍 **Types of Databases**

1. **SQL Databases** 🗃️  
   - **Structure**: Data is stored in rows and columns (like spreadsheets).  
     Example:  
     ```
     | Name    | Age |
     |---------|-----|
     | Sambhav |  20 |
     ```

2. **NoSQL Databases** 🧩  
   - **Structure**: Data is stored in objects or key-value pairs.  
     Example:  
     ```json
     {
       "name": "Sambhav",
       "age": 20
     }
     ```

3. **MongoDB** 🌱  
   - A **NoSQL database** that stores data in a **JSON-like object format**.  
   - It's scalable and widely used in modern applications.

---

## ❓ **Why MongoDB?**

- MongoDB is a **document-oriented database** that allows us to:  
  - Store and retrieve **structured** or **semi-structured** data.  
  - Work easily with **Node.js** for backend development.  
  - Handle complex data structures with **ease**.

---

## 🔑 **Important Terminologies**

1. **Backend Servers** 🖥️  
   - Backend consists of two key servers:  
     - **Application Server** (e.g., Node.js):  
       Handles routes, user requests, and server logic.  
     - **Database Server** (e.g., MongoDB):  
       Manages storage, retrieval, and updating of data.

2. **Collections** 📚  
   - Collections are like **folders** that contain related data (documents).  
     Example:  
     - User data: `userCollection`
     - Product data: `productCollection`

3. **Documents** 📄  
   - A single **data record** within a collection.  
     Example:  
     ```json
     {
       "_id": "1",
       "name": "Sambhav",
       "age": 20
     }
     ```

---

## 🔄 **Code to Database Flow**

Here’s how the flow works between your **Node.js application** and **MongoDB**:

| **Code**                   | **MongoDB Database**       |
|----------------------------|---------------------------|
| `mongoose.connect()`       | Creates the database      |
| `model.create()`           | Creates a collection      |
| `create code` (insert data)| Adds a document           |

---

## 🗂️ **Database Structure**

Imagine a company storing user and product data. Here’s how databases, collections, and documents work together:

### **Database A**
- **User Data Collection** (`userCollection`):  
  - `user1` - Document  
  - `user2` - Document  

- **Product Data Collection** (`productCollection`):  
  - `product1` - Document  
  - `product2` - Document  

---

### **Database B**
- **New Posts Collection** (`postCollection`):  
  - `post1` - Document  
  - `post2` - Document  

- **Product Data Collection** (`productCollection`):  
  - `product1` - Document  
  - `product2` - Document  

---

## 🚀 **Next Steps**

1. Set up **MongoDB** and integrate it with your **Node.js** project.  
2. Use `mongoose` to create **connections**, **models**, and **documents**.  
3. Organize your data into **collections** for easy retrieval and management.  

🎉 Happy Learning! Let me know if you'd like a practical implementation example.