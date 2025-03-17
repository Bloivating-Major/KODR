const Project = require("../models/project.model");

module.exports.create = async (req, res) => {
  const { name } = req.body;

  if (!name || !name?.trim()) {
    return res.status(400).json({ error: "Project name is required" });
  }

  const project = await Project.create({
    name,
    code: " ",
  });

  res.status(201).json({
    message: "Project created successfully",
    data: project,
  });
};

module.exports.list = async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
};
