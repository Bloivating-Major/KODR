# Lecture 03: NPM Basics and Advanced Features

## Understanding NPM

- **What is NPM?**
    - NPM stands for **Node Package Manager**.
    - It is a tool used to manage packages (or libraries) for Node.js applications.
    - Initially designed for Node.js-related packages, but it can now install **any type of package**.
    
- **Modules vs. Packages**:
    - **Modules**: Core functionalities that come pre-installed with Node.js.
    - **Packages**: Additional libraries or tools installed via NPM to extend your project’s capabilities.

---

## Installing and Uninstalling Packages

### Basics of Installation
- To install a package:
    ```bash
    npm i <package_name>
    npm install <package_name>
    ```
    Both commands are interchangeable and install the package locally in your project.

- Example:
    ```bash
    npm i one-liner-joke  # Installs the package
    npm uninstall one-liner-joke  # Removes the package
    ```

### Installing Specific Versions
- If you want to install a particular version of a package:
    ```bash
    npm i <package_name>@<version>
    ```
- Example:
    ```bash
    npm i lodash@4.17.21  # Installs version 4.17.21 of lodash
    ```

### Global Installation
- Sometimes, you need tools to be available globally on your system (e.g., CLI tools like Create-React-App).
    ```bash
    npm i -g <package_name>  # Installs the package globally
    ```
- Example:
    ```bash
    npm i -g nodemon  # Installs nodemon globally
    ```

### Uninstalling Packages
- To remove a package:
    ```bash
    npm uninstall <package_name>
    ```
- Example:
    ```bash
    npm uninstall chalk  # Removes the chalk package
    ```

---

## Understanding `node_modules`

- When you install a package, it is stored in the **`node_modules`** folder within your project directory.
- **Transitive Dependencies**:
    - Many packages depend on other packages to function.
    - These dependent packages (or transitive dependencies) are automatically installed and stored in `node_modules`.
- To avoid manually including `node_modules` in version control, use **`.gitignore`**:
    ```
    /node_modules
    ```

---

## Dependencies and Dev Dependencies

### Dependencies
- Packages required for your application to run in production.
- Installed by default when you run:
    ```bash
    npm i <package_name>
    ```
- Example:
    ```json
    "dependencies": {
        "express": "^4.18.2"
    }
    ```

### Dev Dependencies
- Packages required only during the development phase (e.g., testing libraries, linters).
- Install them using:
    ```bash
    npm i <package_name> --save-dev
    ```
- Example:
    ```json
    "devDependencies": {
        "eslint": "^8.43.0"
    }
    ```
- To install all development dependencies later:
    ```bash
    npm install --only=dev
    ```

---

## Understanding NPM Scripts

### What are NPM Scripts?
- Scripts are custom commands defined in the **`package.json`** file that allow you to automate tasks.
- Scripts can be run using `npm` commands, making repetitive tasks simpler.

### Default Scripts
- **Start** and **Test** are the default scripts provided by NPM:
    - Start: Runs the application.
    - Test: Runs the tests.
- To execute:
    ```bash
    npm start
    npm test
    ```

### Custom Scripts
- You can define custom scripts in the `package.json` file:
    ```json
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js",
        "build": "webpack",
        "test": "jest",
        "lint": "eslint ./src"
    }
    ```
- To run a custom script, use:
    ```bash
    npm run <script_name>
    ```
- Example:
    ```bash
    npm run dev
    npm run lint
    ```

### Using `concurrently`
- Sometimes, you may need to run multiple scripts simultaneously. Use the `concurrently` package:
    ```bash
    npm i concurrently --save-dev
    ```
- Example in `package.json`:
    ```json
    "scripts": {
        "dev": "concurrently \"npm run server\" \"npm run client\"",
        "server": "nodemon server.js",
        "client": "npm start --prefix client"
    }
    ```
- Run:
    ```bash
    npm run dev
    ```

---

## Advanced NPM Features

### Lock Files
- **`package-lock.json`**:
    - Automatically generated when you install packages.
    - Ensures consistent versions of dependencies across environments.

### Semantic Versioning (SemVer)
- Versions are represented as **`MAJOR.MINOR.PATCH`**.
    - **MAJOR**: Breaking changes (e.g., `2.0.0`).
    - **MINOR**: New features, backward-compatible (e.g., `1.1.0`).
    - **PATCH**: Bug fixes (e.g., `1.0.1`).

### Checking Outdated Packages
- To check for outdated dependencies:
    ```bash
    npm outdated
    ```
- Update dependencies using:
    ```bash
    npm update
    ```

### NPM Audit
- Scans your project for vulnerabilities:
    ```bash
    npm audit
    ```
- Fix vulnerabilities:
    ```bash
    npm audit fix
    ```

### Using `.npmrc`
- Customize NPM’s behavior with an `.npmrc` file:
    ```
    save-exact=true  # Always save exact versions
    registry=https://registry.npmjs.org/  # Default NPM registry
    ```

---

## Conclusion
- **NPM** is a powerful tool for managing dependencies, automating tasks, and streamlining development workflows.
- By mastering its features, you can create efficient, scalable, and maintainable projects.

