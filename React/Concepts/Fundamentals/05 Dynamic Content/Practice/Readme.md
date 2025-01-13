### Exercise: Dynamic Content in JSX with Curly Braces

This exercise will guide you through using curly braces `{}` to inject dynamic data into your JSX.

**Let's get started!**

#### 1. The `Greeting` Component

1.  **Create the Component:** Create a new file named `Greeting.jsx`. Define a functional component named `Greeting`.
2.  **Dynamic Greeting:** Within the `Greeting` component, return a `<div>` containing:
    *   A `<h1>` element that dynamically displays a greeting message. Use a variable `name` (e.g., `const name = "John";`) and interpolate it into the JSX:
        ```jsx
        <h1>Hello, {name}!</h1>
        ```
    *   A `<p>` element that displays the current date. Use the `new Date()` object:
        ```jsx
        <p>Today is: {new Date().toDateString()}</p> 
        ```

#### 2. The `ProductInfo` Component

1.  **Create the Component:** Create a new file named `ProductInfo.jsx`. Define a functional component named `ProductInfo`.
2.  **Dynamic Product Details:** Within the `ProductInfo` component, return a `<div>` that displays product information. 
    *   Define a `product` object:
        ```jsx
        const product = {
          name: "Laptop",
          price: "$1200",
          availability: "In stock"
        };
        ```
    *   Use curly braces to interpolate the product properties into the JSX:
        ```jsx
        <div>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Availability: {product.availability}</p>
        </div>
        ```

#### 3. Rendering in `App.jsx`

1.  **Import Components:** In your `App.jsx` file, import the `Greeting` and `ProductInfo` components.
2.  **Render Components:** Within the `App` component's `return` statement, render both components within a parent `<div>`:

    ```jsx
    function App() {
      return (
        <div>
          <Greeting />
          <ProductInfo />
        </div>
      );
    }

    export default App;
    ```

**Run your application!** You should see the dynamic greeting message, the current date, and the product information rendered on the screen. 

This exercise demonstrates the power of curly braces in JSX for injecting dynamic data, making your components more flexible and reusable.