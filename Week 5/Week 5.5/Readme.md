# **Week 5 - Day 5: Dynamic Content in JSX**  

In today's session, we explored how to use **dynamic content with curly braces `{}` in JSX** to make React components more interactive and data-driven.

---

## **Exercise Overview**

This exercise involved:  
1. Creating a `Greeting` component to display a dynamic message and date.  
2. Creating a `ProductInfo` component to display dynamic product details.  
3. Rendering these components in the `App` component.  

---

## **Steps to Complete**

### **Step 1: Create a Greeting Component**  

- **File**: `Greeting.jsx`  
- **Description**:  
  A functional component that dynamically displays:  
  1. A greeting message with a user’s name.  
  2. The current date using JavaScript expressions.  

- **Code**:  
  ```jsx
  import React from "react";

  const Greeting = () => {
    const name = "John";
    const currentDate = new Date().toLocaleDateString();

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Today’s date is {currentDate}.</p>
      </div>
    );
  };

  export default Greeting;
  ```

---

### **Step 2: Create a ProductInfo Component**  

- **File**: `ProductInfo.jsx`  
- **Description**:  
  A functional component that displays product details dynamically using a `product` object.  

- **Code**:  
  ```jsx
  import React from "react";

  const ProductInfo = () => {
    const product = {
      name: "Laptop",
      price: "$1200",
      availability: "In stock",
    };

    return (
      <div>
        <h2>Product Information</h2>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Availability: {product.availability}</p>
      </div>
    );
  };

  export default ProductInfo;
  ```

---

### **Step 3: Render Components in App.jsx**  

- **File**: `App.jsx`  
- **Description**:  
  Import and render both `Greeting` and `ProductInfo` components.  

- **Code**:  
  ```jsx
  import React from "react";
  import Greeting from "./Greeting";
  import ProductInfo from "./ProductInfo";

  function App() {
    return (
      <div>
        <Greeting />
        <ProductInfo />
      </div>
    );
  }

  export default App;
  ```

---

## **Concepts Learned**

### **Using Curly Braces `{}` in JSX**  
Curly braces in JSX allow you to embed dynamic content such as variables, expressions, and functions.  

### **Examples:**  
1. **Variable Interpolation**:  
   ```jsx
   const name = "John";
   <h1>Hello, {name}!</h1>
   ```

2. **Expressions**:  
   ```jsx
   const sum = 5 + 3;
   <p>The sum is {sum}</p>
   ```

3. **Object Properties**:  
   ```jsx
   const product = { name: "Laptop", price: "$1200" };
   <p>Product: {product.name}</p>
   ```

---

## **Takeaways**

- Dynamic content makes React components more interactive and flexible.  
- Curly braces `{}` in JSX allow embedding JavaScript variables, expressions, and object properties seamlessly.  
- Practiced breaking down functionality into reusable components (`Greeting` and `ProductInfo`).  

---

Happy Coding! 🚀  