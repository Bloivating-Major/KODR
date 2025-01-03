# **Week 5 - Day 6: Rendering Lists in React**  

Today, we focused on **rendering lists in React** using the powerful `.map()` method. This approach makes it simple to dynamically display collections of data in your components.  

---

## **Exercise Overview**  

We created two components, `UserList` and `ProductList`, to render dynamic lists of users and products, respectively. These components utilize the `.map()` method to iterate over arrays and display content dynamically.  

---

## **Steps to Complete**

### **Step 1: Create the `UserList` Component**  

- **File**: `UserList.jsx`  
- **Description**:  
  A functional component that displays a list of users, with each user's `name` and `age`.  

- **Code**:  
  ```jsx
  import React from "react";

  const UserList = () => {
    const users = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 22 },
    ];

    return (
      <div>
        <h2>User List</h2>
        {users.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    );
  };

  export default UserList;
  ```

---

### **Step 2: Create the `ProductList` Component**  

- **File**: `ProductList.jsx`  
- **Description**:  
  A functional component that displays a list of products, with each product's `name` and `price`.  

- **Code**:  
  ```jsx
  import React from "react";

  const ProductList = () => {
    const products = [
      { id: 1, name: "Phone", price: "$699" },
      { id: 2, name: "Laptop", price: "$1200" },
      { id: 3, name: "Headphones", price: "$199" },
    ];

    return (
      <div>
        <h2>Product List</h2>
        {products.map((product) => (
          <div key={product.id}>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    );
  };

  export default ProductList;
  ```

---

### **Step 3: Render Components in `App.jsx`**  

- **File**: `App.jsx`  
- **Description**:  
  Import the `UserList` and `ProductList` components and render them.  

- **Code**:  
  ```jsx
  import React from "react";
  import UserList from "./UserList";
  import ProductList from "./ProductList";

  function App() {
    return (
      <div>
        <UserList />
        <ProductList />
      </div>
    );
  }

  export default App;
  ```

---

## **Concepts Learned**

### **1. Rendering Lists with `.map()`**  
The `.map()` method is used to iterate over arrays and return JSX elements for each item.  

**Example:**  
```jsx
const items = ["Apple", "Banana", "Cherry"];
items.map((item, index) => <p key={index}>{item}</p>);
```

### **2. Using Keys in Lists**  
Keys help React identify which items have changed, are added, or removed, improving rendering performance.  

**Example:**  
```jsx
users.map((user) => <div key={user.id}>{user.name}</div>);
```

### **3. Component Composition**  
We learned how to break down UI into smaller, reusable components and compose them in a parent component.  

---

## **Takeaways**  

1. **Dynamic Rendering**: Learned how to display dynamic data in React using `.map()`.  
2. **Using Keys**: Understood the importance of unique keys in lists for efficient rendering.  
3. **Reusability**: Practiced creating reusable components for structured and maintainable code.  

---

Happy Coding! 🚀  