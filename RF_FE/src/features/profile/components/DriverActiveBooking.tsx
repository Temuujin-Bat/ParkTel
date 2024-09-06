// MUI
import { Box, Container, Fade } from "@mui/material";
import { SentimentDissatisfiedSharp } from "@mui/icons-material";

// Components
import { NoActiveListingBooking } from "../../../components/notFound";

// Hooks
import { useGetUserSpaceListAPI } from "../../../hooks/api/useGetUserSpaceList";
import DriverActiveBookingList from "./DriverActiveBookingList";

export default function DriverActiveBooking() {
  const { data: myListings, isPending } = useGetUserSpaceListAPI();

  console.log(myListings);

  if (isPending) return null;

  return (
    <Fade in={true} timeout={500}>
      <Container maxWidth="lg" sx={{ mt: "30px" }}>
        <Box sx={{ width: "100%" }}>
          {/* Conditionally render based on whether there are any active bookings */}
          {myListings && myListings.length > 0 ? (
            <DriverActiveBookingList myListings={myListings} />
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
