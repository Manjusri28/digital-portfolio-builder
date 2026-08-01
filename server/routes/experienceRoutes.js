const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addExperience,
  getExperience,
  deleteExperience,
} = require("../controllers/experienceController");

// Add Experience
router.post("/", protect, addExperience);

// Get Experience
router.get("/", protect, getExperience);

// Delete Experience
router.delete("/:id", protect, deleteExperience);

module.exports = router;