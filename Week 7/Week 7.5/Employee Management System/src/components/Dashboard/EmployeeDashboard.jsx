import React from "react";
import EmployeeHeader from "../others/EmployeeHeader";
import EmployeeStats from "../others/EmployeeStats";
import TaskList from "../../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-4 min-h-screen bg-gray-900 md:p-8">
      {/* Header Section */}
      <EmployeeHeader />

      {/* Stats Grid */}
      <EmployeeStats />

      {/* Tasks Grid */}
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
