import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import ProjectModal from "../components/ProjectModal.jsx";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  // Fetch projects from backend
  const getProjects = async () => {
    try {
      const response = await axios.get("https://sznv9rj7-3000.inc1.devtunnels.ms/v1/api/projects/list");
      console.log(response);
      setProjects(response.data || []); // Ensuring it's always an array
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]); // Prevents `map` from breaking
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-950 text-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Your Projects</h1>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition">
            + New Project
          </button>
        </div>

        {/* Passing projects & navigate function to ProjectList */}
        <ProjectList projects={projects} navigate={navigate} />

        {/* Passing getProjects to update list after creating a project */}
        {isModalOpen && <ProjectModal closeModal={() => setIsModalOpen(false)} refreshProjects={getProjects} />}
      </div>
    </>
  );
};

export default Home;
