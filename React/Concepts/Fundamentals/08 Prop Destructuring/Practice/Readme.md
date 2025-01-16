
**🚀 Props Destructuring in React: Level Up Your Components! ✨**

In this exercise, we'll learn a cool trick called **props destructuring** to make our React components even more elegant and readable. 

**Step 1: Destructuring in the `Person` Component 🧑‍**

1. Create a file named `Person.jsx`.
2. Inside, craft a functional component called `Person`. 
3. Destructure the name and age props directly in the function parameters and render:
- A ```<h2>``` element that displays the person's name.
- A ```<p>``` element that displays the person's age.


**Step 2: Destructuring in the `Product` Component 🛒**

1. Create a file named `Product.jsx`.
2. Inside, create a functional component called `Product`.
3. Destructure `name` and `price` in the parameters just like we did with `Person`:
- A ```<h2>``` element that displays the products name.
- A ```<p>``` element that displays the products age.

**Step 3: Passing Props from `App.jsx` 🎉**

1. Import the `Person` and `Product` components into your `App.jsx` file:

```jsx
import Person from "./Person";
import Product from "./Product";
```

2. Now, pass the `name` and `age` props to the `Person` component, and `name` and `price` props to the `Product` component. 

```jsx
function App() {
  return (
    <div>
      {/* Passing props to Person */}
      <Person name="John Doe" age={28} />
      <Person name="Jane Smith" age={32} />

      {/* Passing props to Product */}
      <Product name="Laptop" price="$1200" />
      <Product name="Smartphone" price="$699" />
    </div>
  );
}

export default App;
```

