// MUI
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function Step1LocationFeatures() {
  const features = [
    "Covered parking",
    "Arranged transfers",
    "CCTV",
    "Security lighting",
    "On-site staff",
    "Underground parking",
    "Disabled access",
    "Electric charging",
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: "20px" }}>
        What features does your space offer?
      </Typography>

      <FormGroup>
        <Grid container>
          {features.map((feature) => (
            <Grid xs={12} sm={6} key={feature}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={feature}
                    sx={{
                      "&.Mui-checked": {
                        color: "#2dc98a",
                      },
                    }}
                  />
                }
                label={<Typography variant="body2">{feature}</Typography>}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </Box>
  );
}
