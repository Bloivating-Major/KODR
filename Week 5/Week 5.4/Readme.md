# **Week 5 - Day 4: JSX Rules Exercise**  

In today's session, we focused on understanding and applying the fundamental **rules of JSX** while creating a new React component.  

---

## **Exercise Overview**  

The goal was to build a React component that showcases some of the most essential rules of JSX and displays them in a user-friendly manner.

---

## **Steps to Complete the Exercise**

### **Step 1: Create a New Component**  

- **File**: `JSXRules.jsx`  
- **Description**:  
  Create a functional component named `JSXRules` to display a list of JSX rules.  

- **Code**:  
  ```jsx
  function JSXRules() {
    return (
      <div>
        <h1>JSX Rules</h1>
        <p>Here are some fundamental rules of JSX:</p>
        <ul>
          <li>JSX must return a single parent element.</li>
          <li>JSX elements must be properly closed.</li>
          <li>JSX attributes are written using camelCase (e.g., <code>className</code> instead of <code>class</code>).</li>
        </ul>
      </div>
    );
  }

  export default JSXRules;
  ```

---

### **Step 2: Render the Component in `App.jsx`**  

- **File**: `App.jsx`  
- **Description**:  
  Import the `JSXRules` component and render it within the main `App` component.  

- **Code**:  
  ```jsx
  import JSXRules from "./JSXRules";

  function App() {
    return (
      <div>
        <JSXRules />
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
3. You should see the following displayed on your screen:  
   ```
   JSX Rules

   Here are some fundamental rules of JSX:
   - JSX must return a single parent element.
   - JSX elements must be properly closed.
   - JSX attributes are written using camelCase (e.g., className instead of class).
   ```

---

## **Key JSX Rules**  

### **1. Single Parent Element**  
- JSX must return one **parent container** (e.g., a `<div>`).  
- Example:  
  ```jsx
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
  ```

### **2. Properly Close Elements**  
- All elements must be closed, even self-closing ones.  
- Example:  
  ```jsx
  <img src="image.jpg" alt="Example" />
  ```

### **3. CamelCase for Attributes**  
- HTML attributes in JSX use camelCase syntax.  
- Example:  
  ```jsx
  <div className="container"></div>
  ```

---

## **Takeaways**  

- Learned and applied key JSX rules.  
- Gained hands-on experience creating and rendering React components.  
- Understood the importance of JSX syntax and best practices for writing clean React code.  

---

Happy Coding! 🚀  