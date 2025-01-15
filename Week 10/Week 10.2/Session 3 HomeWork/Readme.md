
---

### **Task 1: Setting Up a Basic Server and API Endpoint**

1. **Initialize the Project**:
   ```bash
   mkdir my-api-project
   cd my-api-project
   npm init -y
   ```

2. **Update `package.json`**:
   Change the `main` entry point to `server.js`:
   ```json
   {
     "main": "server.js",
     "scripts": {
       "start": "node server.js"
     }
   }
   ```

3. **Create `server.js`**:
   ```javascript
   // server.js
   const express = require('express');
   const app = require('./src/app');

   const PORT = 3000;
   app.listen(PORT, () => {
       console.log(`Server started on http://localhost:${PORT}`);
   });
   ```

4. **Create `src/app.js`**:
   ```javascript
   // src/app.js
   const express = require('express');
   const routes = require('./routes/index.routes');

   const app = express();

   // Middleware to parse JSON
   app.use(express.json());

   // Use routes
   app.use('/', routes);

   module.exports = app;
   ```

5. **Create `src/routes/index.routes.js`**:
   ```javascript
   // src/routes/index.routes.js
   const express = require('express');
   const router = express.Router();
   const { helloController } = require('../controllers/index.controller');

   // Define /hello route
   router.get('/hello', helloController);

   module.exports = router;
   ```

6. **Create `src/controllers/index.controller.js`**:
   ```javascript
   // src/controllers/index.controller.js
   const helloController = (req, res) => {
       res.json({ message: 'Hello World' });
   };

   module.exports = { helloController };
   ```

7. **Test**:
   Run the server and test the `/hello` endpoint using Postman or `curl`:
   ```bash
   node server.js
   curl http://localhost:3000/hello
   ```

---

### **Task 2: Creating a Simple Resource API**

1. **Define Routes for `todos`**:
   Update `src/routes/index.routes.js`:
   ```javascript
   const express = require('express');
   const router = express.Router();
   const { helloController, getTodos, createTodo } = require('../controllers/index.controller');

   // /hello route
   router.get('/hello', helloController);

   // Todos routes
   router.get('/todos', getTodos);
   router.post('/todos', createTodo);

   module.exports = router;
   ```

2. **Create Controllers for `todos`**:
   Update `src/controllers/index.controller.js`:
   ```javascript
   const todos = [];

   const getTodos = (req, res) => {
       res.json(todos);
   };

   const createTodo = (req, res) => {
       const { text, completed } = req.body;

       if (!text) {
           return res.status(400).json({ error: 'Text is required' });
       }

       const newTodo = { text, completed: completed || false };
       todos.push(newTodo);

       res.status(201).json(newTodo);
   };

   module.exports = { helloController, getTodos, createTodo };
   ```

3. **Test the API**:
   Use Postman to:
   - **GET `/todos`**: Should return an empty array initially.
   - **POST `/todos`**: Add a todo with JSON like:
     ```json
     {
       "text": "Learn Express",
       "completed": false
     }
     ```

---

### **Task 3: Adding Error Handling and a 404 Route**

1. **Error Handling in `createTodo`**:
   Update the controller to handle invalid data:
   ```javascript
   const createTodo = (req, res) => {
       const { text, completed } = req.body;

       if (!text) {
           return res.status(400).json({ error: 'Text is required' });
       }

       const newTodo = { text, completed: completed || false };
       todos.push(newTodo);

       res.status(201).json(newTodo);
   };
   ```

2. **Add 404 Middleware**:
   Update `src/app.js`:
   ```javascript
   // Handle 404 errors
   app.use((req, res) => {
       res.status(404).json({ error: 'Not Found' });
   });
   ```

3. **Test**:
   - Send a POST request with invalid data (e.g., missing `text`) and check the 400 response.
   - Access a non-existent route (e.g., `/nonexistent`) and verify the 404 response.

---

### **Focus Areas Covered**:
1. **Project Initialization**: `npm init -y`
2. **Basic Server Setup**: `server.js` starts the server.
3. **Express Configuration**: Middleware added in `app.js`.
4. **Routing & Controllers**: Separate concerns for maintainability.
5. **Error Handling**: 400 and 404 responses demonstrate robustness.
