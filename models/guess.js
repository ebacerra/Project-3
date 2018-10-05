const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guessSchema = new Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  birthday: { type: Date, default: Date.now }
});

const Guess = mongoose.model("Guess", guessSchema);

module.exports = Guess;
