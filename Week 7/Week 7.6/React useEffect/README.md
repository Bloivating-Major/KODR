# **Week 7 - Day 6: Understanding `useEffect` in React**

Today, we explored the powerful `useEffect` hook in React, which allows us to handle side effects such as data fetching, subscriptions, and DOM updates. Here's a detailed summary of what we learned:

---

## **Topics Covered**

### **1. Basic Usage of `useEffect`**
- Learned how to use `useEffect` for executing code when a component mounts.
- Example: Logging a message to the console when the component is rendered for the first time.

---

### **2. `useEffect` with Dependencies**
- Explored how to use dependencies with `useEffect` to perform actions when specific state values change.
- Example: Updating the document title dynamically based on a counter value.

---

### **3. `useEffect` for Fetching Data**
- Practiced fetching data from an API when the component mounts.
- Example: Using the `https://jsonplaceholder.typicode.com/posts` API to fetch and display the title of the first post.

---

## **Components Overview**

### **1. BasicEffect Component**
File: `BasicEffect.jsx`  
- **Purpose**: Demonstrates how to use `useEffect` for code execution during the initial render.
- **Behavior**:
  - Logs a message to the console when the component mounts.

---

### **2. CounterEffect Component**
File: `CounterEffect.jsx`  
- **Purpose**: Shows how to use `useEffect` with dependencies.
- **Behavior**:
  - Updates the document title whenever the counter value changes.
  - Includes a button to increment the counter.

---

### **3. FetchDataEffect Component**
File: `FetchDataEffect.jsx`  
- **Purpose**: Demonstrates how to fetch and display data using `useEffect`.
- **Behavior**:
  - Fetches posts from an API when the component mounts.
  - Displays the title of the first post.

---

## **Code Examples**

### **BasicEffect Component**
```jsx
import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Component mounted!");
  }, []); // Empty dependency array ensures this runs only once.

  return <h2>Check the console to see the useEffect message.</h2>;
};

export default BasicEffect;
```

---

### **CounterEffect Component**
```jsx
import React, { useState, useEffect } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Runs whenever `count` changes.

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
```

---

### **FetchDataEffect Component**
```jsx
import React, { useState, useEffect } from "react";

const FetchDataEffect = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPost(data[0]);
    };
    fetchData();
  }, []); // Empty dependency array ensures this runs only once.

  return (
    <div>
      <h2>First Post:</h2>
      {post ? <p>{post.title}</p> : <p>Loading...</p>}
    </div>
  );
};

export default FetchDataEffect;
```

---

## **Rendering All Components in App.jsx**

```jsx
import React from "react";
import BasicEffect from "./BasicEffect";
import CounterEffect from "./CounterEffect";
import FetchDataEffect from "./FetchDataEffect";

function App() {
  return (
    <div>
      <h1>Understanding useEffect in React</h1>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
    </div>
  );
}

export default App;
```

---

## **Takeaways**

1. **Basic Usage**: `useEffect` is perfect for executing code during component lifecycle events.
2. **Dependencies**: Adding a dependency array ensures `useEffect` runs only when specific values change.
3. **Data Fetching**: `useEffect` makes it simple to fetch data and update the UI dynamically.

---

Happy Coding! 🚀