# **Week 8 - Day 4: Exploring 2D Arrays and React Tasks**

Today, we delved into two exciting topics: **DSA with 2D Arrays** and two practical React tasks involving a **color changer** and a **search filter**.

---

## **Session 1: DSA - 2D Arrays**
In this session, we explored **2D Arrays** and their applications in solving data structure problems. Key concepts covered include:

### **Key Operations**
1. **Initialization of a 2D Array**:  
   ```javascript
   let arr = [
       [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9],
   ];
   ```

2. **Traversal of a 2D Array**:  
   Nested loops are used to traverse rows and columns.  
   ```javascript
   for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr[i].length; j++) {
           console.log(arr[i][j]);
       }
   }
   ```

3. **Common Problems Solved**:
   - Matrix Transposition
   - Row-wise and Column-wise Summation
   - Diagonal Traversals  

---

## **Session 2: React Tasks**

### **Task 1: Color Changer**
This task demonstrates how to use the `useRef` hook to directly manipulate DOM elements and dynamically change the background color of a page.

#### **Code Explanation**
1. **`useRef` Hook**:  
   Used to reference the `<main>` element.
   ```javascript
   const mainRef = useRef(null);
   ```

2. **Dynamic Color Change**:  
   - Captured the color input value using the `onChange` event.
   - Updated the background color of the referenced `<main>` element.
   ```javascript
   const handleColorChange = (event) => {
       if (mainRef.current) {
           mainRef.current.style.backgroundColor = event.target.value;
       }
   };
   ```

#### **Code Implementation**
```javascript
import React, { useRef } from "react";

const App = () => {
  const mainRef = useRef(null);

  const handleColorChange = (event) => {
    if (mainRef.current) {
      mainRef.current.style.backgroundColor = event.target.value;
    }
  };

  return (
    <main
      ref={mainRef}
      className="h-screen w-full flex justify-center items-center"
    >
      <input
        type="color"
        className="h-10 w-20 bg-transparent"
        onChange={handleColorChange}
      />
    </main>
  );
};

export default App;
```

---

### **Task 2: Search Filter**
This task demonstrates how to implement a search filter in React to filter through an array of objects.

#### **Steps to Implement**
1. **Initial Setup**:  
   Create a list of objects containing searchable data (e.g., names, descriptions).

   ```javascript
   const data = [
       { id: 1, name: "Alice" },
       { id: 2, name: "Bob" },
       { id: 3, name: "Charlie" },
   ];
   ```

2. **`useState` for Search Input**:  
   Manage the search query using state.
   ```javascript
   const [query, setQuery] = useState("");
   ```

3. **Filter Logic**:  
   Filter the array based on the search query and render the matching results.
   ```javascript
   const filteredData = data.filter((item) =>
       item.name.toLowerCase().includes(query.toLowerCase())
   );
   ```

#### **Code Implementation**
```javascript
import React, { useState } from "react";

const SearchFilter = () => {
  const [query, setQuery] = useState("");

  const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-10">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mb-4"
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
```

---

## **Summary**
### **DSA - 2D Arrays**:
- Practiced essential operations like initialization, traversal, and solving matrix-based problems.

### **React Tasks**:
1. **Color Changer**: Used `useRef` to dynamically change the background color of the page using a color picker.
2. **Search Filter**: Implemented a live search feature to filter data from an array of objects.

Both tasks showcased practical applications of React hooks like `useRef` and `useState`.

---

Happy Coding! 🚀