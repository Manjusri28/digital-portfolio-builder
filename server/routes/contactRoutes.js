const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  sendMessage,
  getMessages
} = require("../controllers/contactController");


router.get("/test", (req,res)=>{
    res.send("Contact route working");
});

// Public contact form
router.post(
  "/",
  sendMessage
); 



// Portfolio owner messages
router.get(
  "/messages",
  protect,
  getMessages
);


module.exports = router;