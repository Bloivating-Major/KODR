# Lecture 07: File Management App with Express, EJS, and Node.js

This lecture focused on creating a file management application using **Express.js**, **EJS**, and **Node.js**. The application allows users to create, view, edit, and rename text files stored in the server.

---

## **Project Setup Steps**

### **1. Initialize the Project**
- Run the following command to create a `package.json` file with default settings:
  ```bash
  npm init -y
  ```

### **2. Update `package.json` Configuration**
- Change the `main` field in `package.json` to point to `server.js`:
  ```json
  "main": "server.js"
  ```

### **3. Install Dependencies**
- Install the required packages:
  ```bash
  npm i express ejs mongoose
  ```

### **4. Create a `.gitignore` File**
- Add sensitive or unnecessary files to `.gitignore` (e.g., `node_modules`):
  ```bash
  echo "node_modules" > .gitignore
  ```

### **5. File and Folder Structure**
- Set up the following project structure:
  ```
  project-folder/
  ├── .gitignore
  ├── package.json
  ├── server.js
  ├── src/
  │   ├── app.js
  │   ├── files/
  │   │   └── New.txt
  │   ├── views/
  │   │   ├── edit.ejs
  │   │   ├── index.ejs
  │   │   └── show.ejs
  ```

### **6. Link `server.js` to `app.js`**
- Create `server.js` and require `app.js` from the `src` folder:
  ```javascript
  const app = require('./src/app');

  app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
  });
  ```

---

## **Features and Functionality**

### **1. Render File List on Homepage** 🏠
- The `index.ejs` page displays all files stored in the `src/files` directory.
- **Flow:**
  1. User visits the root URL `/`.
  2. `fs.readdir()` reads the list of files in the `src/files` folder.
  3. Files are passed to the `index.ejs` template for rendering.

```javascript
app.get('/' , (req, res) => {
    fs.readdir('./src/files', (err, files) => {
        res.render('index', { files: files });
    });
});
```

---

### **2. View File Content** 🗃️
- The `show.ejs` page displays the content of a specific file.
- **Flow:**
  1. User clicks on a file name from the homepage.
  2. The route `/file/:filename` reads the file's content using `fs.readFile()`.
  3. The file's name and content are passed to `show.ejs` for rendering.

```javascript
app.get('/file/:filename', (req, res) => {
    fs.readFile(`./src/files/${req.params.filename}`, 'utf-8', (err, filedata) => {
        res.render('show', { filename: req.params.filename, filedata: filedata });
    });
});
```

---

### **3. Edit a File** 🔄
- The `edit.ejs` page allows the user to rename a file.
- **Flow:**
  1. User clicks an "Edit" button for a specific file.
  2. The route `/edit/:filename` renders a form with the current filename.
  3. The form submits the new file name to the `/edit` POST route.
  4. `fs.rename()` renames the file on the server.

```javascript
app.get('/edit/:filename', (req, res) => {
    res.render('edit', { filename: req.params.filename });
});

app.post('/edit', (req, res) => {
    fs.rename(`./src/files/${req.body.previous}`, `./src/files/${req.body.new}`, (err) => {
        res.redirect('/');
    });
});
```

---

### **4. Create a New File** 📝
- A form on the homepage allows the user to create a new file with a title and content.
- **Flow:**
  1. User submits the form to the `/create` POST route.
  2. `fs.writeFile()` creates a new file with the given content.
  3. The user is redirected back to the homepage.

```javascript
app.post('/create', (req, res) => {
    fs.writeFile(`./src/files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
        res.redirect('/');
    });
});
```

---

## **How It Works 🚀**

1. **Homepage (`/`):**
   - Displays a list of all files in the `src/files` folder.
   - Users can view, edit, or create files from this page.

2. **View File Content (`/file/:filename`):**
   - Displays the content of the selected file.

3. **Edit File (`/edit/:filename`):**
   - Opens a form to rename the selected file.

4. **Create New File (`/create`):**
   - Allows users to create a new text file with a title and content.

---


## **Key Concepts Learned**
- Using **EJS** to render dynamic views.
- Managing files using **Node.js** `fs` module.
- Setting up a modular project structure.
- Handling dynamic routes with **Express.js**.
- Using forms to send data from frontend to backend.

---

Let me know if you'd like a visual example or further explanation! 😊