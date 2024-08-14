// MUI
import {
  Box,
  Typography,
  Tooltip,
  Stack,
  TextField,
  Fade,
} from "@mui/material";

// Components
import { TListYourSpace } from "../types";

export default function SpaceAddress({
  addressLine,
  setAddressLine,
}: TListYourSpace) {
  return (
    <Fade in={true} timeout={700}>
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
              <TextField
                fullWidth
                name="region"
                placeholder="Israel"
                disabled
              />
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
            Address Line***
          </Typography>
          <TextField
            fullWidth
            name="addressLine"
            type="text"
            required
            value={addressLine || ""}
            onChange={(e) => setAddressLine!(e.target.value)}
          />
        </Stack>
      </Box>
    </Fade>
  );
}
