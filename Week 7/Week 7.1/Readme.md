# **Session 1: React API Integration using Axios** 🌐

In this session, we focused on learning how to integrate APIs in a React application using **Axios**, a popular promise-based HTTP client. We also explored the **async/await** syntax to handle asynchronous requests effectively.

---

## **📋 Topics Covered**

1. **Introduction to Axios**:
   - What is Axios, and why use it for API integration?
   - Benefits of Axios over the Fetch API.
     - Simpler syntax.
     - Automatic JSON parsing.
     - Support for interceptors and request/response transformations.

2. **Setting Up Axios in React**:
   - Installing Axios.
   - Importing and configuring Axios for API requests.

3. **Using `async/await` for API Calls**:
   - Understanding the asynchronous nature of API requests.
   - Writing cleaner and more readable asynchronous code using `async` and `await`.

4. **Practical Implementation**:
   - Fetching data from an external API.
   - Handling loading states and errors gracefully.
   - Rendering fetched data in a React component.

---

## **🚀 API Integration Example**

Here’s how we implemented API integration in React using Axios:

### **Code Snippet**

```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
```

---

## **📖 Explanation**

### **1. `useState` Hooks**
- **`data`**: Stores the fetched data.
- **`loading`**: Manages the loading state during the API call.
- **`error`**: Handles and displays error messages.

### **2. Axios Integration**
- The `axios.get()` method is used to fetch data from the API endpoint.
- We wrap the request in a **try-catch-finally** block:
  - **`try`**: Executes the request and updates the `data` state.
  - **`catch`**: Handles any errors during the request.
  - **`finally`**: Updates the `loading` state regardless of success or failure.

### **3. `useEffect` Hook**
- Calls the `fetchData` function when the component is mounted.

### **4. Conditional Rendering**
- Displays **loading**, **error**, or **fetched data** based on the state.

---

## **📖 Key Learnings**

1. **Why Axios?**
   - Provides an easy-to-use syntax for making HTTP requests.
   - Handles JSON parsing and request/response transformations.

2. **Async/Await Simplifies Asynchronous Code**:
   - Replaces nested `.then()` chains with clean and readable syntax.

3. **State Management**:
   - Managing API data, loading, and error states effectively using React hooks.

4. **Error Handling**:
   - Gracefully handling errors to provide a better user experience.

---

## **🌐 References**

1. [Axios Documentation](https://axios-http.com/)
2. [React useEffect Hook](https://reactjs.org/docs/hooks-effect.html)
3. [Async/Await in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

---

This session has provided you with the fundamental knowledge of integrating APIs into your React applications. Keep exploring more APIs to strengthen your skills! 🚀