const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true, minLength: 8 },
  mobile: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, default: "user" },
  isActive: { type: Boolean, default: true },
  resetPasswordToken: { type: String },
  resetPasswordExpire: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
