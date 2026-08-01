const Project = require("../models/Project");

// Add Project
exports.addProject = async (req, res) => {
  try {
    const project = await Project.create({
      user: req.user.id,
      title: req.body.title,
      description: req.body.description,
      technologies: req.body.technologies,
      github: req.body.github,
      liveDemo: req.body.liveDemo,
    });

    res.status(201).json({
      message: "Project added successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      user: req.user.id,
    });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};