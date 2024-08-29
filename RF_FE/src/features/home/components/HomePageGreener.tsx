// MUI
import { Box, Stack, Typography } from "@mui/material";

// Third party
import Lottie from "lottie-react";

// Components
import tree from "../../../static/animations/HomeTree.json";

export default function HomePageGreener() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mt: "210px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography variant="h2">A&nbsp;</Typography>
        <Typography variant="h2" sx={{ color: "#2dc98a" }}>
          greener way&nbsp;
        </Typography>
        <Typography variant="h2">to travel</Typography>

        <Stack
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "-70px",
            left: { xs: "-40px", sm: "-35px" },
          }}
        >
          <Lottie
            animationData={tree}
            loop={true}
            style={{
              height: "100px",
              textAlign: "center",
            }}
          />
        </Stack>
      </Stack>

      <Stack
        sx={{
          border: "1px solid #2dc98a",
          width: "20%",
          my: "35px",
        }}
      />

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          color: "#4a697c",
          width: "80%",
          mb: "30px",
        }}
      >
        A platform to share unused parking spaces, we’re promoting efficient use
        of existing space as well as a more environmentally sustainable way of
        using our roads.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "30px", sm: "10px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#2dc98a",
              height: "150px",
              width: "150px",
              padding: "10px",
              mb: "20px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "white", textAlign: "center" }}
            >
              +75,000
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "hsla(0, 0%, 100%, .8)", textAlign: "center" }}
            >
              total hours saved
            </Typography>
          </Stack>

          <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", width: "80%" }}
          >
            +75,000 hours saved looking for parking{" "}
            <Typography
              variant="body2"
              sx={{ textAlign: "center" }}
              component={"span"}
            >
              by finding a space through YourParkingSpace.
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#2dc98a",
              height: "150px",
              width: "150px",
              padding: "10px",
              mb: "20px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "white", textAlign: "center" }}
            >
              355t
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "hsla(0, 0%, 100%, .8)", textAlign: "center" }}
            >
              CO2 emissions saved
            </Typography>
          </Stack>

          <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", width: "80%" }}
          >
            355t tons of CO2 emissions saved by booking a space{" "}
            <Typography
              variant="body2"
              sx={{ textAlign: "center" }}
              component={"span"}
            >
              and driving straight to the location.
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#2dc98a",
              height: "150px",
              width: "150px",
              padding: "10px",
              mb: "20px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "white", textAlign: "center" }}
            >
              +54,000
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "hsla(0, 0%, 100%, .8)", textAlign: "center" }}
            >
              trees planted to-date
            </Typography>
          </Stack>

          <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", width: "80%" }}
          >
            54,000 trees planted to-date,{" "}
            <Typography
              variant="body2"
              sx={{ textAlign: "center" }}
              component={"span"}
            >
              offsetting the carbon generated by 4.8 million miles of driving.
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
