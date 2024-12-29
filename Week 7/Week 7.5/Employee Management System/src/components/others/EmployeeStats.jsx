import React from 'react'

const EmployeeTasksGrid = ({data}) => {
  return (
    <div>
       {/* Stats Grid */}
       <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
        <div className="p-6 bg-gradient-to-br rounded-xl  backdrop-blur-xl bg-[#FF134B] ">
          <h2 className="mb-2 text-4xl font-bold text-white">{data.taskCounts.newTask}</h2>
          <p className="text-red-200">New Task</p>
        </div>
        <div className="p-6 bg-gradient-to-br rounded-xl  backdrop-blur-xl bg-violet-600 ">
          <h2 className="mb-2 text-4xl font-bold text-white">{data.taskCounts.completed}</h2>
          <p className="text-blue-200">Completed Task</p>
        </div>
        <div className="p-6 bg-gradient-to-br rounded-xl  backdrop-blur-xl bg-blue-600">
          <h2 className="mb-2 text-4xl font-bold text-white">{data.taskCounts.active}</h2>
          <p className="text-green-200">Accepted Task</p>
        </div>
        <div className="p-6 bg-gradient-to-br rounded-xl  backdrop-blur-xl bg-[#FF9D00] ">
          <h2 className="mb-2 text-4xl font-bold text-white">{data.taskCounts.failed}</h2>
          <p className="text-yellow-200">Failed Task</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeTasksGrid
