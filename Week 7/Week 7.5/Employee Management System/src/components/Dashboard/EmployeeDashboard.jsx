import React from "react";
import EmployeeHeader from "../others/EmployeeHeader";
import EmployeeStats from "../others/EmployeeStats";
import TaskList from "../../TaskList/TaskList";

const EmployeeDashboard = (props) => {

  return (
    <div className="p-4 min-h-screen bg-gray-900 md:p-8">
      {/* Header Section */}
      <EmployeeHeader changeUser={props.changeUser} data={props.data} />

      {/* Stats Grid */}
      <EmployeeStats data={props.data} />

      {/* Tasks Grid */}
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
