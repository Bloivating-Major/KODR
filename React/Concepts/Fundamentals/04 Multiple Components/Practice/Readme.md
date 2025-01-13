### React Component Composition: Building a Simple Website

This exercise will guide you through creating a basic website structure by composing multiple React components. 

**Let's get started!**

#### 1. Building the Foundation: Creating Core Components

1.  **Header Component:**
    *   Create a file named `Header.jsx`.
    *   Define a functional component named `Header`.
    *   Within `Header`, return a `<header>` element containing:
        *   A `<h1>` element displaying "Welcome to My Website!".
        *   A `<nav>` element with three `<a>` links for "Home", "About", and "Contact".

2.  **Footer Component:**
    *   Create a file named `Footer.jsx`.
    *   Define a functional component named `Footer`.
    *   Within `Footer`, return a `<footer>` element containing a `<p>` element with the text "© 2024 My Website".

3.  **Main Content Component:**
    *   Create a file named `MainContent.jsx`.
    *   Define a functional component named `MainContent`.
    *   Within `MainContent`, return a `<main>` element containing:
        *   A `<h2>` element displaying "Main Content".
        *   A `<p>` element with any text you'd like to display as the main content.

#### 2. Assembling the Website: Rendering Components in App.jsx

1.  **Import the Components:** In your `App.jsx` file, import the `Header`, `MainContent`, and `Footer` components you've created.

2.  **Structure the App:** Within the `App` component's `return` statement, create a `<div>` element to act as the main container for your website. Inside this container, render the components in the following order:
    *   `<Header />` 
    *   `<MainContent />`
    *   `<Footer />`

**Congratulations!** You've successfully structured a simple website using multiple React components. This exercise demonstrates a fundamental concept in React: building complex UIs by composing smaller, reusable components.

**Ready to take it further?** 

*   Try adding styles to your components using CSS or a CSS-in-JS library.
*   Explore passing props to your components to make them more dynamic.
*   Implement more complex logic and interactions within your components.