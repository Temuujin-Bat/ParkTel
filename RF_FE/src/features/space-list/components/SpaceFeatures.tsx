// MUI
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components
import { TFeatures, TListYourSpace } from "../types";

export default function SpaceFeatures({
  features,
  setFeatures,
}: TListYourSpace) {
  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setFeatures) {
      const { name, checked } = event.target;
      setFeatures((prevFeatures) => ({
        ...prevFeatures,
        [name]: checked,
      }));
    }
  };

  return (
    <Slide in={true} timeout={600} direction="right">
      <Box>
        <Typography variant="h5" sx={{ mb: "20px" }}>
          What features does your space offer?
        </Typography>

        <FormGroup>
          <Grid container>
            {Object.keys(features || {}).map((feature) => {
              const typedFeature = feature as keyof TFeatures; // Explicitly type the feature as a keyof Features
              return (
                <Grid xs={12} sm={6} key={typedFeature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={typedFeature}
                        sx={{
                          "&.Mui-checked": {
                            color: "#2dc98a",
                          },
                        }}
                        checked={features ? features[typedFeature] : false}
                        onChange={handleFeatureChange}
                      />
                    }
                    label={
                      <Typography variant="body2">{typedFeature}</Typography>
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </FormGroup>
      </Box>
    </Slide>
  );
}
