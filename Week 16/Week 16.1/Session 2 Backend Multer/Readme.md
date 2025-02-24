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