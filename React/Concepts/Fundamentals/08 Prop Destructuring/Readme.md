# **Session 8: Using Props in React Components**  

Today, we learned about **props** in React, their purpose, and how to pass dynamic data to components to make them reusable. Additionally, we explored the use of **props.children** for nesting custom content within components.  

---

## **Key Concepts**

### **1. What are Props?**  
Props (short for "properties") are a way to pass data from a parent component to a child component. They make components dynamic and reusable by allowing you to pass in different data for each instance of a component.  

---

## **Exercise Overview**

### **Step 1: Create a `Person` Component**  

**Purpose**: To display a person’s `name` and `age` dynamically using props.  

**Code**:  
```jsx
import React from "react";

const Person = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Person;
```

---

### **Step 2: Create a `Product` Component**  

**Purpose**: To display a product’s `name` and `price` dynamically using props.  

**Code**:  
```jsx
import React from "react";

const Product = ({ name, price }) => {
  return (
    <div>
      <h2>Product: {name}</h2>
      <p>Price: {price}</p>
    </div>
  );
};

export default Product;
```

---

### **Step 3: Pass Props from `App.jsx`**  

**Purpose**: To demonstrate how props are passed from the parent component (`App.jsx`) to child components (`Person` and `Product`).  

**Code**:  
```jsx
import React from "react";
import Person from "./Person";
import Product from "./Product";

const App = () => {
  return (
    <div>
      <Person name="Sambhav" age="20" />
      <Product name="Asus Rog" price="1000" />
    </div>
  );
};

export default App;
```

---

### **Bonus: Using `props.children` for Nested Content**  

**What is `props.children`?**  
The `props.children` property is used to pass custom content between the opening and closing tags of a component, making it highly flexible.  

**Step 1: Create a `Card` Component**  
This component will accept content as children and render it dynamically.  

**Code**:  
```jsx
import React from "react";

const Card = ({ children }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
};

export default Card;
```

**Step 2: Use `Card` in `App.jsx`**  
Pass custom content to the `Card` component using its children.  

**Code**:  
```jsx
import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <Card>
        <h2>My Card</h2>
        <p>This is some content for Card 1.</p>
      </Card>
      <Card>
        <h2>My Card 2</h2>
        <p>This is some content for Card 2.</p>
      </Card>
    </div>
  );
};

export default App;
```

---

## **Concepts Learned**  

### **1. Passing Props**  
Props are passed to components like attributes in HTML.  
```jsx
<Person name="Sambhav" age="20" />
```

### **2. Destructuring Props**  
Props can be destructured for cleaner code.  
```jsx
const Product = ({ name, price }) => (
  <div>
    <h2>{name}</h2>
    <p>{price}</p>
  </div>
);
```

### **3. Using `props.children`**  
Allows components to render custom content passed between their opening and closing tags.  
```jsx
<Card>
  <h2>Title</h2>
  <p>Description</p>
</Card>
```

---

## **Takeaways**  
- Props make components dynamic and reusable.  
- Destructuring props simplifies code readability.  
- The `props.children` property is powerful for building flexible, nested components.  

---

Happy Coding! 🚀  