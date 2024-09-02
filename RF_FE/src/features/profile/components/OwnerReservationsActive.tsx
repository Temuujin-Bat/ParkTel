// MUI
import { Box } from "@mui/material";
import { SentimentDissatisfiedSharp } from "@mui/icons-material";

// Components
import { NoActiveListingBooking } from "../../../components/notFound";

export default function OwnerReservationsActive() {
  return (
    <Box sx={{ mt: "30px" }}>
      <NoActiveListingBooking
        icon={
          <SentimentDissatisfiedSharp
            sx={{ margin: "20px", fontSize: "3.5em" }}
          />
        }
        message="You have no active bookings"
      />
    </Box>
  );
}
