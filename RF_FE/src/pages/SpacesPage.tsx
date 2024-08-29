import { useState } from "react";

// MUI
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components
import {
  SpacesDialog,
  SpacesGrid,
  SpacesGridHeader,
  SpacesMap,
} from "../features/spaces";
import { useUserLocation } from "../hooks/useUserLocation";
import { useSortedSpace } from "../hooks/useSortedSpace";

export default function SpacesPage() {
  const [sortType, setSortType] = useState("nearest");
  const [open, setOpen] = useState(true);

  const userLocation = useUserLocation();
  const sortedParkingSpots = useSortedSpace(parkingSpots, sortType);

  return (
    <Grid
      container
      sx={{
        height: "93vh",
        width: "100vw",
      }}
    >
      <Grid component={Paper} xs={12} sm={12} md={6} lg={5}>
        <SpacesGridHeader sortType={sortType} setSortType={setSortType} />
        <SpacesGrid sortedParkingSpots={sortedParkingSpots} />
      </Grid>

      <Grid xs={0} sm={0} md={6} lg={7}>
        {userLocation && (
          <SpacesMap userLocation={userLocation} parkingSpots={parkingSpots} />
        )}
      </Grid>

      <SpacesDialog parkingSpots={parkingSpots} open={open} setOpen={setOpen} />
    </Grid>
  );
}

const parkingSpots = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/150",
    addressLine: "123 Main St, TLV",
    price: 20,
    walkingDistance: 5,
    coordinates: { latitude: 32.070526, longitude: 34.785343 },
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/150",
    addressLine: "123 Main St, TLV",
    price: 10,
    walkingDistance: 10,
    coordinates: { latitude: 32.070526, longitude: 34.785343 },
  },
];
