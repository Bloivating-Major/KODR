# **Week 2 - Day 4: Session 2 - JavaScript DOM**

---

## **Overview**

In this session, we explored the **Document Object Model (DOM)**, a core concept in web development that enables dynamic interaction and manipulation of HTML content using JavaScript.

---

## **Topics Covered**

### **1. What is DOM?**
- The **Document Object Model (DOM)** abstracts the structure of a document (HTML) into a **tree of objects**, representing elements as nodes.
- It allows scripts to dynamically **manipulate the content and structure** of the webpage.
- This abstraction enables **interactive and dynamic functionalities** beyond static HTML.

---

### **2. Static HTML vs. Dynamic HTML**
| **Type**        | **Description**                                              |
|------------------|--------------------------------------------------------------|
| **Static HTML**  | No changes occur on the website when actions are performed.  |
| **Dynamic HTML** | The webpage **responds to user actions** and updates dynamically.|

---

### **3. Fetching Elements Using DOM**
There are **five methods** to fetch elements in the DOM:

| **Method**                | **Description**                                                      |
|---------------------------|----------------------------------------------------------------------|
| **`querySelector`**       | Selects the **first element** matching the selector (ID, class, tag).|
| **`querySelectorAll`**    | Selects **all matching elements** and returns them as an array.      |
| **`getElementById`**      | Fetches the element with the specified **ID**.                      |
| **`getElementsByClassName`** | Returns all elements with the specified **class** as a collection. |
| **`getElementsByTagName`** | Returns all elements with the specified **tag name**.               |

**Example:**
```javascript
const h1El = document.querySelector("h1"); // Fetches the first `<h1>` element
console.log(h1El.innerHTML); // Displays content inside the `<h1>` tag
```

---

### **4. DOM Manipulation**
The DOM allows you to **select, modify, create, and delete elements**, and respond to user interactions dynamically.

#### **Key Operations:**
1. **Accessing Elements:**  
   Use `document.querySelector()` or other methods to **select elements** for manipulation.

2. **Modifying Elements:**  
   - **`innerHTML`**: Changes the content inside an element.  
   - **`textContent`**: Modifies only the text content, ignoring HTML structure.

3. **Manipulating Styles and Classes:**  
   - **`style`**: Directly changes the CSS styles of an element.  
     Example:  
     ```javascript
     h1El.style.color = "blue";
     ```
   - **`classList`**: Adds, removes, or toggles CSS classes.  
     Example:  
     ```javascript
     h1El.classList.add("highlight");
     ```

4. **Creating and Deleting Elements:**  
   - **`createElement()`**: Creates a new HTML element.  
   - **`appendChild()`**: Adds a new child element to a parent.  
   - **`removeChild()`**: Removes a specified child element.  

   Example:  
   ```javascript
   const newDiv = document.createElement("div");
   document.body.appendChild(newDiv);
   ```

5. **Event Handling:**  
   Use **`addEventListener()`** to respond to user interactions like clicks, hovers, or keypresses.  
   Example:  
   ```javascript
   h1El.addEventListener("click", () => {
       console.log("Heading clicked!");
   });
   ```

6. **Event Object:**  
   The **event object** gives additional information about the triggered event, such as the type, target element, etc.

---

## **Key Takeaways**
1. DOM transforms static HTML into a **dynamic and interactive structure**.
2. **Element selection methods** like `querySelector` and `getElementById` provide flexibility for targeting elements.
3. **Manipulating styles, content, and classes** is straightforward using properties like `style`, `classList`, and `innerHTML`.
4. Event handling through **`addEventListener`** enables interactive web applications.
5. The DOM makes modern web development **responsive, functional, and dynamic**.

---

Happy Coding! 🚀