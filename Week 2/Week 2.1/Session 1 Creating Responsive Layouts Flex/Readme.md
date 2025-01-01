
---

### **Week 2 - Session 2.1 (Session 1)**  
#### **Topic: Creating Fluid Layouts Using Flexbox**

---

## **Overview**
In this session, we explored the **Flexbox** layout system to create responsive and fluid designs. Flexbox provides a powerful and efficient way to align and distribute space among elements inside a container, even when their size is dynamic or unknown.

---

## **Key Concepts**
1. **Flex Wrap**  
   - Allows child elements to wrap onto the next line if they overflow the parent container.
   - **Code Example**:  
     ```scss
     flex-wrap: wrap; // Wraps child elements overflowing the parent container.
     ```

2. **Flex Shrink**  
   - Controls how much a flex item will shrink relative to others when there isn't enough space.  
   - By default, child elements shrink.  
   - **Code Example**:  
     ```scss
     flex-shrink: 0; // Prevents the child from shrinking.
     ```

3. **Flex Grow**  
   - Specifies how much a flex item should grow relative to others.  
   - **Code Example**:  
     ```scss
     flex-grow: 1; // Makes a child grow to fill available space.
     ```

4. **Flex-Basis**  
   - Defines the initial size of a flex item before any available space is distributed.  
   - **Code Example**:  
     ```scss
     flex-basis: 100px; // Sets the base width of each child element.
     ```

---

## **SCSS Code**
```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: GILROY;
}
html,
body {
  width: 100%;
  height: 100%;
}

main {
  width: 100%;
  display: flex;
  background-color: aqua;
  flex-wrap: wrap; // Wraps the child elements that overflow
  .box {
    border: 2px solid black;
    background-color: red;
    height: 100px;
    flex-basis: 100px; // Sets the base width of each child element
    flex-shrink: 0; // Prevents shrinking
    flex-grow: 1; // Distributes remaining space among children
  }
}
```

---

## **Output**
- **Before `flex-shrink`:** Child elements shrink to fit the container.  
- **After `flex-shrink: 0`:** Child elements maintain their width and overflow if necessary.  
- **With `flex-grow`:** Extra space in the container is distributed evenly among the children.  

---

