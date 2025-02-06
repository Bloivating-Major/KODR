
---

# 📖 **Lecture 20 - File Uploading with Multer**

## 📌 **What is Multer?**
Multer is a **Node.js middleware** used for **handling multipart/form-data**, primarily for uploading **files** in Express applications. It stores uploaded files in **disk storage** (filesystem) or **memory storage** (RAM).

## 🔧 **Installation of Multer**
To install **Multer**, run the following command:
```sh
npm install multer
```

### **Require Multer in Your Project**
In your `app.js` or route file:
```javascript
const multer = require('multer');
```

---

## 🎨 **Creating an EJS Form for File Upload**
To upload a file, we need a **form** in an `.ejs` file with the `enctype="multipart/form-data"` property.

```ejs
<form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="image">
    <input type="submit" value="Upload File">
</form>
```
✅ `enctype="multipart/form-data"` is **necessary** when handling file uploads.

---

## 🚀 **Setting Up File Upload Route**
We will define an Express route to **handle file uploads**.

### **Upload Route**
```javascript
app.post('/upload', (req, res) => {
    // Accessing uploaded file
    console.log(req.file); // For single file
    console.log(req.files); // For multiple files
    console.log(req.body); // For any text inputs sent along with file

    res.send("File uploaded successfully!");
});
```

### 🛠 **Handling Different File Upload Scenarios**
1. **`req.file`** → Used for uploading a **single file**.
2. **`req.files`** → Used for uploading **multiple files**.
3. **`req.body`** → Contains any **text fields** submitted along with the file.

---

## 🗂 **Using Disk Storage & Memory Storage**
We can **store uploaded files** in **two ways**:
1. **Disk Storage** → Saves files in a folder.
2. **Memory Storage** → Saves files in memory as a buffer.

---

## 🛠 **Setting Up Multer with Disk Storage**
We will configure `multer.diskStorage()` to:
1. **Set file destination** (`destination`).
2. **Rename the file uniquely** (`filename`).

```javascript
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

// Configure Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/uploads"); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using crypto
    crypto.randomBytes(12, (err, bytes) => {
      if (err) return cb(err);

      const uniqueName = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, uniqueName);
    });
  }
});

// Initialize multer with disk storage
const upload = multer({ storage: storage });
```

---

## 🏗 **Understanding `multer.diskStorage()`**
We used:
- `destination` → **Defines the folder** where files will be stored.
- `filename` → **Generates a unique filename** using `crypto`.

### 🔹 **How We Created a Unique Filename**
```javascript
const crypto = require('crypto');

crypto.randomBytes(12, (err, buff) => {
    console.log(buff.toString("hex")); // Generates a random 24-character string
});
```
Then we **append the original file extension** using:
```javascript
const path = require("path");
const uniqueName = bytes.toString("hex") + path.extname(file.originalname);
```
This ensures:
✅ **No duplicate filenames**  
✅ **Correct file extension is maintained**

---

## 🛠 **Using Multer in Routes**
Now, we will **use multer in our upload route**.

```javascript
app.post("/upload", upload.single("image"), (req, res) => {
    res.send(`File uploaded successfully: ${req.file.filename}`);
});
```
### 🔹 **Adding Multer as Middleware**
- `upload.single("image")` → **Handles a single file** upload.
- `"image"` → Must **match the `name` attribute** of `<input type="file" name="image">` in the form.

---

## 📂 **Uploading Multiple Files**
To allow users to upload **multiple files**, use:
```javascript
app.post("/upload-multiple", upload.array("images", 5), (req, res) => {
    res.send("Multiple files uploaded!");
});
```
- `upload.array("images", 5)` → Allows **up to 5 files** to be uploaded.
- The form should have:
```ejs
<input type="file" name="images" multiple>
```

---

## 🏗 **Using Memory Storage**
If we want to **store files in memory (RAM) instead of disk**, use:
```javascript
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
```
This saves the file as a **buffer** inside `req.file.buffer`.

---

## 🛑 **Filtering File Types (Security Best Practices)**
To **restrict file types**, use a `fileFilter` function:
```javascript
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png|gif/; // Allowed extensions
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(new Error("Only images are allowed!"));
    }
  },
});
```
✅ Only allows **JPEG, JPG, PNG, and GIF** files.

---

## ⚠️ **Handling Errors**
To handle **Multer errors**, add error-handling middleware:
```javascript
app.use((err, req, res, next) => {
    res.status(400).send(`Error: ${err.message}`);
});
```

---

## 🚀 **Final Working Upload Route**
```javascript
const express = require("express");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const app = express();

// Configure Storage
const storage = multer.diskStorage({
  destination: "public/images/uploads",
  filename: (req, file, cb) => {
    crypto.randomBytes(12, (err, bytes) => {
      cb(null, bytes.toString("hex") + path.extname(file.originalname));
    });
  },
});

const upload = multer({ storage: storage });

// Upload Route
app.post("/upload", upload.single("image"), (req, res) => {
    res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.listen(5000, () => console.log("Server running on port 5000"));
```

---

## 🎯 **Summary**
✅ **Multer** is used for handling file uploads in **Express.js**.  
✅ **`multer.diskStorage()`** lets us **save files to a folder**.  
✅ **Crypto** generates **unique filenames**.  
✅ **Multer middleware** is used in routes (`upload.single("image")`).  
✅ **We can filter files** (e.g., only images allowed).  
✅ **Memory storage** saves files in RAM instead of disk.  

---

## 🎯 **Next Steps**
🚀 Add **file validation** (size limits, formats).  
🚀 Store **files in cloud storage** (AWS S3, Cloudinary).  
🚀 Implement **image preview & UI improvements**.  

---

