# **Week 5 - Day 3: JSX Exercise**  

In today's session, we dived into the fundamentals of **JSX (JavaScript XML)** and practiced creating a basic React component to render content dynamically in our app.

---

## **Exercise Overview**  
This exercise focused on understanding JSX syntax, creating a React component, and rendering it within the main application.

---

## **Steps to Complete the JSX Exercise**  

### **Step 1: Create a New Component**  

- **File**: `WelcomeMessage.jsx`  
- **Description**:  
  Create a functional component named `WelcomeMessage` to display a simple greeting message.  

- **Code**:  
  ```jsx
  function WelcomeMessage() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>Welcome to learning JSX!</p>
      </div>
    );
  }

  export default WelcomeMessage;
  ```  

- **Rendered Output**:  
  ```
  Hello, World!
  Welcome to learning JSX!
  ```

---

### **Step 2: Render the Component in `App.jsx`**  

- **File**: `App.jsx`  
- **Description**:  
  Import the `WelcomeMessage` component and render it within the main `App` component.  

- **Code**:  
  ```jsx
  import WelcomeMessage from "./WelcomeMessage";

  function App() {
    return (
      <div>
        <WelcomeMessage />
      </div>
    );
  }

  export default App;
  ```  

---

### **Step 3: Run the Application**  

1. Start your development server using:  
   ```bash
   npm start
   ```  
2. Open your browser and navigate to the application.  
3. You should see the following rendered on your screen:  
   ```
   Hello, World!
   Welcome to learning JSX!
   ```

---

## **Key Learnings**  

### **1. What is JSX?**  
- JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your React components.  
- It combines the power of JavaScript with the simplicity of HTML.  

### **2. Benefits of JSX:**  
1. **Improved Readability**: Makes components easy to write and understand.  
2. **Component Structure**: Allows clear separation of UI logic into reusable components.  
3. **JavaScript Integration**: Enables the use of JavaScript expressions directly within the UI.  

### **3. JSX Rules to Remember**  
- Every JSX element must be enclosed within a single parent element.  
- Use **camelCase** for HTML attributes (e.g., `className` instead of `class`).  
- Embed JavaScript expressions using `{}`.  

---

## **Takeaways**  

- **JSX Basics**: Learned how JSX simplifies writing UI components in React.  
- **Component Creation**: Practiced building a basic React component (`WelcomeMessage`).  
- **Component Rendering**: Integrated the component into the main `App` for display.  

---

Happy Coding! 🚀  