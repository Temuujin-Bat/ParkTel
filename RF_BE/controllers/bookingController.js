const Booking = require("../models/Booking");
const SpaceList = require("../models/SpaceList");

const createBooking = async (req, res) => {
  try {
    const { enterAfter, vehicleNumber, exitBefore } = req.body;
    const { id } = req.params;

    // Find the space list by ID
    const space = await SpaceList.findById(id);
    if (!space || !space.status) {
      return res.status(404).json({ message: "Parking space not available." });
    }

    // Create a new booking
    const booking = new Booking({
      spaceListID: id,
      driver: req.user.userID,
      enterAfter,
      exitBefore,
      vehicleNumber,
    });

    // Save the booking
    await Booking.create(booking);

    // Update the space status to unavailable
    const updatedSpace = {
      status: false,
      rentedBy: req.user.userID,
      bookingDate: enterAfter,
    };

    await SpaceList.findByIdAndUpdate(id, updatedSpace, {
      new: true,
    });

    res.status(201).json({ message: "Booking confirmed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getOwnerBookings = async (req, res) => {
  try {
    const ownerSpaces = await SpaceList.find({ user: req.user.userID });

    if (!ownerSpaces || ownerSpaces.length === 0) {
      return res.status(404).json({ msg: "No listings found for this owner" });
    }

    // Get all bookings for the owner's spaces
    const spaceIds = ownerSpaces.map((space) => space._id);

    const bookings = await Booking.find({
      spaceListID: { $in: spaceIds },
    }).populate("spaceListID", "addressLine coordinates"); // Populating space details

    return res.status(200).json(bookings);
  } catch (error) {
    console.error("Error retrieving owner bookings:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createBooking, getOwnerBookings };
