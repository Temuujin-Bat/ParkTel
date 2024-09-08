// models/Booking.js
const mongoose = require("mongoose");

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
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    index: { expireAfterSeconds: 0 },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", Booking);
