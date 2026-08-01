const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    getAnalytics,
    getViewAnalytics
} = require("../controllers/analyticsController");



router.get(
    "/",
    protect,
    getAnalytics
);

router.get(
    "/views",
    protect,
    getViewAnalytics
);



module.exports = router;