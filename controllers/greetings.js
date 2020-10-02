const Greeting = require('../models/Greeting');
const Joi = require('joi');

class GreetingController {
  displayAllGreetings = async (req, res) => {
    try {
      const result = await Greeting.find();
      res.send(result);
    } catch (error) {
      res.status(500).send('Error', error.message);
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
      res.status(500).send('Error', error.message);
    }
  };

  findGreetingById = async (req, res) => {
    try {
      const greeting = await Greeting.findById(req.params.id);
      res.send(greeting);
    } catch (error) {
      res.status(500).send('Error', error.message);
    }
  };

  updateGreeting = async (req, res) => {
    try {
      const updatedGreeting = await Greeting.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            greeting: req.body.greeting,
          },
        },
        { new: true, useFindAndModify: false }
      );
      res.send(updatedGreeting);
    } catch (error) {
      res.status(500).send('Error', error.message);
    }
  };

  deleteGreeting = async (req, res) => {
    await Greeting.deleteOne({ _id: req.params.id });
    res.status(200).send('Successfull Deleted User!');
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
