// MUI
import { Box, Container, Fade } from "@mui/material";
import { SentimentDissatisfiedSharp } from "@mui/icons-material";

// Components
import { NoActiveListingBooking } from "../../../components/notFound";

// Hooks
import { useGetDriverBooking } from "../../../hooks/api/useGetDriverBooking";
import DriverActiveBookingList from "./DriverActiveBookingList";

export default function DriverActiveBooking() {
  const { data: driverBooking, isPending } = useGetDriverBooking();

  if (isPending) return null;

  return (
    <Fade in={true} timeout={500}>
      <Container maxWidth="lg" sx={{ mt: "30px" }}>
        <Box sx={{ width: "100%" }}>
          {/* Conditionally render based on whether there are any active bookings */}
          {driverBooking.length > 0 ? (
            <DriverActiveBookingList driverBooking={driverBooking} />
          ) : (
            <NoActiveListingBooking
              icon={
                <SentimentDissatisfiedSharp
                  sx={{ margin: "20px", fontSize: "3.5em" }}
                />
              }
              message="You have no upcoming bookings"
            />
          )}
        </Box>
      </Container>
    </Fade>
  );
}
