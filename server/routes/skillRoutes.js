const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addSkill,
  getSkills,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");

// Add a skill
router.post("/", protect, addSkill);

// Get all skills for logged-in user
router.get("/", protect, getSkills);

//Update a skill
router.put("/:id", protect, updateSkill);

// Delete a skill
router.delete("/:id", protect, deleteSkill);

module.exports = router;