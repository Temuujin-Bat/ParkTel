// Third party
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoidGVtdWppbjEyMyIsImEiOiJjbHpvMG5iemowdmo4Mmxxd2hqdjN6ZjdxIn0._zTFjJvz0MwqdIZLKCUJOA";

// MUI
import { Typography, Box, Stack } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

export default function SpacesMap({ userLocation, parkingSpots }) {
  return (
    <Map
      initialViewState={{
        latitude: Number(userLocation?.latitude),
        longitude: Number(userLocation?.longitude),
        zoom: 16,
      }}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker
        latitude={userLocation.latitude}
        longitude={userLocation.longitude}
        anchor="bottom"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <LocationOn sx={{ fontSize: "2em" }} />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              border: "5px dotted #2dc98a",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
            }}
          />
        </Box>
      </Marker>

      {parkingSpots.map((spot) => (
        <Marker
          key={spot.id}
          longitude={spot.coordinates.longitude}
          latitude={spot.coordinates.latitude}
          anchor="bottom"
        >
          <Box
            sx={{
              position: "relative",
              border: "2px solid #2dc98a",
              padding: "5px",
              backgroundColor: "white",
              boxShadow: "2px 0px 8px rgba(0, 0, 0, 1)",
              zIndex: 1,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderTop: "15px solid #2dc98a",
              },
            }}
          >
            <Typography variant="subtitle2" sx={{ color: "#101921" }}>
              {spot?.price}NIS
            </Typography>
          </Box>
        </Marker>
      ))}
    </Map>
  );
}
