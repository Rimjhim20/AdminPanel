const mongoose = require("mongoose");
const Joi = require("joi");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required."],
  },
  designation: {
    type: String,
    required: [true, "designation is required."],
  },
  email: {
    type: String,
    required: [true, "email is required."],
  },
  phone: {
    type: Number,
    required: [true, "phone number is required."],
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Contact = new mongoose.model("Contact", ContactSchema);

const validateContact = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    designation: Joi.string().min(4).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.number().min(7).max(10000000000).required(),
  });

  return schema.validate(data);
};

module.exports = {
  validateContact,
  Contact,
};