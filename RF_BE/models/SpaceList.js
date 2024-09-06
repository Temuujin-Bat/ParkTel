// models/ParkingSpace.js
const mongoose = require("mongoose");

const SpaceList = new mongoose.Schema(
  {
    addressLine: {
      type: String,
      required: true,
    },
    coordinates: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    features: {
      "Covered parking": {
        type: Boolean,
        default: false,
      },
      "Security camera": {
        type: Boolean,
        default: false,
      },
      "On-site staff": {
        type: Boolean,
        default: false,
      },
      "Underground parking": {
        type: Boolean,
        default: false,
      },
      "Disabled access": {
        type: Boolean,
        default: false,
      },
      "Electric charging": {
        type: Boolean,
        default: false,
      },
    },
    type: {
      type: String,
      required: true,
    },
    selectedDays: {
      Sun: {
        type: Boolean,
        default: false,
      },
      Mon: {
        type: Boolean,
        default: false,
      },
      Tues: {
        type: Boolean,
        default: false,
      },
      Weds: {
        type: Boolean,
        default: false,
      },
      Thurs: {
        type: Boolean,
        default: false,
      },
      Fri: {
        type: Boolean,
        default: false,
      },
      Sat: {
        type: Boolean,
        default: false,
      },
    },
    price: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: { type: Boolean, default: true },
    bookingDate: { type: Date },
    rentedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

SpaceList.pre("save", function (next) {
  const selectedDays = this.selectedDays;
  if (!Object.values(selectedDays).includes(true)) {
    return next(new Error("At least one day must be selected"));
  }
  next();
});

module.exports = mongoose.model("SpaceList", SpaceList);
