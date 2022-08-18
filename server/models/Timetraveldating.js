const mongoose = require("mongoose");

const ttSchema = new mongoose.Schema({
  aboutme: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  question1: {
    type: String,
    required: true,
    enum: ["I am a time traveler", "I am interested in dating time travelers"]
  },
  secretinfo: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  preferences: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  timeperiod: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  meet: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Timetraveldating = mongoose.model("Timetraveldating", ttSchema);

module.exports = Timetraveldating;
