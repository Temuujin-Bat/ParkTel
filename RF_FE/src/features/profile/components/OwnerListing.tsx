// MUI
import { Box, Container, Typography } from "@mui/material";

// Components
import { NoActiveListingBooking } from "../../../components/notFound";
import OwnerListingGrid from "./OwnerListingGrid";
import { useGetUserSpaceListAPI } from "../../../hooks/api/useGetUserSpaceList";
import LoadingMUI from "../../../components/LoadingMUI";

export default function OwnerListing() {
  const { data: myListings, isPending } = useGetUserSpaceListAPI();

  if (isPending) {
    return <LoadingMUI />;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: "30px" }}>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h4" sx={{ mb: "30px" }}>
          Your Listings
        </Typography>

        {myListings.length === 0 ? (
          <NoActiveListingBooking />
        ) : (
          <OwnerListingGrid />
        )}
      </Box>
    </Container>
  );
}
