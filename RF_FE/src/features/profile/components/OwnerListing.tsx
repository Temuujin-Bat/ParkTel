// MUI
import { Box, Container, Fade, Typography } from "@mui/material";
import { SentimentDissatisfiedSharp } from "@mui/icons-material";

// Components
import { NoActiveListingBooking } from "../../../components/notFound";
import OwnerListingGrid from "./OwnerListingGrid";

// Hooks
import { useGetUserSpaceListAPI } from "../../../hooks/api/useGetUserSpaceList";

export default function OwnerListing() {
  const { data: myListings, isPending } = useGetUserSpaceListAPI();

  return (
    <Fade in={true} timeout={500}>
      <Container maxWidth="lg" sx={{ mt: "30px" }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" sx={{ mb: "30px" }}>
            Your Listings
          </Typography>

          {myListings && myListings.length === 0 ? (
            <NoActiveListingBooking
              icon={
                <SentimentDissatisfiedSharp
                  sx={{ margin: "20px", fontSize: "3.5em" }}
                />
              }
              message="You have no active bookings"
            />
          ) : (
            <OwnerListingGrid isPending={isPending} />
          )}
        </Box>
      </Container>
    </Fade>
  );
}
