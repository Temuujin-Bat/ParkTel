// MUI
import { Box, Typography, Tooltip, Stack, TextField } from "@mui/material";

export default function Step1LocationAddress() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: "20px" }}>
        Where is your parking space located?
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Tooltip title="Available Only In Israel">
          <Stack sx={{ mb: "10px", width: "48%" }}>
            <Typography variant="body2" sx={{ mb: "5px" }}>
              Region
            </Typography>
            <TextField fullWidth name="region" placeholder="Israel" disabled />
          </Stack>
        </Tooltip>

        <Tooltip title="Available Only In Tel Aviv">
          <Stack sx={{ mb: "10px", width: "50%" }}>
            <Typography variant="body2" sx={{ mb: "5px" }}>
              City
            </Typography>
            <TextField
              fullWidth
              name="region"
              placeholder="Tel Aviv"
              disabled
            />
          </Stack>
        </Tooltip>
      </Box>

      <Stack sx={{ mb: "10px" }}>
        <Typography variant="body2" sx={{ mb: "5px" }}>
          Address Line*
        </Typography>
        <TextField fullWidth name="addressLine" type="text" required />
      </Stack>
    </Box>
  );
}
