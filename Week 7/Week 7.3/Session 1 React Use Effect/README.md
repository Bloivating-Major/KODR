### **Key Topics Covered**  
1. **`useEffect` Hook**:  
   - Enables performing side effects in React components, like updating DOM elements after rendering.  
   - Dependency array ensures the effect runs only when specified variables change.  

2. **`useRef` Hook**:  
   - Provides a mutable reference to a DOM element or a value that persists across renders.  
   - Perfect for directly manipulating DOM elements without triggering re-renders.  

---

### **Implementation: Moving and Rotating an Image**  

This example demonstrates how `useEffect` and `useRef` hooks can be used to manipulate an image's position and rotation dynamically.  

#### **Code Snippet**  

```javascript
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [Rotate, setRotate] = useState(0);
  const deadPoolImage = useRef(null);

  useEffect(() => {
    deadPoolImage.current.style.top = Y + "%";
    deadPoolImage.current.style.left = X + "%";
    deadPoolImage.current.style.rotate = Rotate + "deg";
  }, [X, Y, Rotate]);

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-y-hidden">
      <img
        src="https://i.pinimg.com/736x/76/a7/0f/76a70f50208522e860bcd7d84d53d2c9.jpg"
        alt=""
        className="h-[30vh] w-[15vw] rounded-full absolute"
        ref={deadPoolImage}
      />
      <button
        className="py-4 px-6 bg-violet-700 rounded-md absolute"
        onClick={() => {
          setX(Math.random() * 90);
          setY(Math.random() * 90);
          setRotate(Math.random() * 360);
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default App;
```  

### **Key Learnings**  
- How `useRef` enables direct manipulation of DOM elements.  
- Using `useEffect` to synchronize UI updates with state changes.  
- Practical implementation of randomizing positions and rotations in a React component.  

---