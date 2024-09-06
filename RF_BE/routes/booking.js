const { Router } = require("express");
const {
  createBooking,
  getOwnerBookings,
} = require("../controllers/bookingController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const router = Router();

router
  .post("/booking/:id", authMiddleware, createBooking)
  .post("/active-reservations", authMiddleware, getOwnerBookings);

module.exports = router;
