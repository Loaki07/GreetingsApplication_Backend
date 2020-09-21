const express = require("express");
const router = express.Router();
const controller = require("../controllers/service");
const ServiceController = new controller();

router.get("/", ServiceController.displayWelcomeMessage);

router.get("/:id", ServiceController.displayUserGreetings);

module.exports = router;
