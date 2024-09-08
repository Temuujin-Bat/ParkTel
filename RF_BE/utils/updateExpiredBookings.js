const cron = require("node-cron");
const SpaceList = require("../models/SpaceList");
const Booking = require("../models/Booking");

// Define the cron job
const updateExpiredBookings = () => {
  cron.schedule("0 * * * *", async () => {
    console.log("Running cron job to update expired bookings...");

    try {
      const now = new Date();
      const bookings = await Booking.find({
        enterAfter: { $lte: new Date(now.getTime() - 24 * 60 * 60 * 1000) },
      });

      for (let booking of bookings) {
        await SpaceList.findByIdAndUpdate(booking.spaceListID, {
          enterAfter: null,
          exitBefore: null,
          vehicleNumber: "",
        });
      }

      console.log("Booking statuses updated successfully");
    } catch (error) {
      console.error("Error updating booking statuses:", error);
    }
  });
};

// Export the cron job
module.exports = updateExpiredBookings;
