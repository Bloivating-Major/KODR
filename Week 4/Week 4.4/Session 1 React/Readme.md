
---

# **Session 1: Setting Up a React Project with Vite**

This session focused on setting up a React project using **Vite**, a modern and fast build tool. It covered installing **Node.js**, creating a React project, and running the application locally.

---

## **📂 Key Concepts**

1. **Installing Node.js**:
   - Node.js is a JavaScript runtime required for running Vite and npm commands.
2. **Vite**:
   - A faster alternative to traditional React setups (like Create React App).
   - Provides a lightweight and efficient development experience.
3. **React**:
   - A popular JavaScript library for building user interfaces.

---

## **🚀 Step-by-Step Guide**

### **1. Install Node.js**
**Why?**  
Node.js provides `npm` (Node Package Manager), which is essential for managing dependencies and running React projects.

**Steps**:  
1. Go to the [Node.js official website](https://nodejs.org/).
2. Download and install the **LTS version** (recommended for most users).
3. Verify the installation:
   ```bash
   node -v
   npm -v
   ```
   This will display the installed versions of Node.js and npm.

---

### **2. Create a React Project with Vite**
**Why Vite?**  
Vite offers:
- Faster project setup.
- Optimized build times.
- Hot Module Replacement (HMR) for rapid development.

**Steps**:  
1. Open a terminal and navigate to the folder where you want to create your project:
   ```bash
   cd path/to/your/folder
   ```
2. Create a new Vite project:
   ```bash
   npm create vite@latest
   ```
3. Enter the following details when prompted:
   - **Project Name**: (e.g., `my-react-app`).
   - **Framework**: Select `React`.
   - **Variant**: Select `JavaScript` or `TypeScript` based on your preference.

---

### **3. Install Project Dependencies**
Once the project is created:
1. Navigate into the project folder:
   ```bash
   cd my-react-app
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

---

### **4. Run the React Application**
Start the development server:
```bash
npm run dev
```
This will start a local server (typically at `http://localhost:5173`), where you can view your React app in the browser.

---

## **📂 Folder Structure of the Vite React Project**
After setup, the project will have the following structure:
```plaintext
my-react-app/
├── public/               # Static assets (e.g., images)
├── src/                  # Source code
│   ├── App.jsx           # Main App component
│   ├── index.css         # Global styles
│   ├── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite configuration
└── node_modules/         # Installed dependencies
```

---

## **📋 Commands Summary**

| **Command**                   | **Purpose**                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| `node -v`                      | Check the installed version of Node.js.                                     |
| `npm -v`                       | Check the installed version of npm.                                         |
| `npm create vite@latest`       | Create a new project using Vite.                                            |
| `cd my-react-app`              | Navigate to the project folder.                                             |
| `npm install`                  | Install all project dependencies.                                           |
| `npm run dev`                  | Start the development server.                                               |

---

## **💡 Key Learnings**

1. **Node.js Installation**:
   - Essential for running npm commands and React projects.
2. **Vite Setup**:
   - Faster than Create React App.
   - Optimized for modern development workflows.
3. **Project Initialization**:
   - Learned the basic folder structure and key files in a Vite React project.

---

## **🚀 What’s Next?**
1. Customize your app by editing `App.jsx` and `index.css`.
2. Explore additional npm packages to enhance your React application.
3. Prepare for production builds using:
   ```bash
   npm run build
   ```

---

This README consolidates the steps and commands covered in **Session 1**, making it a handy reference for setting up a React project with Vite.