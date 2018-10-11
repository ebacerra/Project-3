const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
<<<<<<< HEAD
  roomNumber: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Participant"
    }
  ]
=======
    roomNumber: { type: String, required: true },
    gender: { type: String, required: true },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Participant"
        }
    ]
>>>>>>> 7f8e87d9af3426a7af894c4078d9d43322fc44ac
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
