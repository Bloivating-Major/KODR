import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const AllTasks = () => {
  const  {userData, setUserData} = useContext(AuthContext);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="grid grid-cols-5 gap-4 p-4 text-xl font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-xl max-sm:text-sm">
        <div>Employee Name</div>
        <div>New Task</div>
        <div>Active Task</div>
        <div>Completed</div>
        <div>Failed</div>
      </div>

      {/* Employee Rows */}
      <div className="mt-2 space-y-2">
        {userData.map((employee, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 p-4 rounded-xl border border-gray-800 backdrop-blur-md transition-all bg-black/20 hover:bg-black/60"
          >
            <div className="text-lg font-bold text-gray-300">
              {employee.firstName}
            </div>
            <div className="text-lg font-bold text-blue-500">
              {employee.taskCounts.newTask}
            </div>
            <div className="text-lg font-bold text-amber-500">
              {employee.taskCounts.active}
            </div>
            <div className="text-lg font-bold text-emerald-500">
              {employee.taskCounts.completed}
            </div>
            <div className="text-lg font-bold text-rose-500">
              {employee.taskCounts.failed}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
