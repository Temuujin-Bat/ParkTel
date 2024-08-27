import React, { useEffect, useState } from "react";

type Coordinates = {
  latitude: number;
  longitude: number;
};

// MUI
import {
  Dialog,
  Paper,
  Slide,
  Box,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LockIcon from "@mui/icons-material/Lock";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Components
import { SpacesGrid, SpacesGridHeader, SpacesMap } from "../features/spaces";
import { TransitionProps } from "notistack";
import { Close, Fastfood, Hotel, LaptopMac, Repeat } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

export default function SpacesPage() {
  const [sortType, setSortType] = useState("nearest");
  const [sortedParkingSpots, setSortedParkingSpots] = useState([
    ...parkingSpots,
  ]);
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(
          `User location: latitude=${latitude}, longitude=${longitude}`
        );
        setUserLocation({ latitude: latitude, longitude: longitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  useEffect(() => {
    const sortedSpots = [...parkingSpots];
    if (sortType === "nearest") {
      sortedSpots.sort((a, b) => a.walkingDistance - b.walkingDistance);
    } else if (sortType === "lowestPrice") {
      sortedSpots.sort((a, b) => a.price - b.price);
    }
    setSortedParkingSpots(sortedSpots);
  }, [sortType]);

  return (
    <Grid
      container
      sx={{
        height: "93vh",
        width: "100vw",
        overflow: "hidden",
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

      <Dialog
        sx={{
          m: {
            xs: "60px 0px 0px 0px",
            sm: "100px 0px 0px 0px",
            md: "120px 0px 120px 0px",
            lg: "150px 0px 150px 0px",
          },
        }}
        fullScreen
        open={open}
        onClose={(prev) => !prev}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            borderRadius: "15px 15px 0 0",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #2dc98a",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">
            {parkingSpots[0].addressLine}
          </Typography>

          <Close onClick={() => setOpen(false)} style={{ cursor: "pointer" }} />
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              padding: "25px 30px",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              backgroundColor: "#f8f9fb",
              borderBottom: "1px solid #cdd9e1",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                borderTop: "1px solid #8aa4b3",
                borderRight: "1px solid #8aa4b3",
                borderBottom: "0px solid #8aa4b3",
                borderLeft: "1px solid #8aa4b3",
                backgroundColor: "white",
                padding: "5px",
                position: "relative",
              }}
            >
              <Stack
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "#4a697c" }} variant="body2">
                  Enter after
                </Typography>
                <Typography variant="subtitle1">
                  7pm{" "}
                  <Typography
                    variant="subtitle2"
                    component={"span"}
                    sx={{ color: "101921" }}
                  >
                    (today)
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "#4a697c" }} variant="body2">
                  Exit before
                </Typography>
                <Typography variant="subtitle1">
                  1am{" "}
                  <Typography
                    variant="subtitle2"
                    component={"span"}
                    sx={{ color: "101921" }}
                  >
                    (tomorrow)
                  </Typography>
                </Typography>
              </Stack>
              <ArrowForwardIcon
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#2dc98a",
                }}
              />
            </Box>

            <Box
              sx={{ width: "100%", display: "flex", backgroundColor: "white" }}
            >
              <Box
                sx={{
                  width: "50%",
                  padding: "5px",
                  borderTop: "1px solid #8aa4b3",
                  borderRight: "0px solid #8aa4b3",
                  borderBottom: "1px solid #8aa4b3",
                  borderLeft: "1px solid #8aa4b3",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: "#4a697c" }} variant="body2">
                    Booking price
                  </Typography>
                  <Typography variant="subtitle1">
                    {parkingSpots[0].price}{" "}
                    <Typography
                      variant="subtitle2"
                      component={"span"}
                      sx={{ color: "101921" }}
                    >
                      (nis)
                    </Typography>
                  </Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  border: "1px solid #8aa4b3",
                  width: "50%",
                  padding: "5px",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: "#4a697c" }} variant="body2">
                    To destination
                  </Typography>
                  <Typography variant="subtitle1">
                    {parkingSpots[0].walkingDistance}{" "}
                    <Typography
                      variant="subtitle2"
                      component={"span"}
                      sx={{ color: "101921" }}
                    >
                      (mins)
                    </Typography>
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "#F8F9FB",
              border: "1px solid #adbfca",
              margin: "30px",
              flex: 1,
              overflowY: "auto",
              padding: "5px",
            }}
          >
            <Link
              underline="none"
              sx={{
                padding: "7px",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                color: activeTab === "overview" ? "#fff" : "#4a697c",
                backgroundColor:
                  activeTab === "overview" ? "#000" : "transparent",
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setActiveTab("overview")}
            >
              <Typography variant="subtitle2">Overview</Typography>
            </Link>
            <Link
              underline="none"
              sx={{
                flex: 1,
                padding: "7px",
                display: "flex",
                justifyContent: "center",
                color: activeTab === "reviews" ? "#fff" : "#4a697c",
                backgroundColor:
                  activeTab === "reviews" ? "#000" : "transparent",
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setActiveTab("reviews")}
            >
              <Typography variant="subtitle2">Reviews</Typography>
            </Link>
            <Link
              underline="none"
              sx={{
                flex: 1,
                padding: "7px",
                display: "flex",
                justifyContent: "center",
                color: activeTab === "howToPark" ? "#fff" : "#4a697c",
                backgroundColor:
                  activeTab === "howToPark" ? "#000" : "transparent",
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setActiveTab("howToPark")}
            >
              <Typography variant="subtitle2">How to Park</Typography>
            </Link>
          </Box>

          {activeTab === "overview" && (
            <Box sx={{ padding: "0px 30px" }}>
              <Typography>Overview Content</Typography>
            </Box>
          )}

          {activeTab === "reviews" && (
            <Box sx={{ padding: "0px 30px" }}>
              <Typography>Reviews Content</Typography>
            </Box>
          )}

          {activeTab === "howToPark" && (
            <Box sx={{ padding: "0px 30px" }}>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    <Stack
                      sx={{
                        border: "3px solid #2dc98a",
                        width: "fit-content", // Set the width of the border box
                        padding: "0.5rem",
                      }}
                    >
                      <Typography variant="subtitle1">1</Typography>
                    </Stack>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <Fastfood />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Eat
                    </Typography>
                    <Typography>Because you need strength</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    10:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <LaptopMac />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Code
                    </Typography>
                    <Typography>Because it&apos;s awesome!</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                      <Hotel />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Sleep
                    </Typography>
                    <Typography>Because you need rest</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot color="secondary">
                      <Repeat />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Repeat
                    </Typography>
                    <Typography>Because this is the life you love!</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            padding: "15px 30px",
            backgroundColor: "#f8f9fb",
            borderTop: "1px solid #cdd9e1",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            underline="none"
            sx={{
              backgroundColor: "#2dc98a",
              "&:hover": {
                backgroundColor: "#22a270",
                cursor: "pointer",
              },
              width: "100%",
              display: "flex",
              padding: "15px 0",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LockIcon sx={{ mr: "10px", color: "#4a697c" }} />
            <Typography variant="subtitle2" sx={{ color: "#FFF" }}>
              Book now securely
            </Typography>
          </Link>
        </Box>
      </Dialog>
    </Grid>
  );
}
// 1px solid #cdd9e1
// #f8f9fb

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
