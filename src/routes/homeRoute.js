const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get("/", HomeController.showHomePage);
router.get("/sobre", HomeController.showAboutPage);


module.exports = router;