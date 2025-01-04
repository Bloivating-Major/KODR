# 📝 React Form Manager

A modern React application featuring dynamic form management with a responsive navigation system, powered by React Router and Context API.

## 🚀 Features

- Responsive navigation with active state indicators
- Form submission and management
- Favorites system
- Global state management using Context API
- Dynamic routing with React Router
- Mobile-responsive design with Tailwind CSS
- CRUD operations for forms

## 🛠️ Technologies Used

- React.js
- React Router DOM
- Context API
- Tailwind CSS
- Modern JavaScript (ES6+)

## 📋 Project Structure

```
/src
|-- components/
|   |-- Header.jsx
|   |-- FormNav.jsx
|   |-- Form.jsx
|   |-- RegisterForm.jsx
|   |-- SubmittedForms.jsx
|   |-- FavoriteForms.jsx
|-- context/
|   |-- FormContext.jsx
|-- App.jsx
|-- main.jsx
```

## 🎯 Navigation Implementation

The navigation component (`FormNav.jsx`) implements a responsive design with active state indicators:

```javascript
const FormNav = () => {
  return (
    <nav className="flex gap-10 justify-center p-4 border-b border-gray-700 
    font-raleway font-medium text-xl max-sm:text-sm max-sm:w-full max-sm:gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive 
            ? "border-b-4 text-white border-orange-400 rounded-md 
               ease-in-out duration-100 py-1" 
            : "text-white py-1"
        }
      >
        Register
      </NavLink>
      // Similar NavLink components for Submitted and Favorite Forms
    </nav>
  );
};
```

### Navigation Features
- Active state indication with orange border
- Smooth transitions with ease-in-out
- Mobile-responsive text sizing
- Consistent spacing and padding
- Clean, modern design aesthetic

## 🔄 State Management

### Context API Implementation
```javascript
const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);

  // Form management functions
  const submitForm = (formData) => {
    setSubmittedData((prev) => [...prev, formData]);
    if (formData.isfavorite) {
      setFavoriteData((prev) => [...prev, formData]);
    }
  };

  // Delete operations included
  // ... delete functions
};
```

## 🗺️ Routing Structure

```javascript
<Routes>
  <Route path="/" element={<Form />} >
    <Route path="/" element={<RegisterForm/>} />
    <Route path="/submitted" element={<SubmittedForm />} />
    <Route path="/favorites" element={<FavoriteForm />} />
  </Route>
</Routes>
```

## 🎨 Styling Details

### Navigation Styling
```css
/* Tailwind CSS Classes Used */
.flex               /* Flexbox layout */
.gap-10            /* Gap between items */
.justify-center    /* Center alignment */
.border-b          /* Bottom border */
.border-gray-700   /* Border color */
.text-white        /* Text color */
.font-raleway      /* Font family */
.text-xl           /* Text size */
.max-sm:text-sm    /* Mobile responsive */
```

### Responsive Design
- Desktop-first approach
- Mobile breakpoints for smaller screens
- Flexible gap spacing
- Responsive text sizing

## 🏃‍♂️ Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/Bloivating-Major/KODR.git
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

## 📱 Responsive Features

- Mobile-friendly navigation
- Adaptive text sizes
- Flexible spacing
- Preserved functionality across devices

## 💡 Key Features Explained

### Navigation System
- Active route indication
- Smooth transitions
- Mobile responsiveness
- Intuitive user interface

### Form Management
- Submit new forms
- View submitted forms
- Manage favorite forms
- Delete forms from both lists

### State Management
- Centralized state using Context API
- Separate states for submitted and favorite forms
- CRUD operations managed through context

## 🔄 State Flow

1. User navigates through tabs
2. Submits form → `submitForm()`
3. Data stored in context → `submittedData`
4. If marked as favorite → Added to `favoriteData`
5. Delete operations → Remove from respective states

## 🚀 Future Enhancements

- Enhanced navigation animations
- Form validation
- Data persistence
- User authentication
- Search functionality
- Form categories
- Export/Import functionality

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 Development Notes

- Use consistent styling patterns
- Follow the established routing structure
- Maintain mobile responsiveness
- Test across different devices
- Keep state management centralized

![Flow of Project](./Session%201%20React%20Form%20Handling/public/img/RoutingForm.png)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Happy Coding! 🚀✨