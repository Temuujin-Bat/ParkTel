// MUI
import { Box, TextField, Typography } from "@mui/material";

// Components
import { TListYourSpace } from "../types";

export default function SpacePrice({ price, setPrice }: TListYourSpace) {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: "20px" }}>
        How do you want to set your price?
      </Typography>

      <Box>
        <Typography variant="body2" sx={{ mb: "10px" }}>
          Daily Price
        </Typography>
        <TextField
          value={price}
          fullWidth
          placeholder="20 nis per day - recomended"
          onChange={(e) => setPrice!(e.target.value)}
        />
      </Box>
    </Box>
  );
}
