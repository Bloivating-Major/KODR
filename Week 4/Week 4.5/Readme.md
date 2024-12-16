# **Session: Creating Components in React** 🚀

This session focused on learning the fundamentals of **React components** by building a **Navbar** and a **Hero Section** for a responsive shoe store website. The session introduced **React functional components**, the **JSX syntax**, and how to use **Tailwind CSS** for styling.

---

## **📝 What We Built**

1. **Navbar**:
   - A responsive navigation bar with a logo, menu items, and a login button.

2. **Hero Section**:
   - A visually striking section with a bold heading, descriptive text, action buttons, and a promotional image.

---

## **📋 Key Learnings**

### **1. React Functional Components**
- React components allow you to build reusable and independent pieces of UI.
- **Functional components** are simple JavaScript functions that return JSX.

Example: 
```javascript
const Navbar = () => {
  return (
    <nav>
      {/* JSX goes here */}
    </nav>
  );
};
```

---

### **2. JSX Syntax**
- JSX (JavaScript XML) allows you to write HTML-like syntax in JavaScript.
- Key points:
  - Use `className` instead of `class` for applying CSS classes.
  - Wrap multiple JSX elements inside a single parent element.

---

### **3. Tailwind CSS for Styling**
- Tailwind CSS utility classes simplify styling and ensure responsive design.
- Example of Tailwind classes:
  - `flex` for flexbox layout.
  - `gap-10` for spacing between items.
  - `max-sm:hidden` for hiding elements on small screens.

---

## **🖥️ Components Overview**

### **Navbar Component**
The `Navbar` component creates a clean and responsive navigation bar with the following elements:
1. **Logo**: Displays the brand logo.
2. **Menu Items**: A list of links styled with uppercase text and hidden on smaller screens.
3. **Login Button**: A visually distinct call-to-action button.

**Code:**
```javascript
const Navbar = () => {
  return (
    <nav className="max-w-screen-xl flex justify-between m-auto h-20 items-center max-sm:max-w-screen">
      <div className="logo">
        <img src="/NavbarAssets/logo.png" alt="Logo" />
      </div>

      <ul className="flex gap-7 text-lg font-medium uppercase max-sm:hidden">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="py-2 px-4 bg-red-600 font-medium text-white h-8 flex items-center rounded-sm">
        Login
      </button>
    </nav>
  );
};
```

---

### **Hero Section Component**
The `HeroSection` component showcases:
1. **Heading**: A bold and eye-catching headline for the product.
2. **Description**: A supporting text to highlight the product's value.
3. **Buttons**: Clear call-to-action buttons for shopping and browsing categories.
4. **Shopping Links**: Brand logos for Flipkart and Amazon.
5. **Hero Image**: A large, responsive product image.

**Code:**
```javascript
const HeroSection = () => {
  return (
    <main className="max-w-screen-xl m-auto max-sm:h-full">
      <div className="hero flex h-[80vh] items-center max-sm:flex-col">
        <div className="heroContent w-1/2 flex flex-col gap-10 max-sm:h-1/2 max-sm:w-full max-sm:items-center">
          <h1 className="text-[7.5em] leading-[1em] font-bold max-sm:text-[3em] max-sm:text-center max-sm:font-black max-sm:w-4/5">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="w-3/5 font-bold text-slate-500 max-sm:text-sm max-sm:w-10/12 capitalize">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="heroButtons flex gap-10">
            <button className="py-3 px-5 bg-red-600 font-medium text-white h-12 flex items-center rounded-sm text-2xl max-sm:text-xl max-sm:rounded-md">
              Shop Now
            </button>
            <button className="py-2 px-4 font-medium text-gray-500 border-[2px] border-gray-500 h-12 flex items-center rounded-sm text-2xl max-sm:text-xl max-sm:rounded-md">
              Category
            </button>
          </div>
          <div className="shopping flex flex-col gap-5 text-lg font-bold max-sm:hidden">
            <p>Also Available On</p>
            <div className="brandIcons flex gap-5">
              <img src="/HeroSectionAssets/flipkart.png" alt="Flipkart" />
              <img src="/HeroSectionAssets/amazon.png" alt="Amazon" />
            </div>
          </div>
        </div>
        <div className="heroImage w-1/2 max-sm:h-1/2 max-sm:w-full">
          <img src="/HeroSectionAssets/showImage.png" alt="Product" className="w-full h-full" />
        </div>
      </div>
    </main>
  );
};
```

---

## **📝 Key Takeaways**
1. **Reusable Components**:
   - React components can be reused across the project to maintain consistency.
2. **Responsive Design**:
   - Tailwind's responsive classes (`max-sm`) allow designs to adapt to different screen sizes.
3. **Flexbox Mastery**:
   - Flexbox simplifies the layout, aligning items efficiently across the page.
4. **Clear Structure**:
   - Separate concerns by dividing UI into logical components (e.g., Navbar, HeroSection).

---

## **🚀 How to Run the Project**
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start the Development Server**:
   ```bash
   npm run dev
   ```
3. **Open the App**:
   Navigate to `http://localhost:5173` to view the application in your browser.

---

## **✨ Future Enhancements**
- Add animations to buttons and images using libraries like **Framer Motion**.
- Create dynamic menu items by fetching data from an API.
- Add a shopping cart component for a complete e-commerce experience.

---

This session laid a strong foundation in React components and responsive design, equipping you with the skills to build professional, reusable UI elements. 🚀✨