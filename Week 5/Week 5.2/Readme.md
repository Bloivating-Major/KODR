# **Week 5 - Day 2: Nested Components in React**  

In this session, we explored the concept of **Nested Components** in React. This practice allows us to build modular, reusable, and easily maintainable UI structures by breaking down the UI into smaller components.

---

## **Exercise: Rendering and Nesting Components**  

### **Overview**  
This exercise involved creating three individual components (**Header**, **MainContent**, and **Footer**) and nesting them inside the main `App` component.  

---

### **Steps to Create Nested Components**  

#### **1. Create a `Header` Component**  
- **File**: `Header.jsx`  
- **Description**: Displays the header of the website with navigation links.  
- **Code**:  
   ```jsx
   function Header() {
     return (
       <header>
         <h1>Welcome to My Website!</h1>
         <nav>
           <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
         </nav>
       </header>
     );
   }
   export default Header;
   ```  
- **Rendered Output**:  
  ```
  Welcome to My Website!
  Home | About | Contact
  ```  

---

#### **2. Create a `Footer` Component**  
- **File**: `Footer.jsx`  
- **Description**: Displays a footer with copyright information.  
- **Code**:  
   ```jsx
   function Footer() {
     return (
       <footer>
         <p>© 2024 My Website</p>
       </footer>
     );
   }
   export default Footer;
   ```  
- **Rendered Output**:  
  ```
  © 2024 My Website
  ```  

---

#### **3. Create a `MainContent` Component**  
- **File**: `MainContent.jsx`  
- **Description**: Displays the main content of the webpage.  
- **Code**:  
   ```jsx
   function MainContent() {
     return (
       <main>
         <h2>Main Content</h2>
         <p>This is where the main content of the webpage will go.</p>
       </main>
     );
   }
   export default MainContent;
   ```  
- **Rendered Output**:  
  ```
  Main Content
  This is where the main content of the webpage will go.
  ```  

---

### **4. Render Components Inside `App.jsx`**  
- **File**: `App.jsx`  
- **Description**: Combines the three components into a single structure.  
- **Code**:  
   ```jsx
   import Header from "./Header";
   import MainContent from "./MainContent";
   import Footer from "./Footer";

   function App() {
     return (
       <div>
         <Header />
         <MainContent />
         <Footer />
       </div>
     );
   }

   export default App;
   ```  
- **Rendered Output**:  
  ```
  Welcome to My Website!
  Home | About | Contact

  Main Content
  This is where the main content of the webpage will go.

  © 2024 My Website
  ```  

---

## **Key Learnings**  

1. **Componentization**  
   - Breaking down a webpage into small, reusable components.  
   - Each component handles a specific section of the UI, making the codebase modular.  

2. **Nesting Components**  
   - Combining multiple components inside a parent component.  
   - This approach ensures maintainability and readability of code.  

3. **Functional Components**  
   - Learned how to write React components using functional syntax.  

4. **Reusability**  
   - Components can be reused across different pages or parts of the application.  

---

## **Conclusion**  
This exercise demonstrated the power of React's component-based architecture. By dividing the UI into independent components, we achieved better code organization and reusability, paving the way for scalable applications.  

---

Happy Coding! 🚀