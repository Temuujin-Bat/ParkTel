// MUI
import { Box } from "@mui/material";
import { SentimentSatisfiedSharp } from "@mui/icons-material";

// Components
import { NoActiveListingBooking } from "../../../components/notFound";

export default function OwnerReservationsCancelled() {
  return (
    <Box sx={{ mt: "30px" }}>
      <NoActiveListingBooking
        icon={
          <SentimentSatisfiedSharp sx={{ margin: "20px", fontSize: "3.5em" }} />
        }
        message="You have no cancelled bookings"
      />
    </Box>
  );
}
