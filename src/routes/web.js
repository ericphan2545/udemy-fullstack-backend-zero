const express = require("express");
const router = express.Router();
const { getHomepage, getHoidanit } = require("../controllers/homeController");

// router.Merthod('/route, handler)
router.get("/", getHomepage);
router.get("/hoidanit", getHoidanit);

module.exports = router;
