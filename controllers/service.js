const Greeting = require("../models/Greeting");
const greetingService = require("../services/greetingServices");

class SerciveController {
  displayWelcomeMessage = (req, res) => res.send(greetingService.welcomeMessage());

  displayUserGreetings = async (req, res) => {
    try {
      const userGreeting = await Greeting.findById(req.params.id);
      res.send(greetingService.greetUser(userGreeting));
    } catch (error) {
      res.status(500).send("Error", error.message);
    }
  };
}

module.exports = SerciveController;
