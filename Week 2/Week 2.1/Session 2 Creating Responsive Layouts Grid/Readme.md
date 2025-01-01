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