const express = require("express");
const router = express.Router();

const {
  getPublicPortfolio,
} = require("../controllers/publicPortfolioController");


console.log("Portfolio Controller:", getPublicPortfolio);


router.get(
  "/:id",
  getPublicPortfolio
);


module.exports = router;