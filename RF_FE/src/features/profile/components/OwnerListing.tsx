// MUI
import { Box, Typography } from "@mui/material";

// Components
import { NoActiveListingBooking } from "../../../components/notFound";
import OwnerListingGrid from "./OwnerListingGrid";
import { useGetUserSpaceListAPI } from "../../../hooks/api/useGetUserSpaceList";

export default function OwnerListing() {
  const { data: myListings } = useGetUserSpaceListAPI();

  return (
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
  );
}
