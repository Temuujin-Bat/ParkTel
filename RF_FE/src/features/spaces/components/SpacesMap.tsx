// Third party
import Map, { Marker } from "react-map-gl";

// MUI
import { Typography, Box, Stack } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

// Components
import { ACCESS_TOKEN_MAP } from "../../../../config";

export default function SpacesMap({
  userLocation,
  parkingSpots,
  setSelectedSpot,
  setOpen,
  isPending,
}) {
  return (
    <>
      {isPending ||
      !userLocation ||
      !userLocation.latitude ||
      !userLocation.longitude ? (
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="textSecondary">
            Loading map data, please wait...
          </Typography>
        </Box>
      ) : (
        <Map
          initialViewState={{
            latitude: Number(userLocation?.latitude),
            longitude: Number(userLocation?.longitude),
            zoom: 16,
          }}
          style={{ width: "100%", height: "93.5vh" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={ACCESS_TOKEN_MAP}
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

          {parkingSpots.map((spot, id) => (
            <Marker
              key={id}
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
                  cursor: "pointer",
                  transition: "all .2s ease",
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
                    transition: "all .2s ease",
                  },
                  "&:hover": {
                    backgroundColor: "#2dc98a",
                    border: "3px solid white",
                    bottom: "5px",
                    color: "white",
                    "& .price-typo": {
                      color: "white",
                      transition: "color .2s ease",
                    },
                  },
                }}
                onClick={() => {
                  setSelectedSpot(spot);
                  setOpen((prev) => !prev);
                }}
              >
                <Typography
                  className="price-typo"
                  variant="subtitle2"
                  sx={{ color: "#101921" }}
                >
                  {spot?.price}NIS
                </Typography>
              </Box>
            </Marker>
          ))}
        </Map>
      )}
    </>
  );
}
