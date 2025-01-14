
**React Prop Party! 🎉**

Get ready to unlock the power of props in React components! Props are like tiny messengers 📨 that carry data between components, making them more flexible and reusable. ✨

**Step 1: Building the Person Component (🧑‍)**

1. Create a new file named `Person.jsx`.
2. Inside, craft a functional component called `Person` that can receive props 🎁.
3. This component will display a person's name and age. But how will it know what to show? That's where props come in! We'll use `props.name` and `props.age` to display the dynamic information.

**Step 2: Creating the Product Component (🛒)**

1. Create another file named `Product.jsx`.
2. Inside, build a functional component called `Product` that can also accept props 🎁.
3. Similar to the `Person` component, this one will showcase a product's name and price. We'll use `props.name` and `props.price` to fetch this data from the props object.

**Step 3: Passing Props in App.jsx (🎉)**

1. In your main `App.jsx` file, import both the `Person` and `Product` components:

```jsx
import Person from "./Person";
import Product from "./Product";
```

2. Now, let's use props to send some data 📨 to these components from within the `App` component:

```
1. Pass name and age as props to the Person component.
2. Pass name and price as props to the Product component.
```

By following these steps, you'll be well on your way to mastering props in React, making your components more dynamic and reusable! 🚀
