const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addProject,
  getProjects,
  deleteProject,
} = require("../controllers/projectController");


// Add Project
router.post(
  "/",
  protect,
  addProject
);


// Get Projects
router.get(
  "/",
  protect,
  getProjects
);


// Delete Project
router.delete(
  "/:id",
  protect,
  deleteProject
);


module.exports = router;