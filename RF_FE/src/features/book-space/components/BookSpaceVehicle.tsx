// MUI
import { DirectionsCar } from "@mui/icons-material";
import { Stack, Typography, TextField } from "@mui/material";

export default function BookSpaceVehicle({ vehicleNumber, setVehicleNumber }) {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <DirectionsCar sx={{ border: "3px solid #2dc98a", mr: "10px" }} />
        <Typography variant="h4">Your vehicle</Typography>
      </Stack>

      <Stack sx={{ margin: "30px" }}>
        <Typography variant="subtitle2" sx={{ mb: "5px" }}>
          Vehicle registration number:
        </Typography>
        <TextField
          required
          placeholder="123·56·789"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        />
      </Stack>
    </>
  );
}
