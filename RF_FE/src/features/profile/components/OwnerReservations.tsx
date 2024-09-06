// MUI
import { Box, Container, Fade } from "@mui/material";
import { SentimentDissatisfiedSharp } from "@mui/icons-material";

// Components
import NoActiveListingBooking from "../../../components/notFound/NoActiveListingBooking.tsx";

export default function OwnerReservations() {
  return (
    <Fade in={true} timeout={500}>
      <Container maxWidth="lg" sx={{ mt: "30px" }}>
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
      </Container>
    </Fade>
  );
}
