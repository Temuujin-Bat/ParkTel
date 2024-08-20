// MUI
import { Box, Typography } from "@mui/material";

// Components
import { useAppSelector } from "../../../hooks/useAppStore";
import { getUserSpaceList } from "../../../store/spaceList/selectors";
import { NoActiveListingBooking } from "../../../components/notFound";
import OwnerListingGrid from "./OwnerListingGrid";

export default function OwnerListing() {
  const myListings = useAppSelector(getUserSpaceList);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ mb: "30px" }}>
        Your Listings
      </Typography>

      {myListings.length === 0 ? (
        <NoActiveListingBooking />
      ) : (
        <OwnerListingGrid myListings={myListings} />
      )}
    </Box>
  );
}
