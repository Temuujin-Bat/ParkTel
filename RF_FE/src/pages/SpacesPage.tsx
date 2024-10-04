import { useEffect, useState } from "react";

// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Paper } from "@mui/material";

// Components
import {
  SpacesDialog,
  SpacesGrid,
  SpacesGridHeader,
  SpacesGridLottie,
  SpacesMap,
} from "../features/spaces";

// Hooks
import { useUserLocation } from "../hooks/useUserLocation";
import { useSortedSpace } from "../hooks/useSortedSpace";
import { useGetAllSpaceList } from "../hooks/api/useGetAllSpaceList";

export default function SpacesPage() {
  const [sortType, setSortType] = useState("nearest");
  const [open, setOpen] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [parkingSpotsWithTime, setParkingSpotsWithTime] = useState([]);
  const [isWorkerLoading, setIsWorkerLoading] = useState(false);

  const getTodayDayString = () => {
    const daysOfWeek = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };

  const selectedDay = getTodayDayString();

  const { data: parkingSpots, isPending } = useGetAllSpaceList(selectedDay);
  const userLocation = useUserLocation();

  useEffect(() => {
    const availableSpots =
      parkingSpots?.filter((spot) => spot.status === true) || [];

    if (availableSpots.length > 0) {
      if (userLocation) {
        setIsWorkerLoading(true);
        const worker = new Worker(
          new URL("../workers/distanceWorker.js", import.meta.url)
        );

        worker.postMessage({
          parkingSpots: availableSpots,
          userLocation,
        });

        worker.onmessage = (e) => {
          setParkingSpotsWithTime(e.data);
          setIsWorkerLoading(false);
          worker.terminate();
        };

        return () => worker.terminate();
      } else {
        setParkingSpotsWithTime(availableSpots);
      }
    }
  }, [userLocation, parkingSpots]);

  const sortedParkingSpots = useSortedSpace(parkingSpotsWithTime, sortType);

  return sortedParkingSpots && sortedParkingSpots.length > 0 ? (
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
          isPending={isPending || isWorkerLoading}
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

      {sortedParkingSpots && (
        <SpacesDialog
          parkingSpots={selectedSpot}
          open={open}
          setOpen={setOpen}
        />
      )}
    </Grid>
  ) : (
    <Grid
      container
      sx={{
        height: "93vh",
        width: "100vw",
      }}
    >
      <Grid component={Paper} xs={12} sm={12} md={6} lg={5}>
        <SpacesGridHeader sortType={sortType} setSortType={setSortType} />

        <SpacesGridLottie />
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
    </Grid>
  );
}
