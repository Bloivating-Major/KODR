import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  // Separate states for each input
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newTask, setNewTask] = useState({
    title,
    date,
    assignTo,
    category,
    description,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the new task object
    const taskToAdd = {
      taskTitle : title,
      taskDate : date,
      assignTo,
      category : category,
      taskDescription : description,
      status: "new",
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Update the userData from context
    const updatedUserData = userData.map(user => {
      if (user.firstName.toLowerCase() === assignTo.toLowerCase()) {
        return {
          ...user,
          tasks: user.tasks ? [...user.tasks, taskToAdd] : [taskToAdd],
          taskCounts: {
            ...user.taskCounts,
            newTask: (user.taskCounts?.newTask || 0) + 1
          }
        };
      }
      return user;
    });

    // First update the context
    setUserData(updatedUserData);
    
    // Then update localStorage
    localStorage.setItem('employees', JSON.stringify(updatedUserData));

    // Reset form
    setTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <div>
      {/* Create Task Section */}
      <div className="p-4 mb-8 bg-gradient-to-br rounded-2xl border border-gray-800 shadow-xl from-black/20 to-violet-900/10 md:p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">Create New Task</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-4 py-3 w-full placeholder-gray-400 text-white bg-gray-800 rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="px-4 py-3 w-full placeholder-gray-400 text-white bg-gray-800 rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />

              <input
                type="text"
                placeholder="Assign to"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="px-4 py-3 w-full placeholder-gray-400 text-white bg-gray-800 rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />

              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-3 w-full placeholder-gray-400 text-white bg-gray-800 rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* Right Column */}
            <div className="h-full">
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-40 lg:h-full min-h-[160px] bg-gray-800 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-red-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-[1.02]"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
