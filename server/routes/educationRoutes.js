const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addEducation,
  getEducation,
  deleteEducation,
  updateEducation,
} = require("../controllers/educationController");


// Add Education
router.post(
  "/",
  protect,
  addEducation
);


// Get Education
router.get(
  "/",
  protect,
  getEducation
);


// Delete Education
router.delete(
  "/:id",
  protect,
  deleteEducation
);

//Update Education
router.put(
  "/:id",
  protect,
  updateEducation
);


module.exports = router;