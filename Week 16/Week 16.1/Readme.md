# 🎓 **Week 16 Day 1 - DSA Session** 🚀  

## 🏷️ **Today's Topics Covered:**
1. 📚 **Classes and Objects**  
2. 🏗️ **Constructors**  

---

## 🔍 **1. Classes and Objects in JavaScript**  

### 🎯 **What is a Class?**  
A **class** is like a blueprint for creating objects with specific properties and methods. Think of it as a recipe 🍰—you can use the same recipe to bake as many cakes as you want, but each cake can have its own decorations!

### ✅ **Syntax of a Class:**  
```js
class ClassName {
  // Constructor method to initialize object properties
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  // Method inside the class
  displayInfo() {
    console.log(`Property 1: ${this.property1}, Property 2: ${this.property2}`);
  }
}
```

---

### 👤 **What is an Object?**  
An **object** is an instance of a class. Using the class blueprint, you can create multiple objects with their own unique values.  

For example:
```js
// Define a simple class
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayCar() {
    console.log(`🚗 Brand: ${this.brand}, Model: ${this.model}`);
  }
}

// Create objects from the class
let car1 = new Car("Tesla", "Model S");
let car2 = new Car("BMW", "i8");

// Display object data
car1.displayCar();  // Output: 🚗 Brand: Tesla, Model: Model S
car2.displayCar();  // Output: 🚗 Brand: BMW, Model: i8
```

---

## 🏗️ **2. Constructors in JavaScript**  

### 💡 **What is a Constructor?**  
A **constructor** is a special method inside a class that gets called automatically when a new object is created from that class. It initializes object properties.  

**Syntax:**  
```js
class Example {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
}
```

---

### 📘 **Real Example: Student Class**  

```js
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display student details
  displayStudent() {
    console.log(`🎓 Name: ${this.name}, Age: ${this.age}`);
  }
}

// Creating student objects
let student1 = new Student("John", 20);
let student2 = new Student("Emma", 22);

// Displaying details
student1.displayStudent();  // 🎓 Name: John, Age: 20
student2.displayStudent();  // 🎓 Name: Emma, Age: 22
```

---

## 🛠️ **Why Use Classes and Constructors?**  
✅ **Reusable Code:** Write once, use multiple times.  
✅ **Easy Object Creation:** Quickly create multiple objects with different values.  
✅ **Encapsulation:** Group related properties and methods together.  

---

## 💻 **Bonus: Adding More Methods to Class**  

```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`💰 ${amount} deposited. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`💸 ${amount} withdrawn. New balance: $${this.balance}`);
    } else {
      console.log(`❌ Withdrawal failed. Insufficient funds.`);
    }
  }
}

// Creating a bank account object
let myAccount = new BankAccount("Alex", 1000);

// Performing transactions
myAccount.deposit(500); // 💰 500 deposited. New balance: $1500
myAccount.withdraw(300); // 💸 300 withdrawn. New balance: $1200
myAccount.withdraw(2000); // ❌ Withdrawal failed. Insufficient funds.
```

---

## 🔥 **Key Takeaways**
- 📌 **Classes** are blueprints for creating objects.  
- 🚀 **Constructors** initialize object properties.  
- 🛡️ **Objects** are instances of a class, each having their own unique data.  
- 📖 Methods in a class allow objects to perform actions.  

---

## ❓ **Practice Questions** 💡  
1. Create a `Book` class with properties like `title`, `author`, and `price`. Add a method to display book details.  
2. Create a `Person` class that takes `name` and `birthYear`. Add a method to calculate the current age.  
3. Build a `Rectangle` class to calculate the area and perimeter using methods.  

---

## 🌟 **Final Thought**  
Using classes and objects makes your code organized and scalable. Mastering these foundational concepts in JavaScript will set you up for success in both **DSA** and real-world **project development**! 🚀  

Happy Coding! 😄💻

# 📦 **Week 16 Day 1 - Backend Session 2** 🔥  

## 🎯 **Today's Focus: File Uploads Using Multer in Node.js with Local Storage**  

In this session, we explored how to upload files, particularly images, using **Multer**—a middleware for handling `multipart/form-data` in Node.js, primarily used for uploading files. 🚀  

---

### 📚 **What is Multer?**  
Multer is a Node.js middleware for handling file uploads. It processes incoming form data and stores files locally or on cloud storage solutions like AWS S3.  

✅ **Why Use Multer?**  
- Supports multipart form data  
- Easy file filtering and validation  
- Configurable storage options (local/cloud)  

---

## 🔧 **1️⃣ Setting Up the Project**

### 🛠️ **Installation Commands**
First, initialize your Node.js project and install the necessary packages:

```bash
npm init -y  # Initialize Node.js project
npm install express multer dotenv  # Install Express, Multer, and Dotenv
```

---

## 📂 **2️⃣ Project Structure**  

```
📁 backend-multer-upload
│
├── 📂 src
│   ├── 📂 uploads          # Local storage folder for uploaded files
│   ├── 📂 routes           # Route handlers
│   │   └── file.routes.js  # File upload routes
│   ├── 📂 controllers      # File upload logic
│   │   └── file.controller.js
│   ├── 📂 middleware       # Multer configuration
│   │   └── multerConfig.js
│   └── app.js              # Express app configuration
│
├── .env                    # Environment variables
├── server.js               # Entry point for the server
└── package.json            # Project dependencies
```

---

## 🔒 **3️⃣ Configuring Multer for Local Storage**

### 📥 **Multer Middleware Setup** (`multerConfig.js`)
```js
const multer = require('multer');
const path = require('path');

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/uploads'); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const mimeType = allowedTypes.test(file.mimetype);
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

  if (mimeType && extName) {
    return cb(null, true);
  }
  cb(new Error('Only images are allowed!'));
};

// Upload instance
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max file size 5MB
});

module.exports = upload;
```

---

## 📑 **4️⃣ Creating Routes for File Upload** (`file.routes.js`)
```js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerConfig');
const { uploadFile } = require('../controllers/file.controller');

// Route for uploading an image
router.post('/upload', upload.single('image'), uploadFile);

module.exports = router;
```

---

## 🏷️ **5️⃣ File Upload Controller Logic** (`file.controller.js`)
```js
module.exports.uploadFile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded!" });
    }

    res.status(200).json({
      message: "File uploaded successfully!",
      filePath: req.file.path,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

---

## 🚀 **6️⃣ Setting Up Express App** (`app.js`)
```js
const express = require('express');
const app = express();
const fileRoutes = require('./routes/file.routes');

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the upload directory
app.use('/uploads', express.static('src/uploads'));

// Use routes
app.use('/api', fileRoutes);

module.exports = app;
```

---

## 🎬 **7️⃣ Running the Server** (`server.js`)
```js
require('dotenv').config();
const app = require('./src/app');

// Start the server on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

---

## 🌍 **8️⃣ Testing the File Upload with Postman**  

1. Select `POST` request  
2. Set the URL to: `http://localhost:3000/api/upload`  
3. Go to **Body** → **form-data**  
4. Add a key named `image` → set type to **File** → upload an image  
5. Send the request 🚀  

✅ **Expected Response:**
```json
{
  "message": "File uploaded successfully!",
  "filePath": "src/uploads/1698765432-myimage.jpg"
}
```

---

## 🔒 **9️⃣ Handling Common Errors**
- ❌ **File Too Large:** Limits file size to 5MB  
- ❌ **Invalid File Type:** Only images allowed (`jpeg`, `jpg`, `png`, `gif`)  
- ❌ **No File Uploaded:** Handle empty requests gracefully  

---

## 📊 **10️⃣ Benefits of Using Multer**
- 🔒 Secure file uploads  
- 🏎️ Fast and efficient  
- 🔧 Easy integration with Express  

---

## 🎓 **Final Thoughts**  
In this session, you learned how to:
- 🎉 Set up **Multer** for file uploads  
- 📥 Store uploaded files locally  
- ✅ Validate file types and sizes  
- 🔒 Add basic error handling  

Mastering file uploads is essential for building real-world applications like social media platforms, e-commerce sites, or any application that deals with user-generated content. 🔥  

Happy Coding! 💻 🚀  