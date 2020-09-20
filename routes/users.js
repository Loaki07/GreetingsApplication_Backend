const express = require("express");
const router = express.Router();
const controller = require("../controllers/greetings");
const GreetingController = new controller();

router.get("/", GreetingController.displayAllGreetings);

router.post("/", GreetingController.uploadNewGreeting);

module.exports = router;
