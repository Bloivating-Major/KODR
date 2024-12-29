<div align="center">
    <h2>⚜️ Employee Management System⚜️</h2>
</div>

## Overview

The Employee Management System is a web application designed to manage tasks for employees. It features separate pages for admin and employee users. Admins can create new tasks for employees, and these tasks are reflected on the employee's page.

## Features

- **Admin Login:** Admin users can log in to access the admin dashboard.
- **Employee Login:** Employee users can log in to access the employee dashboard.
- **Task Management:** Admins can create new tasks for employees, which are then displayed on the employee's task list.

## Directory Structure

```
Employee Management System
├── src
│   ├── components
│   │   ├── Auth
│   │   │   └── Login.jsx
│   │   ├── Dashboard
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── others
│   │   │   ├── AllTasks.jsx
│   │   │   ├── CreateTask.jsx
│   │   │   ├── EmployeeHeader.jsx
│   │   │   └── EmployeeStats.jsx
│   │   ├── TaskList
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   ├── FailedTask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   └── TaskList.jsx
│   ├── context
│   │   └── AuthProvider.jsx
│   ├── utils
│   │   └── LocalStorage.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   └── package-lock.json
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bloivating-Major/KODR.git
   ```
2. Navigate to the project directory:
   ```bash
   cd '.\Week 7\Week 7.5\Employee Management System\'
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

- **Auth**
  - `Login.jsx`: Handles user login functionality.
- **Dashboard**
  - `AdminDashboard.jsx`: Displays the admin dashboard.
  - `EmployeeDashboard.jsx`: Displays the employee dashboard.
- **others**
  - `AllTasks.jsx`: Displays all tasks.
  - `CreateTask.jsx`: Allows admins to create new tasks.
  - `EmployeeHeader.jsx`: Displays the header for the employee page.
  - `EmployeeStats.jsx`: Displays employee statistics.
- **TaskList**
  - `AcceptTask.jsx`: Allows employees to accept tasks.
  - `CompleteTask.jsx`: Allows employees to mark tasks as complete.
  - `FailedTask.jsx`: Allows employees to mark tasks as failed.
  - `NewTask.jsx`: Displays new tasks.
  - `TaskList.jsx`: Displays the list of tasks.

## Context

- **AuthProvider.jsx**: Provides authentication context for the application.

## Utils

- **LocalStorage.jsx**: Handles local storage operations.

## License

This project is licensed under the [MIT License](./LICENSE.md)

---

Feel free to adjust any sections as per your specific project details or preferences! If you need any more additions or changes, just let me know. 😊