// MUI
import { Box } from "@mui/material";

// Components
import SpacesGridSkeleton from "./SpacesGridSkeleton";
import SpacesGridList from "./SpacesGridList";

export default function SpacesGrid({
  sortedParkingSpots,
  setSelectedSpot,
  setOpen,
  isPending,
}) {
  return (
    <Box
      sx={{
        padding: "40px",
        maxHeight: "calc(100vh - 120px)",
        overflowY: "auto",
      }}
    >
      {isPending ? (
        <SpacesGridSkeleton />
      ) : (
        <SpacesGridList
          setSelectedSpot={setSelectedSpot}
          setOpen={setOpen}
          sortedParkingSpots={sortedParkingSpots}
        />
      )}
    </Box>
  );
}
