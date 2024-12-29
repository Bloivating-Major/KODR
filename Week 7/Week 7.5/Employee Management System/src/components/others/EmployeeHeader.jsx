import React, { useState, useEffect } from 'react';

const EmployeeHeader = ({ changeUser, data }) => {
  const [username, setUsername] = useState("Sambhav");

  const user = localStorage.getItem("loggedInUser");

  useEffect(() => {
    if (user) {
      try {
        const parsedUserData = JSON.parse(user);
        if (parsedUserData.role === "admin") {
          setUsername("Admin");
        } else if (parsedUserData.role === "employee" && data) {
          setUsername(data.firstName || "Employee");
        }
      } catch (error) {
        console.error("Error parsing logged-in user data:", error);
      }
    }
  }, [user, data]); 

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    changeUser(null);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center my-8">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-bold text-white md:text-3xl">Hello</h1>
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500 md:text-4xl">
            {username}
          </span>
          <span className="text-3xl">👋</span>
        </div>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-lg transition-colors hover:bg-red-600"
          onClick={logOutUser}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default EmployeeHeader;
