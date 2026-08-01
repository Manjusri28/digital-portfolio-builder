const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addTestimonial,
  getTestimonials,
  getOwnerTestimonials,
  approveTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

router.post("/", addTestimonial);

router.get("/:portfolioOwner", getTestimonials);

router.get("/", protect, getOwnerTestimonials);

router.put("/:id", protect, approveTestimonial);

router.delete("/:id", protect, deleteTestimonial);

module.exports = router;