# **Session 1: Learning React - Theme Switcher**

## **Overview**
In today's session, we learned how to create a **Theme Switcher** in React. This functionality allows users to toggle between `light` and `dark` themes, with the selected theme persisting even after refreshing the page using `localStorage`. 

---

## **What We Built**
A simple React application with:  
1. **Dynamic Theme Switching**: Toggle between light and dark themes.  
2. **Navigation Bar**: A basic navbar with links.  
3. **Persistent State**: The selected theme is stored in `localStorage` to maintain user preferences across sessions.  

---

## **Key Concepts Learned**
### **1. useState Hook**
- Used to manage the state of the theme (`light` or `dark`).
- Example:  
  ```javascript
  const [Theme, setTheme] = useState(localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme'));
  ```

### **2. useEffect Hook**
- Utilized to apply the theme whenever it changes.
- Example:  
  ```javascript
  useEffect(() => {
    mainRef.current.setAttribute('id', Theme);
  }, [Theme]);
  ```

### **3. useRef Hook**
- Used to directly manipulate the DOM element to dynamically apply the theme.
- Example:  
  ```javascript
  const mainRef = useRef(null);
  ```

### **4. localStorage**
- Leveraged to store the user's selected theme, ensuring it persists even after a page refresh.
- Example:  
  ```javascript
  localStorage.setItem('theme', 'dark');
  ```

---

## **Code Explanation**
### **Theme Toggle Functionality**
The `changeTheme` function toggles the theme between `light` and `dark` and updates `localStorage`.  
```javascript
const changeTheme = () => {
  if (Theme === 'light') {
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  } else {
    localStorage.setItem('theme', 'light');
    setTheme('light');
  }
};
```

### **useEffect to Apply Theme**
When the theme state changes, the `useEffect` hook updates the `id` attribute of the `mainRef` element to reflect the current theme.  
```javascript
useEffect(() => {
  mainRef.current.setAttribute('id', Theme);
}, [Theme]);
```

---

## **File Structure**
```
src/
├── App.js    // Main React component
└── index.js  // Application entry point
```

---

## **Demo**
**Features**:  
1. Toggle Theme: A button dynamically switches between `light` and `dark` themes.  
2. Persistent Theme: The last selected theme is applied on page reload.

---

## **How It Works**
1. **Default Theme**: If no theme is set in `localStorage`, the app defaults to the `light` theme.  
2. **Change Theme**: Clicking the **Theme** button switches the theme and updates `localStorage`.  
3. **Apply Theme**: The `useEffect` hook ensures the correct theme is applied to the DOM.  

---

## **Sample Code**
Here's the core React code:  
```javascript
import { useEffect, useRef, useState } from "react";

const App = () => {
  const mainRef = useRef(null);
  const [Theme, setTheme] = useState(localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme'));

  const changeTheme = () => {
    if (Theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    mainRef.current.setAttribute('id', Theme);
  }, [Theme]);

  return (
    <div>
      <main ref={mainRef} className="font-raleway font-bold text-xl flex gap-40 text-center h-screen w-full flex-col items-center">
        <nav className="w-full flex justify-center items-center py-7">
          <ul className="flex gap-10">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className="px-5 py-3 shadow-xl rounded-md w-1/3" onClick={changeTheme}>Theme</button>
        <p>This is a simple React app.</p>
      </main>
    </div>
  );
};

export default App;
```

---

## **Takeaways**
1. Learned how to use **React hooks** (`useState`, `useEffect`, `useRef`).  
2. Understood how to persist data using **localStorage**.  
3. Practiced dynamically manipulating the DOM with React.  
4. Explored basic styling for components.

---

Happy Coding! 🚀