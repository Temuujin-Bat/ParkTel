import { useMemo, useState } from "react";

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

// Hooks
import { useUserLocation } from "../hooks/useUserLocation";
import { useSortedSpace } from "../hooks/useSortedSpace";
import { useGetAllSpaceList } from "../hooks/api/useGetAllSpaceList";

// Utils
import { CalculateParkingSpotsWithTime } from "../utils/helpers/DistanceCalc";

export default function SpacesPage() {
  const [sortType, setSortType] = useState("nearest");
  const [open, setOpen] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const { data: parkingSpots, isPending } = useGetAllSpaceList();
  const userLocation = useUserLocation();
  const averageSpeedMetersPerMinute = 83.33;

  const parkingSpotsWithTime = useMemo(
    () =>
      CalculateParkingSpotsWithTime(
        parkingSpots,
        userLocation,
        averageSpeedMetersPerMinute
      ),
    [parkingSpots, userLocation, averageSpeedMetersPerMinute]
  );

  const sortedParkingSpots = useSortedSpace(parkingSpotsWithTime, sortType);

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

        <SpacesGrid
          sortedParkingSpots={sortedParkingSpots}
          setSelectedSpot={setSelectedSpot}
          setOpen={setOpen}
          isPending={isPending}
        />
      </Grid>

      <Grid xs={0} sm={0} md={6} lg={7}>
        <SpacesMap
          setSelectedSpot={setSelectedSpot}
          userLocation={userLocation}
          parkingSpots={sortedParkingSpots}
          setOpen={setOpen}
          isPending={isPending}
        />
      </Grid>

      {!isPending && (
        <SpacesDialog
          parkingSpots={selectedSpot}
          open={open}
          setOpen={setOpen}
        />
      )}
    </Grid>
  );
}
