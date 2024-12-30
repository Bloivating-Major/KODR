import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loginError, setLoginError] = useState("");

  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      try {
        const parsedUserData = JSON.parse(loggedInUser);
        setUser(parsedUserData.role);
        setLoggedInUserData(parsedUserData.data || null);
      } catch (error) {
        console.error("Error parsing logged-in user data:", error);
        localStorage.removeItem("loggedInUser");
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    setLoginError("");

    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
    }

    setLoginError("Invalid email or password. Please try again.");
    setTimeout(() => setLoginError(""), 2000);
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} errorMessage={loginError} />}
      {user === "admin" && (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      )}
      {user === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
