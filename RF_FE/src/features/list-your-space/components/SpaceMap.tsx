// Third party
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";

// MUI
import { Box, Slide, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

// Components
import { ACCESS_TOKEN_MAP } from "../../../../config";
import { TListYourSpace } from "../types";

mapboxgl.accessToken = ACCESS_TOKEN_MAP;

export default function SpaceMap({
  coordinates,
  setCoordinates,
}: TListYourSpace) {
  return (
    <Slide in={true} timeout={600} direction="right">
      <Box>
        <Typography variant="h5" sx={{ mb: "20px" }}>
          Location
        </Typography>

        <Typography variant="body2" sx={{ mb: "10px" }}>
          We could not find the address
        </Typography>

        <Box sx={{ height: "400px", position: "relative" }}>
          <Map
            initialViewState={{ ...coordinates, zoom: 15 }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken={ACCESS_TOKEN_MAP}
            style={{ width: "100%", height: "100%" }}
            onMove={(evt) => {
              try {
                setCoordinates!(evt.viewState);
              } catch (error) {
                console.error("Error during map move:", error);
              }
            }}
          >
            <Marker
              latitude={coordinates ? coordinates?.latitude : 32.0853}
              longitude={coordinates ? coordinates?.longitude : 34.7818}
              offset={[0, 0]}
            >
              <LocationOn sx={{ color: "#282c2e", fontSize: "4em" }} />
            </Marker>
          </Map>
        </Box>

        <Typography variant="body2" sx={{ mt: "20px" }}>
          Move the map to change the location
        </Typography>
      </Box>
    </Slide>
  );
}
