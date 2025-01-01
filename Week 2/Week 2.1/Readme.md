
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

---

### **Week 2 - Session 2.1 (Session 2)**  
#### **Topic: Creating Fluid Layouts Using Grid**

---

## **Overview**
In this session, we delved into the **CSS Grid Layout** system, which is a two-dimensional layout method for web design. Unlike Flexbox, Grid allows you to align elements both horizontally and vertically.

---

## **Key Concepts**
1. **Grid Template Columns and Rows**  
   - Defines the structure of the grid by specifying the size of rows and columns.  
   - **Code Example**:  
     ```scss
     grid-template-columns: 100px 100px 100px; // Fixed-width columns
     grid-template-rows: 100px 100px 100px; // Fixed-height rows
     ```

2. **Auto-Fill with `repeat()`**  
   - Dynamically fills the grid with a specified size until the parent container is full.  
   - **Code Example**:  
     ```scss
     grid-template-columns: repeat(auto-fill, 100px); // Automatically fills with 100px-wide columns.
     ```

3. **Responsive Layouts with Grid**  
   - Adjusts the layout automatically as the screen size changes.  

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
  background-color: cadetblue;
  display: grid;
  grid-template-rows: 100px 100px 100px 100px;
  grid-template-columns: repeat(auto-fill, 100px);
  .box {
    background-color: blueviolet;
    border: 1px solid black;
  }
}
```

---

## **Output**
- **Fixed Columns and Rows:** Each grid item occupies a 100px by 100px cell.  
- **Dynamic Columns with `auto-fill`:** Columns are dynamically added based on the container's width.  

---

By the end of these sessions, you gained hands-on experience with **Flexbox** and **Grid** to create fluid and responsive layouts.  

Happy Coding! 🚀