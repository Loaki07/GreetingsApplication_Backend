const Greeting = require("../models/Greeting");

class SerciveController {
  displayWelcomeMessage = (req, res) => {
    res.send("Hello World!");
  };

  displayUserGreetings = async (req, res) => {
    try {
      const userGreeting = await Greeting.findById(req.params.id);
      let greetingMsg = `Hi ${userGreeting.firstName} ${userGreeting.lastName}!`;
      res.send(greetingMsg);
    } catch (error) {
      res.status(500).send("Error", error.message);
    }
  };
}

module.exports = SerciveController;
