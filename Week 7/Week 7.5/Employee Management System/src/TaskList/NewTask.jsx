import React from 'react'

const NewTask = ({data}) => {
  let [year, month, day] =   ((data.taskDate).split('-'));
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const monthName = monthNames[parseInt(month, 10) - 1]

  return (
    <div>
            {/* Blue Task Card */}
            <div className="p-6 bg-gradient-to-br rounded-xl backdrop-blur-xl from-blue-400/20 to-blue-600/100">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 text-sm text-white bg-red-500 rounded-full">
            {data.category}
            </span>
            <span className="font-medium text-white">{`${day} ${monthName} ${year}`}</span>
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-white">
          {data.taskTitle}
          </h3>
          <p className="text-gray-100">
          {data.taskDescription}
          </p>
          <button className="px-4 py-2 mt-5 mr-5 text-orange-500 bg-gray-900  hover:bg-gray-950 rounded-lg ">
        Accept Task
      </button>
      <button className="px-4 py-2 text-red-500 bg-gray-900 rounded-lg hover:bg-gray-950">
        Decline
      </button>
        </div>
    </div>
  )
}

export default NewTask
