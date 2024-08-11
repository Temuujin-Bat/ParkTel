import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { ACCESS_TOKEN_MAP } from "../../../../config";
import { LocationOn } from "@mui/icons-material";

mapboxgl.accessToken = ACCESS_TOKEN_MAP;

function saveCoordinatesToBackend(coordinates: {
  latitude: number;
  longitude: number;
}) {
  // Implement the API call to save the coordinates
  // Example:
  // fetch('/api/save-coordinates', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(coordinates),
  // });
}

export default function Step1LocationPinMap() {
  const [viewport, setViewport] = useState({
    latitude: 32.0853, // Latitude for Tel Aviv
    longitude: 34.7818, // Longitude for Tel Aviv
    zoom: 15,
  });

  const saveCoordinates = () => {
    console.log("Saving coordinates:", {
      latitude: viewport.latitude,
      longitude: viewport.longitude,
    });
    saveCoordinatesToBackend({
      latitude: viewport.latitude,
      longitude: viewport.longitude,
    });
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: "20px" }}>
        Location
      </Typography>

      <Box sx={{ height: "400px", position: "relative" }}>
        <Map
          initialViewState={viewport}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={ACCESS_TOKEN_MAP} // Use the imported access token
          style={{ width: "100%", height: "100%" }}
          onMove={(evt) => {
            console.log("Map moved:", evt.viewState);
            setViewport(evt.viewState);
          }}
          onLoad={() => {
            console.log("Map loaded successfully");
          }}
          onError={(error) => {
            console.error("Map load error:", error);
          }}
        >
          <Marker
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            offset={[0, -50]}
          >
            <LocationOn sx={{ color: "#282c2e", fontSize: "4em" }} />
          </Marker>
        </Map>
        {/* Save Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ position: "absolute", top: 16, left: 16 }}
          onClick={saveCoordinates}
        >
          Save Location
        </Button>
      </Box>

      <Typography variant="body2" sx={{ mt: "20px" }}>
        Drag pin to change location
      </Typography>
    </Box>
  );
}
