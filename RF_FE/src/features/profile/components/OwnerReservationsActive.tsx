// MUI
import { Box } from "@mui/material";

// Components
import { NoActiveListingBooking } from "../../../components/notFound";

export default function OwnerReservationsActive() {
  return (
    <Box sx={{ mt: "30px" }}>
      <NoActiveListingBooking />
    </Box>
  );
}
