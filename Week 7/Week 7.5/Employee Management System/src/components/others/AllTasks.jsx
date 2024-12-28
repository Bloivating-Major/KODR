import React from 'react'

const AllTasks = () => {
  return (
    <div>
          {/* Tasks List */}
          <div className="space-y-3">
          {[
            { color: 'rose', status: 'Pending' },
            { color: 'emerald', status: 'Completed' },
            { color: 'amber', status: 'In Progress' },
            { color: 'blue', status: 'Review' }
          ].map((task, index) => (
            <div 
              key={index}
              className={`backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2 hover:bg-black/60 transition-all hover:border-${task.color}-500/50  `}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                <span className="text-gray-400">Sarthak</span>
                <span className="text-white">Make a UI Design</span>
              </div>
              <span className={`text-${task.color}-500 text-sm px-3 py-1 rounded-full bg-${task.color}-500/10 border border-${task.color}-500/20`}>
                {task.status}
              </span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default AllTasks
