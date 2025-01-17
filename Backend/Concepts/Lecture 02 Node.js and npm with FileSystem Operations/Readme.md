# Lecture 2: Node.js and npm with File System Operations

## Node.js Basics

- **What is Node.js?**
  - It is **not** a programming language, technology, framework, or library.
  - Node.js is a **JavaScript Runtime Environment**, allowing JavaScript to be used for backend development.
  - JavaScript originally lacked backend functionalities. To overcome this, Ryan Dahl created Node.js by modifying the V8 engine (Google's JavaScript engine written in C++).
  - He wrapped JavaScript around the V8 engine to enable backend development using JavaScript.

- **Runtime Environment:**
  - Node.js runs as long as the process is active. When the runtime stops, the Node.js process ends.

---

## Introduction to Node.js

- To start working with Node.js:
  1. Navigate to your project folder.
  2. Initialize a `package.json` file by running:
     ```bash
     npm init -y
     ```
     The `-y` flag skips the prompts and directly creates the file with default configurations.

---

## Installing Node.js and npm

- Visit the [Node.js official website](https://nodejs.org) to download and install Node.js.
- **npm (Node Package Manager):**
  - A package manager where developers can upload, share, and use reusable JavaScript packages.

---

## Working with Modules

- Node.js supports modular programming.
- You can import and use core modules (like `fs` and `http`) or install external modules using npm.

---

## File System (FS) Operations

The `fs` module in Node.js is used to interact with the file system. Below are the key operations:

### 1. Write File (Creation of a File)
Creates a new file or overwrites an existing file:
```javascript
const fs = require('fs');

fs.writeFile("test.js", "let name = 'Sambhav';", (err) => {
    if (err) console.error(err);
    else console.log("File created successfully");
});
```

### 2. Append File (Add Data to a File)
Adds data to an existing file without overwriting:
```javascript
fs.appendFile("test.js", "age = 20;", (err) => {
    if (err) console.error(err);
    else console.log("Data appended successfully");
});
```

### 3. Copy File
Creates a copy of an existing file:
```javascript
fs.copyFile("test.js", "copy.js", (err) => {
    if (err) console.error(err);
    else console.log("Copied successfully");
});
```

### 4. Rename File
Renames a file:
```javascript
fs.rename("test.js", "renamed.js", (err) => {
    if (err) console.error(err);
    else console.log("Renamed successfully");
});
```

### 5. Delete File
Removes a file:
```javascript
fs.unlink("renamed.js", (err) => {
    if (err) console.error(err);
    else console.log("File deleted successfully");
});
```

### 6. Delete a Directory
Removes an empty folder:
```javascript
fs.rm("folder_name", { recursive: true }, (err) => {
    if (err) console.error(err);
    else console.log("Folder deleted successfully");
});
```

### 7. Create a Directory
Creates a new folder:
```javascript
fs.mkdir("./temp", (err) => {
    if (err) console.error(err);
    else console.log("Folder created successfully");
});
```

### 8. Open a File
Opens a file for reading or writing:
```javascript
fs.open("./Readme.md", "r", (err, fd) => {
    if (err) console.error(err);
    else console.log("File opened successfully");
});
```

---

## Understanding HTTP Module

The `http` module enables the creation of HTTP servers in Node.js.

### **HTTP vs. HTTPS**
- **HTTP:** A protocol (set of rules) for transferring data over the web.
- **HTTPS:** A secure version of HTTP with encryption.
- Both protocols follow predefined rules installed on operating systems to send and receive data.

### **Creating an HTTP Server**
Below is an example of creating a basic HTTP server:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
```
- The server listens on port `3000`.
- When accessed via a browser or a tool like Postman, it responds with "Hello World."

---

## Summary

- **Node.js** is a runtime environment enabling backend development with JavaScript.
- **npm** is a package manager to install, manage, and share libraries.
- The **fs module** provides powerful file system operations like creating, renaming, deleting, and copying files and directories.
- The **http module** is used to create web servers and handle requests and responses efficiently.

---

### Helpful Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [MDN Web Docs on HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)

