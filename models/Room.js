const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomNumber: { type: String, required: true },
  gender: { type: String, required: true },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Participant"
    }
  ]
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
