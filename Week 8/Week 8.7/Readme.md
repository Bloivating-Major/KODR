# Shopping Cart Feature

This repository contains a **Shopping Cart Feature** implemented using **React**, **Redux Toolkit**, and **TailwindCSS**. This feature was created during **Week 8, Day 7** of the project development timeline. The application allows users to toggle between light and dark modes, view product listings, and manage a shopping cart.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Directory Structure](#directory-structure)
4. [Redux Slices Overview](#redux-slices-overview)
5. [Key Functionalities](#key-functionalities)
6. [Future Enhancements](#future-enhancements)

---

## Features
- **Dark Mode Toggle**: Persistent dark mode using Redux state and `localStorage`.
- **Product Listing**: Fetch and display products dynamically from an external API.
- **Shopping Cart**:
  - Add items to the cart.
  - Update item quantities.
  - Remove items from the cart.
  - Persistent cart state using `localStorage`.
- **Responsive Design**: Styled using TailwindCSS for a seamless user experience across devices.

---

## Tech Stack
- **Frontend**: React, React Router DOM
- **State Management**: Redux Toolkit
- **Styling**: TailwindCSS
- **API**: Fetch products from [Chair API](https://apigenerator.dronahq.com/api/0erByQ6G/chairs)

---

## Directory Structure
```
.
├── components
│   ├── CartItem.jsx
│   ├── CartTab.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── ProductCart.jsx
│   ├── ThemeToggle.jsx
│
├── pages
│   ├── Detail.jsx
│   ├── Home.jsx
│
├── store
│   ├── reducer
│   │   ├── cartSlice.jsx
│   │   ├── productsSlice.jsx
│   │   ├── themeSlice.jsx
│   ├── store.js
│
├── App.jsx
├── index.css
├── main.jsx
```

---

## Redux Slices Overview

### 1. **cartSlice**
- Manages shopping cart state, including items and their quantities.
- Persistent cart state using `localStorage`.
- Actions:
  - `addToCart`: Add products to the cart.
  - `changeQuantity`: Update quantities or remove items.
  - `toggleStatusTab`: Toggle visibility of the cart tab.

### 2. **productsSlice**
- Handles product fetching from the API.
- Async state management using `createAsyncThunk`.
- Selectors:
  - `selectAllProducts`: Get all products.
  - `selectProductsStatus`: Check API request status.
  - `selectProductsError`: Retrieve error messages.

### 3. **themeSlice**
- Manages the dark mode state.
- Persistent dark mode preference using `localStorage`.
- Actions:
  - `toggleTheme`: Switch between light and dark themes.

---

## Key Functionalities

### 1. **Dark Mode**
- Users can toggle between light and dark modes.
- State stored in `localStorage` for persistence.

### 2. **Product Listing**
- Products dynamically fetched from the [Chair API](https://apigenerator.dronahq.com/api/0erByQ6G/chairs).
- Handles loading and error states.

### 3. **Shopping Cart Management**
- **Add to Cart**:
  - Add items to the cart via the `addToCart` action.
- **Change Quantity**:
  - Update item quantities or remove items via the `changeQuantity` action.
- **Cart Persistence**:
  - Cart state is stored in `localStorage`, ensuring data is not lost on refresh.

### 4. **Routing**
- **Home Page** (`/`): Displays the product listing.
- **Detail Page** (`/:slug`): Displays detailed information about a specific product.

---

## Future Enhancements

- Add total price calculation and display it in the cart.
- Implement user authentication and personalized cart management.
- Add product filters and sorting options.
- Create a dedicated admin dashboard for product management.
- Improve error handling for API requests.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)

