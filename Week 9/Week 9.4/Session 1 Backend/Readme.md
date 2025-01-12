
---

# **📅 Week 9 - Day 3**  
## **Session 1: Backend Development 🚀**  

---

## **📚 Topics Covered**  

### **1. File System (FS) in Node.js 🗂️**  
We explored the core functionalities of the File System module in Node.js, including:  
- 🛠️ **Creating Folders**  
- 📝 **Creating Files**  
- 🔍 **Reading Files**  
- 📂 **Reading Directories**  
- 💾 **Using `Dirent` for Storing Data**  
- ❌ **Deleting Files (`unlink`)**  
- 🗑️ **Removing Directories (`rmdir`)**  
- 🔄 **Renaming Files and Directories (`rn` Command)**  

---

### **2. HTTP Module in Node.js 🌐**  
- 🌟 **Creating HTTP Servers** using `http.createServer()`.

---

## **✨ Code Examples: FS Functions in Action**

### **1. Creating a Folder**  
```javascript
const fs = require("fs");

fs.mkdir("test", (err) => {
  if (err) console.log("❌ Error creating folder:", err);
  else console.log("✅ Folder 'test' created successfully!");
});
```

---

### **2. Creating a File with Data**  
```javascript
const data = "This is Test Data";

fs.writeFile("./test/testing.txt", data, (err) => {
  if (err) console.log("❌ Error writing file:", err);
  else console.log("✅ File 'testing.txt' created successfully!");
});
```

---

### **3. Reading a File**  
```javascript
fs.readFile("./test/testing.txt", "utf8", (err, data) => {
  if (err) console.log("❌ Error reading file:", err);
  else console.log("📖 File Content:", data);
});
```

---

### **4. Reading a Directory**  
```javascript
fs.readdir("test", { withFileTypes: true }, (err, files) => {
  if (err) console.log("❌ Error reading directory:", err);
  else {
    files.forEach((dirent) => {
      dirent.isDirectory()
        ? console.log("📂 Folder:", dirent.name)
        : console.log("📄 File:", dirent.name);
    });
  }
});
```

---

### **5. Deleting a File**  
```javascript
fs.unlink("./test/testing.txt", (err) => {
  if (err) console.log("❌ Error deleting file:", err);
  else console.log("🗑️ File 'testing.txt' deleted successfully!");
});
```

---

### **6. Removing a Directory**  
```javascript
fs.rmdir("test", (err) => {
  if (err) console.log("❌ Error removing directory:", err);
  else console.log("🗑️ Folder 'test' removed successfully!");
});
```

---

### **7. Renaming a File**  
```javascript
fs.rename("./test/testing.txt", "./test/renamed.txt", (err) => {
  if (err) console.log("❌ Error renaming file:", err);
  else console.log("🔄 File renamed to 'renamed.txt' successfully!");
});
```

---

## **🌟 Learning Highlights**  
- 🗂️ **FS Module**: Manage files and directories efficiently in Node.js.  
- 💡 **Dirent Objects**: Differentiate between files and directories during traversal.  
- 🌐 **HTTP Module**: Essential for building and handling web servers in Node.js.  

---

### **Fun Fact 💡:**  
The `fs` module is synchronous by default but provides **asynchronous methods** for better performance. Always use async versions to prevent blocking the event loop!

---

Let me know if you'd like further assistance with these concepts. Happy Coding! 😊