import React from "react";

const TaskList = () => {
  return (
    <div>
      {/* Tasks Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Red Task Card */}
        <div className="p-6 bg-gradient-to-br rounded-xl  backdrop-blur-xl from-red-400/20 to-red-500/100 ">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 text-sm text-white bg-red-500 rounded-full">
              High
            </span>
            <span className="text-white font-medium">20 feb 2024</span>
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-white">
            Make a youtube video
          </h3>
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam libero quisquam. Ea, vitae et.
          </p>
        </div>

        {/* Green Task Card */}
        <div className="p-6 bg-gradient-to-br rounded-xl  backdrop-blur-xl from-violet-400/20 to-violet-700/100 ">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 text-sm text-white bg-red-500 rounded-full">
              High
            </span>
            <span className="text-white font-medium">20 feb 2024</span>
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-white">
            Make a youtube video
          </h3>
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam libero quisquam. Ea, vitae et.
          </p>
        </div>

        {/* Blue Task Card */}
        <div className="p-6 bg-gradient-to-br rounded-xl  backdrop-blur-xl from-blue-400/20 to-blue-600/100 ">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 text-sm text-white bg-red-500 rounded-full">
              High
            </span>
            <span className="text-white font-medium">20 feb 2024</span>
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-white">
            Make a youtube video
          </h3>
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam libero quisquam. Ea, vitae et.
          </p>
        </div>

        {/* Yellow Task Card */}
        <div className="p-6 bg-gradient-to-br rounded-xl  backdrop-blur-xl from-orange-400/20 to-orange-500/100">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 text-sm text-white bg-red-500 rounded-full">
              High
            </span>
            <span className="text-white font-medium">20 feb 2024</span>
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-white">
            Make a youtube video
          </h3>
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam libero quisquam. Ea, vitae et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
