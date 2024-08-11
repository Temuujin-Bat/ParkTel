import {
  Box,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

export default function Step1LocationTypeSpace() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: "20px" }}>
        What best describes your parking space?
      </Typography>

      <Stack sx={{ mb: "10px" }}>
        <Typography variant="body2" sx={{ mb: "5px" }}>
          Select a type of space
        </Typography>

        <FormControl
          fullWidth
          sx={{
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2dc98a",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#2dc98a",
              },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2dc98a",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiSelect-root": {
              borderColor: "#2dc98a",
            },
          }}
        >
          <Select defaultValue="street-parking">
            <MenuItem value="street-parking">
              <Typography variant="body2">Street Parking</Typography>
            </MenuItem>
            <MenuItem value="gated-parking">
              <Typography variant="body2">Gated Parking</Typography>
            </MenuItem>
            <MenuItem value="commercial-parking-lot">
              <Typography variant="body2">Commercial Parking Lot</Typography>
            </MenuItem>
            <MenuItem value="residential-parking-lot">
              <Typography variant="body2">Residental Parking Lot</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}

// Street Parking,
// Gated Parking
// Commercial Parking Lot,
// Residental Parking lot
