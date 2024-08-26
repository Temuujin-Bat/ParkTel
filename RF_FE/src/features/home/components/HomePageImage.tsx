// MUI
import { Box, Slide, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components
import img1 from "../../../assets/home/depositphotos_659729888-stock-video-happy-smile-phone-asian-man.jpg";
import img2 from "../../../assets/home/green-parking-spaces-electric-2660414.jpg";

export default function HomePageImage() {
  return (
    <Grid
      xs={0}
      sm={5}
      md={6}
      lg={6}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <Slide in={true} timeout={600} direction="left">
        <Box sx={{ position: "relative" }}>
          <Stack
            sx={{
              position: "absolute",
              border: "20px solid white",
              zIndex: "1",
              height: "300px",
            }}
          >
            <Stack component={"img"} src={img1} sx={{ height: "100%" }} />
          </Stack>

          <Stack
            sx={{
              position: "absolute",
              top: "200px",
              left: "150px",
              height: "300px",
            }}
          >
            <Stack component={"img"} src={img2} sx={{ height: "100%" }} />
          </Stack>
        </Box>
      </Slide>
    </Grid>
  );
}
