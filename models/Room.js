const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomNumber: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;