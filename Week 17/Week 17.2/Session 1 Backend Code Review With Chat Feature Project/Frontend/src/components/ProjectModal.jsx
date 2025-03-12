import React, { useState } from "react";
import axios from "axios";

const ProjectModal = ({ closeModal, refreshProjects }) => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    try {
      await axios.post("https://sznv9rj7-3000.inc1.devtunnels.ms/v1/api/projects/create", { name: projectName });
      setProjectName("");
      closeModal();
      refreshProjects(); // Fetch projects again after creation
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Create Project</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter project name"
            className="p-2 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end gap-4">
            <button onClick={closeModal} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
