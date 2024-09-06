// models/Booking.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const Booking = new mongoose.Schema({
  spaceListID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SpaceList",
    required: true,
  },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  enterAfter: { type: Date, required: true },
  exitBefore: { type: Date, required: true },
  vehicleNumber: { type: String, required: true },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", Booking);
