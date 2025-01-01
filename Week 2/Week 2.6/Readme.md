# **Week 2 - Day 6: Advanced DOM Manipulation with Search Functionality**

---

## **Overview**
Today, we created a dynamic **User Search Interface** using **HTML**, **CSS**, and **JavaScript**. This task enhanced our understanding of DOM manipulation, filtering arrays, and building a responsive layout. Users can search for names dynamically, and the list updates in real-time as they type.

---

## **Features**
1. **Dynamic Rendering**: Users' data is dynamically generated using JavaScript.
2. **Real-Time Search**: Search results update dynamically as the user types in the search bar.
3. **Responsive Design**: The layout adapts to various screen sizes using `flexbox`.
4. **Case-Insensitive Filtering**: The search functionality works irrespective of the letter case.

---

## **Code Walkthrough**

### **1. HTML Structure**
The HTML contains the following:
- A **search bar** for input.
- A **container** (`.peoples`) to dynamically render user cards.
  
#### **Code Snippet**
```html
<main>
  <div class="search">
    <input type="text" placeholder="Search" />
  </div>
  <div class="peoples">
    <!-- User cards will be rendered here dynamically -->
  </div>
</main>
```

---

### **2. CSS Styling**
- **Search Bar**: Centered and styled for better UX.
- **User Cards**: Styled with images and names, arranged in a responsive grid using `flexbox`.

#### **Key CSS**
```css
.search input {
  width: 100%;
  padding: 0.5em 1.5em;
  border-radius: 10px;
  border: 1px solid royalblue;
  font-size: 1.5em;
  font-weight: 600;
}

.peoples {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: auto;
  gap: 20px;
}

.userCard img {
  width: 7vw;
  height: 7vw;
  object-fit: cover;
  border-radius: 50%;
}
```

---

### **3. JavaScript Logic**
The JavaScript dynamically renders the user data and filters it based on the search input.

#### **Key JavaScript**
- **Initial Render**: All user cards are rendered on page load.
- **Search Filtering**: Filters the `data` array to show only users whose names start with the input value.

#### **Code Snippet**
```javascript
const renderUsers = (users) => {
  let person = '';
  users.forEach((user) => {
    person += `
      <div class="userCard">
        <img src="${user.src}" alt="${user.name}" />
        <h2>${user.name}</h2>
      </div>
    `;
  });
  peoples.innerHTML = person;
};

// Initial render of all users
renderUsers(data);

input.addEventListener('input', () => {
  const searchValue = input.value.trim().toLowerCase();
  
  const matching = data.filter((user) =>
     user.name.toLowerCase().startsWith(searchValue)
  );

  if (searchValue === '') {
    renderUsers(data);
  } else {
    renderUsers(matching);
  }
});
```

---

## **How It Works**
1. **Rendering Users**: 
   - The `renderUsers` function takes an array of users and dynamically creates user cards.
2. **Search Functionality**:
   - An event listener on the `input` field filters the user data based on the search query.
   - The `startsWith` method ensures names starting with the query are shown.
3. **Responsive Design**:
   - Flexbox ensures that the layout adjusts to different screen sizes.

---

## **Final Thoughts**
This task demonstrated the practical use of **DOM manipulation** for real-world applications. By combining the power of JavaScript and CSS, we created a responsive and interactive user interface.

### **Takeaways**
1. Enhanced understanding of **DOM selection and manipulation**.
2. Improved skills in **array filtering** using JavaScript.
3. Practical implementation of **flexbox** for responsive design.
4. Learned to handle **real-time updates** with event listeners.

---

Happy Coding! 🎉