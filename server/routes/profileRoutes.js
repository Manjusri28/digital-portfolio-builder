const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../config/multer");

const {
    createProfile,
    getProfile,
    updateTemplate
} = require("../controllers/profileController");


// Create / Update Profile
router.post(
  "/",
  protect,
  upload.fields([
    {
      name: "profileImage",
      maxCount: 1,
    },
    {
      name: "resume",
      maxCount: 1,
    },
  ]),
  createProfile
);


// Get Profile
router.get(
    "/",
    protect,
    getProfile
);


// Update Portfolio Theme
router.put(
    "/template",
    protect,
    updateTemplate
);


module.exports = router;