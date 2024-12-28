import React from 'react'

const CreateTask = () => {
  return (
    <div>
        {/* Create Task Section */}
      <div className="p-4 mb-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-md bg-gradient-to-br from-black/20 to-violet-900/10  md:p-6 ">
          <h2 className="mb-6 text-2xl font-bold text-white">Create New Task</h2>
          
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Task Title"
                className="px-4 py-3 w-full placeholder-gray-400 text-white rounded-lg border border-gray-800 bg-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              
              <input 
                type="date"
                className="px-4 py-3 w-full placeholder-gray-400 text-white rounded-lg border border-gray-800 bg-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              
              <input 
                type="text"
                placeholder="Assign to"
                className="px-4 py-3 w-full placeholder-gray-400 text-white rounded-lg border border-gray-800 bg-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              
              <input 
                type="text"
                placeholder="Category"
                className="px-4 py-3 w-full placeholder-gray-400 text-white rounded-lg border border-gray-800 bg-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>
            
            {/* Right Column */}
            <div className="h-full">
              <textarea 
                placeholder="Description"
                className="w-full h-40 lg:h-full min-h-[160px] bg-gray-800 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
              />
            </div>
          </div>
          
          <button className="mt-6 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-red-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-[1.02]">
            Create Task
          </button>
        </div>

    </div>
  )
}

export default CreateTask
