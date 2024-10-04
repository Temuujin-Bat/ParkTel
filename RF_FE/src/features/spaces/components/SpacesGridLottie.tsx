// MUI
import { Stack, Typography } from "@mui/material";

// Third party
import Lottie from "lottie-react";

// Components
import animation from "../../../static/animations/NoParkingSpots.json";

export default function SpacesGridLottie() {
  return (
    <Stack
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={animation}
        loop={true}
        style={{
          height: "300px",
          textAlign: "center",
        }}
      />
      <Typography variant="h3" sx={{ width: "40%" }}>
        Unfortunately, No available parking spots for today!
      </Typography>
    </Stack>
  );
}
