// MUI
import { Box, Slide, TextField, Typography } from "@mui/material";

// Components
import { TListYourSpace } from "../types";

export default function SpacePrice({ price, setPrice }: TListYourSpace) {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPrice!(value);
    }
  };

  return (
    <Slide in={true} timeout={600} direction="right">
      <Box>
        <Typography variant="h5" sx={{ mb: "20px" }}>
          How do you want to set your price?
        </Typography>

        <Box>
          <Typography variant="body2" sx={{ mb: "10px" }}>
            Daily Price***
          </Typography>
          <TextField
            value={price}
            fullWidth
            placeholder="20 nis per day - recomended"
            onChange={handlePriceChange}
          />
        </Box>
      </Box>
    </Slide>
  );
}
