# **Week 6 - Day 4: Styling Components in React**  

Today, we explored various methods for styling React components. This session demonstrated how to apply **inline styles**, **style objects**, and **React icons** to make components visually appealing.  

---

## **Topics Covered**  

1. **Styling with Inline Styles**  
2. **Using Separate Style Objects**  
3. **Integrating React Icons**  

---

## **Exercises Overview**  

### **1. StyledCard Component**  
We created a component styled using **inline styles**.  

#### **Steps**:  
- Set the background color to light blue.  
- Add padding, border radius, and text color directly via the `style` attribute.  

#### **Code**:  
```jsx
import React from "react";

const StyledCard = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        color: "darkblue",
      }}
    >
      <h2>Styled Card</h2>
      <p>This card is styled using inline styles.</p>
    </div>
  );
};

export default StyledCard;
```  

---

### **2. ProfileCard Component**  
We used a **separate style object** to manage CSS properties for the component.  

#### **Steps**:  
- Define a `styles` object.  
- Apply the `styles` object to the `<div>` using the `style` attribute.  

#### **Code**:  
```jsx
import React from "react";

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  };

  return (
    <div style={styles}>
      <h2>Profile Card</h2>
      <p>This card uses a separate style object.</p>
    </div>
  );
};

export default ProfileCard;
```  

---

### **3. IconComponent**  
We used **React Icons** to integrate icons and styled them using inline styles.  

#### **Steps**:  
1. Install `react-icons`:  
   ```bash
   npm install react-icons
   ```  
2. Import an icon from `react-icons` (e.g., `FaBeer` from `react-icons/fa`).  
3. Style the icon directly using the `style` attribute.  

#### **Code**:  
```jsx
import React from "react";
import { FaBeer } from "react-icons/fa";

const IconComponent = () => {
  return (
    <div>
      <FaBeer style={{ fontSize: "30px", color: "gold" }} />
      <h2>React Icon</h2>
      <p>This component uses React Icons for styling.</p>
    </div>
  );
};

export default IconComponent;
```  

---

### **4. Integrating All Components**  
We rendered all three components in the `App` component to display them together.  

#### **Code**:  
```jsx
import React from "react";
import StyledCard from "./StyledCard";
import ProfileCard from "./ProfileCard";
import IconComponent from "./IconComponent";

function App() {
  return (
    <div>
      <StyledCard />
      <ProfileCard />
      <IconComponent />
    </div>
  );
}

export default App;
```  

---

## **Key Learnings**  

### **1. Inline Styles**  
- Use the `style` attribute to define CSS properties directly within the JSX element.  
- Syntax:  
  ```jsx
  <div style={{ backgroundColor: "lightblue", padding: "20px" }}></div>
  ```  

### **2. Style Objects**  
- Manage styles in a separate object for better readability and reusability.  
- Syntax:  
  ```jsx
  const styles = { color: "blue", fontSize: "20px" };
  <div style={styles}></div>;
  ```  

### **3. React Icons**  
- A lightweight library for including vector icons in React projects.  
- Installation:  
  ```bash
  npm install react-icons
  ```  
- Usage:  
  ```jsx
  import { FaBeer } from "react-icons/fa";
  <FaBeer style={{ fontSize: "30px", color: "gold" }} />;
  ```  

---

## **Output Preview**  

1. **StyledCard**:  
   A card with a light blue background, dark blue text, and rounded corners.  

2. **ProfileCard**:  
   A card with a light gray background, black text, and rounded corners styled using a separate object.  

3. **IconComponent**:  
   A React icon displayed with custom size and color, followed by a title and description.  

---

## **Takeaways**  
- Inline styles are great for quick styling but may become unmanageable for complex designs.  
- Style objects provide a more organized way to handle CSS properties.  
- React Icons enhance the UI by providing scalable, customizable vector icons.  

---  

Happy Styling! 🎨  