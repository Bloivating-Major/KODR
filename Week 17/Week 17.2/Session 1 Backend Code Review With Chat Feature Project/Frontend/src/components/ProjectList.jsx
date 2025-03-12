import React from "react";

const ProjectList = ({ projects, navigate }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {projects.length === 0 ? (
        <p className="text-gray-400">No projects found. Create one!</p>
      ) : (
        projects.map((project) => (
          <div
            key={project._id}
            onClick={() => navigate(`/project/${project._id}`)}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition"
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectList;
