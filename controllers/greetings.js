const Greeting = require("../models/Greeting");
const Joi = require("joi");

class GreetingController {
  displayAllGreetings = async (req, res) => {
    try {
      const result = await Greeting.find();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };

  uploadNewGreeting = async (req, res) => {
    try {
      const { error } = this.validateMsg(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      const message = new Greeting({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        greeting: req.body.greeting,
      });

      const result = await message.save();
      res.send(result);
    } catch (error) {
      res.status(500).send("Error", error.message);
    }
  }; 

  validateMsg = (message) => {
    const schema = Joi.object({
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      greeting: Joi.string().min(3).required(),
    });
    return schema.validate(message);
  };
}

module.exports = GreetingController;