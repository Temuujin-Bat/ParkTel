// MUI
import {
  InputAdornment,
  Link,
  TextField,
  Typography,
  Breadcrumbs,
  Box,
  FormControl,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Divider,
  Tooltip,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { LocationOn, NavigateNext } from "@mui/icons-material";
import { useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidGVtdWppbjEyMyIsImEiOiJjbHpvMG5iemowdmo4Mmxxd2hqdjN6ZjdxIn0._zTFjJvz0MwqdIZLKCUJOA";

const parkingSpots = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/150",
    addressLine: "123 Main St, TLV",
    price: 20,
    walkingDistance: 5,
    coordinates: { x: 34.7818, y: 32.0853 },
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/150",
    addressLine: "456 Elm St, TLV",
    price: 15,
    walkingDistance: 10,
    coordinates: { x: 34.7808, y: 32.0843 },
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/150",
    addressLine: "789 Oak St, TLV",
    price: 25,
    walkingDistance: 3,
    coordinates: { x: 34.7808, y: 32.0843 },
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/150",
    addressLine: "123 Oak St, TLV",
    price: 30,
    walkingDistance: 10,
    coordinates: { x: 34.7808, y: 32.0843 },
  },
  {
    id: 5,
    imageUrl: "https://via.placeholder.com/150",
    addressLine: "123 Oak St, TLV",
    price: 30,
    walkingDistance: 10,
    coordinates: { x: 34.7808, y: 32.0843 },
  },
];

export default function SpacesPage() {
  const [sortType, setSortType] = useState("nearest");

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
        <Box
          sx={{
            backgroundColor: "#f8f9fb",
            borderBottom: "1px solid #cdd9e1",
            padding: "20px 20px 10px 30px",
          }}
        >
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            sx={{ borderBottom: "1px solid #cdd9e1", height: "2em" }}
          >
            <Link underline="none" href="/">
              <Typography
                variant="body2"
                sx={{ color: "#4A697C", "&:hover": { color: "#2dc98a" } }}
              >
                Home
              </Typography>
            </Link>

            <Typography
              variant="body2"
              sx={{ color: "#4A697C", textDecoration: "underline" }}
            >
              Tel Aviv
            </Typography>
          </Breadcrumbs>

          <TextField
            helperText="Only available in Tel Aviv"
            fullWidth
            size="small"
            disabled
            value="Tel Aviv"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn sx={{ color: "#2dc98a" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      backgroundColor: "#2dc98a",
                      color: "white",
                      padding: "3px 25px",
                      borderRadius: "3px",
                      mr: "-8px",
                    }}
                  >
                    Daily
                  </Typography>
                </InputAdornment>
              ),
            }}
            sx={{
              mt: "15px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: "1.5px",
                  borderColor: "#2dc98a !important",
                },
              },
            }}
          />

          <FormControl
            size="small"
            fullWidth
            sx={{
              marginBottom: "20px",
              backgroundColor: "#f0fbf7",
              mt: "10px",
              "& .MuiOutlinedInput-root": {
                borderColor: "#2dc98a",
                "& fieldset": {
                  border: "1.5px solid #2dc98a",
                },
                "&:hover fieldset": {
                  borderColor: "#2dc98a",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2dc98a",
                },
              },
            }}
          >
            <Select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <MenuItem value="nearest">
                <Typography variant="body2">Nearest Location</Typography>
              </MenuItem>
              <MenuItem value="lowestPrice">
                <Typography variant="body2">Lowest Price</Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            padding: "40px",
            maxHeight: "calc(100vh - 120px)",
            overflowY: "auto",
          }}
        >
          {parkingSpots.map((spot) => (
            <Card
              key={spot.id}
              sx={{
                marginBottom: "20px",
                display: "flex",
                width: "100%",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "30%", height: "140px" }}
                image={spot.imageUrl}
              />

              <CardContent
                sx={{
                  height: "140px",
                  width: "70%",
                  position: "relative",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography variant="subtitle1">
                    {spot.addressLine}
                  </Typography>

                  <Typography variant="subtitle1">{spot.price}NIS</Typography>
                </Stack>

                <Divider sx={{ borderTop: "1px solid #cdd9e1" }} />

                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    mt: "15px",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <DirectionsWalkIcon
                      sx={{ color: "#adbfca", fontSize: "1.5em", mr: "3px" }}
                    />
                    <Typography
                      sx={{ mr: "3px" }}
                      variant="subtitle2"
                      component={"span"}
                    >
                      {spot.walkingDistance}
                    </Typography>
                    mins
                  </Typography>

                  <Tooltip
                    title={
                      <Paper
                        sx={{
                          backgroundColor: "white",
                          margin: "-20px",
                          display: "flex",
                          flexDirection: "column",
                          padding: "20px",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: "bold",
                            borderBottom: "1px solid #2dc98a",
                            lineHeight: "30px",
                            mb: "10px",
                          }}
                        >
                          Guaranteed
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#4a697c" }}>
                          Your space is for you and you only to use for the
                          duration of your booking, and your space owner knows
                          this.
                        </Typography>
                      </Paper>
                    }
                    arrow
                  >
                    <Typography
                      sx={{ display: "flex", alignItems: "center" }}
                      variant="subtitle2"
                    >
                      <ErrorOutlineIcon
                        sx={{ color: "#adbfca", mr: "3px", fontSize: "1.5em" }}
                      />
                      Guaranteed
                    </Typography>
                  </Tooltip>
                </Stack>

                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <Link
                    underline="none"
                    sx={{
                      backgroundColor: "white",
                      width: "50%",
                      borderTop: "1px solid #e8eff3",
                      padding: "6px",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ textAlign: "center", color: "#4a697c" }}
                    >
                      View Details
                    </Typography>
                  </Link>

                  <Link
                    underline="none"
                    sx={{
                      backgroundColor: "#2dc98a",
                      width: "50%",
                      padding: "6px",
                      "&:hover": {
                        backgroundColor: "#22a270",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      Book Now
                    </Typography>
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>

      <Grid xs={0} sm={0} md={6} lg={7}>
        <Map
          initialViewState={{
            longitude: 34.7818, // Center longitude
            latitude: 32.0853, // Center latitude
            zoom: 14, // Adjust zoom level
          }}
          style={{ width: "100%", height: "100vh" }} // Fullscreen map
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {parkingSpots.map((spot) => (
            <Marker
              key={spot.id}
              longitude={spot.coordinates.x}
              latitude={spot.coordinates.y}
              anchor="bottom"
            >
              <img
                src="https://via.placeholder.com/30" // Placeholder for a custom marker icon
                alt={spot.addressLine}
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                title={`${spot.addressLine} - ${spot.price} NIS`}
              />
            </Marker>
          ))}
        </Map>
      </Grid>
    </Grid>
  );
}

// #4A697C
// 101291
