// MUI
import { Box, Container, Fade, Typography } from "@mui/material";

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
            <NoActiveListingBooking />
          ) : (
            <OwnerListingGrid isPending={isPending} />
          )}
        </Box>
      </Container>
    </Fade>
  );
}
