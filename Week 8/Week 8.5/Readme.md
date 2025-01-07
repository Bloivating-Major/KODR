# **Week 8 - Day 5: Exploring Redux Toolkit**  

Today, we studied **Redux Toolkit**, a powerful tool to manage global state in React applications efficiently. Below is a summary of the steps we followed and concepts we covered.

---

## **Steps to Implement Redux Toolkit in a React Project**

### **Step 1: Create a React Project**
Start by creating a new React project using `create-react-app` or your preferred method.  
```bash
npx create-react-app redux-toolkit-demo
cd redux-toolkit-demo
```

---

### **Step 2: Add a Store Component**
1. Install Redux Toolkit and React-Redux:  
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. Create a new folder named `store` in the `src` directory.
3. Inside `store`, create a file `store.js` and initialize the Redux store.  
   ```javascript
   import { configureStore } from '@reduxjs/toolkit';
   import productReducer from './slices/productSlice';

   const store = configureStore({
     reducer: {
       products: productReducer,
     },
   });

   export default store;
   ```

---

### **Step 3: Wrap the App with Redux Provider**
In `index.js`, wrap your app with the `Provider` from `react-redux` and pass the store to it.  
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

### **Step 4: Create Reducers / Slices**
1. Create a new folder called `slices` in the `store` directory.
2. Inside `slices`, create a file named `productSlice.js`.
3. Define the initial state and reducers using `createSlice` from Redux Toolkit.

#### **Code for `productSlice.js`:**
```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addedProducts: [], // Array to store product data
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Action to add a product
    addProduct: (state, action) => {
      state.addedProducts.push(action.payload);
    },
    // Action to delete a product by ID
    deleteProduct: (state, action) => {
      state.addedProducts = state.addedProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

// Export actions and reducer
export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
```

---

## **Using Redux in Components**

### **Add Product Component**
```javascript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/slices/productSlice';

const AddProduct = () => {
  const [product, setProduct] = useState({ id: '', name: '' });
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (product.id && product.name) {
      dispatch(addProduct(product));
      setProduct({ id: '', name: '' });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Product ID"
        value={product.id}
        onChange={(e) => setProduct({ ...product, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
```

---

### **Product List Component**
```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../store/slices/productSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products.addedProducts);
  const dispatch = useDispatch();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}{' '}
          <button onClick={() => dispatch(deleteProduct(product.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
```

---

### **Render Components in `App.jsx`**
```javascript
import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit Demo</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default App;
```

---

## **Summary**

### **Key Learnings**
1. **Redux Toolkit Simplifies Redux**:
   - Combines reducers, actions, and initial state in one `createSlice` function.
2. **Global State Management**:
   - Easily manage application-wide state using a centralized store.
3. **Modular Code**:
   - Organized slices for better code readability and scalability.

### **Key Steps**
- Configure a store using `configureStore`.
- Define state and actions using `createSlice`.
- Use `useDispatch` to trigger actions and `useSelector` to access state.

---

Happy Coding! 🚀