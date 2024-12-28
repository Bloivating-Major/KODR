import React from 'react'

const EmployeeHeader = () => {
  return (
    <div>
        {/* Header Section */}
        <div className="flex justify-between items-center my-8">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-bold text-white md:text-3xl">Hello</h1>
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500 md:text-4xl">
            Sarthak
          </span>
          <span className="text-3xl">👋</span>
        </div>
        <button className="px-4 py-2 text-white bg-red-500 rounded-lg transition-colors hover:bg-red-600">
          Log Out
        </button>
      </div>
    </div>
  )
}

export default EmployeeHeader
