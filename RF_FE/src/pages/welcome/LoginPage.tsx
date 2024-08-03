// MUI
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components
import img from "../../assets/welcome/loginPageMan.webp";
import { Login } from "../../features/login";

export default function LoginPage() {
  return (
    <Grid container sx={{ position: "relative" }}>
      <Grid xs={12} sm={12} md={8} lg={8}>
        <Login />
      </Grid>

      <Grid xs={0} sm={0} md={4} lg={4}>
        <Box
          sx={{
            width: "100%",
            height: "90vh",
            backgroundColor: "#2dc98a",
            mt: "20px",
          }}
        />
      </Grid>

      <Stack
        sx={{
          display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          position: "absolute",
          bottom: "-15px",
          right: "150px",
          width: "250px",
        }}
      >
        <Stack component={"img"} src={img} />
      </Stack>
    </Grid>
  );
}
