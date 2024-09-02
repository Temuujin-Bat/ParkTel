// MUI
import { Box } from "@mui/material";
import { SentimentNeutral } from "@mui/icons-material";

// Components
import { NoActiveListingBooking } from "../../../components/notFound";

export default function OwnerReservationsCompleted() {
  return (
    <Box sx={{ mt: "30px" }}>
      <NoActiveListingBooking
        icon={<SentimentNeutral sx={{ margin: "20px", fontSize: "3.5em" }} />}
        message="You have no past bookings"
      />
    </Box>
  );
}
