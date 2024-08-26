// MUI
import {
  Box,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Check, LocationOn, MyLocation } from "@mui/icons-material";

// Third party
import Lottie from "lottie-react";

// Components
import animation from "../../../static/animations/HomeCar.json";

export default function HomePageBook() {
  return (
    <Grid
      xs={12}
      sm={7}
      md={6}
      lg={6}
      sx={{ padding: { xs: "0px", sm: "20px", md: "30px" } }}
    >
      <Box>
        <Typography variant="h2">Find and book parking</Typography>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{ fontSize: "2.5em", fontWeight: "500", mt: "-15px" }}
          >
            in seconds
          </Typography>
          <Typography
            sx={{
              fontSize: "2.5em",
              fontWeight: "500",
              mt: "-25px",
              color: "#2dc98a",
            }}
          >
            .
          </Typography>
        </Stack>
      </Box>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <Check sx={{ color: "#2dc98a", mr: "10px" }} />
        <Typography variant="subtitle2" sx={{ color: "#4a697c" }}>
          Satisfaction & availability guaranteed
        </Typography>
      </Stack>

      <Box
        sx={{
          border: "10px solid #cfd9de",
          padding: "20px",
          mt: "30px",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -15,
            right: 0,
          }}
        >
          <Lottie
            animationData={animation}
            loop={true}
            style={{
              height: "100px",
              textAlign: "center",
            }}
          />
        </Stack>

        <Typography variant="caption" sx={{ color: "#4a697c" }}>
          The smart way to park
        </Typography>

        <TextField
          helperText="Only available in Tel Aviv"
          fullWidth
          size="medium"
          disabled
          value="Tel Aviv"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <MyLocation sx={{ color: "#2dc98a" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mt: "15px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderWidth: "2px",
              },
            },
          }}
        />

        <Link
          underline="none"
          href="/tel-aviv-spaces"
          sx={{
            width: "100%",
            backgroundColor: "#2dc98a",
            color: "#FFF",
            display: "flex",
            alignItems: "center",
            padding: "10px",
            justifyContent: "center",
            flex: "1",
            mr: "25px",
            mt: "20px",
            "&:hover": {
              backgroundColor: "#22a270",
            },
          }}
        >
          <Typography variant="subtitle1">
            Search the best parking deals
          </Typography>
        </Link>
      </Box>
    </Grid>
  );
}
