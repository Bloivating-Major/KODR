# **Week 7 - Day 2: Mastering `useState` in React**
# **Daily Learning Report**  

---

## **Session 1: Problem-Solving Review**  

### **Key Highlights**  
- We revisited the problems solved during the previous day.  
- Reviewed and discussed **optimal solutions** and **different approaches** for the same problems.  
- Gained insights into **alternative methods** to enhance problem-solving efficiency.  

---
## **Session 2: React useState**  

Today, we explored the versatility of the `useState` hook in React by managing state across various scenarios. Here's a comprehensive breakdown of what we learned:

---

## **Topics Covered**

### **1. Basic Usage of `useState`**  
- Learned how to manage simple state variables using `useState`.  
- Example: Building a Counter component to track and update a numeric value.

---

### **2. `useState` with an Array of Data**  
- Managed an array of todo items dynamically using `useState`.  
- Example: Adding items to a todo list and rendering the updated list.

---

### **3. `useState` with an Object of Data**  
- Used `useState` to manage an object that holds user profile data.  
- Example: Updating `name` and `age` values via input fields and displaying them in real time.

---

### **4. `useState` with an Array of Objects**  
- Managed an array of objects, each representing a shopping list item with properties like `name` and `quantity`.  
- Example: Adding new items to the shopping list and rendering the list.

---

## **Components Overview**

### **1. Counter Component**  
File: `Counter.jsx`  
- **State Managed**: Counter value.  
- **Features**:
  - Displays the current counter value.
  - A button to increment the counter.

---

### **2. TodoList Component**  
File: `TodoList.jsx`  
- **State Managed**: Array of todo items.  
- **Features**:
  - A form to add new todo items.
  - Displays the list of todos.

---

### **3. Profile Component**  
File: `Profile.jsx`  
- **State Managed**: User profile object containing `name` and `age`.  
- **Features**:
  - Input fields to update `name` and `age`.
  - Displays the updated profile information.

---

### **4. ShoppingList Component**  
File: `ShoppingList.jsx`  
- **State Managed**: Array of shopping items (`name` and `quantity`).  
- **Features**:
  - A form to add new items with their quantity.
  - Displays the shopping list with all added items.

---

## **Code Example for Each Component**

### **Counter Component**  
```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

---

### **TodoList Component**  
```jsx
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

---

### **Profile Component**  
```jsx
import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <h2>Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={profile.age}
        onChange={handleChange}
      />
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
```

---

### **ShoppingList Component**  
```jsx
import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const addItem = () => {
    setItems([...items, { name: newItem, quantity }]);
    setNewItem("");
    setQuantity("");
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
```

---

## **Rendering All Components in App.jsx**

```jsx
import Counter from "./Counter";
import TodoList from "./TodoList";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";

function App() {
  return (
    <div>
      <h1>React useState Examples</h1>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default App;
```

---

## **Takeaways**

1. **State Management**  
   - The `useState` hook provides a simple and effective way to manage state in functional components.

2. **Dynamic Updates**  
   - We learned how to dynamically update and render UI based on state changes.

3. **Different Data Types**  
   - Explored managing state for primitive values, arrays, objects, and arrays of objects.

---

Happy Coding! 🚀