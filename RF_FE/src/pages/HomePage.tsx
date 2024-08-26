// MUI
import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components
import { HomePageBook, HomePageGreener, HomePageImage } from "../features/home";

export default function HomePage() {
  return (
    <Box>
      <Stack
        sx={{
          backgroundColor: "#f8f9fb",
          width: "100%",
          height: { xs: "600px", sm: "700px" },
          position: "absolute",
          zIndex: "-1",
          top: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
        <Grid container sx={{ mt: "30px" }} spacing={2}>
          <HomePageBook />

          <HomePageImage />
        </Grid>

        <HomePageGreener />
      </Container>
    </Box>
  );
}
