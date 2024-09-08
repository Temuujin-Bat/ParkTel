const { Router } = require("express");
const {
  createBooking,
  getDriverBookings,
  getOwnerBookings,
} = require("../controllers/bookingController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const router = Router();

router
  .post("/booking/:id", authMiddleware, createBooking)
  .post("/driver", authMiddleware, getDriverBookings)
  .post("/space-owner/your-reservations", authMiddleware, getOwnerBookings);

module.exports = router;
