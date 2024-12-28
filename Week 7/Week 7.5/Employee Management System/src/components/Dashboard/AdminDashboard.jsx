import React from "react";
import EmployeeHeader from "../others/EmployeeHeader";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-6">
      {/* Header */}
      <EmployeeHeader />
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Create Task Section */}
        <CreateTask />
        {/* Tasks List */}
        <AllTasks />
      </div>
    </div>
  );
};

export default AdminDashboard;
