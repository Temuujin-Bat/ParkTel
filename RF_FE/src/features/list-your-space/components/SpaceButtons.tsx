// MUI
import { Box, Typography, Link } from "@mui/material";
import { LocalParking, KeyboardBackspace } from "@mui/icons-material";

// Components
import { TButtons } from "../types";

export default function SpaceButtons({
  activeStep,
  setActiveStep,
  onSubmit,
}: TButtons) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: { xs: "90%", sm: "70%", md: "70%", lg: "70%" },
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "40px 10px",
        alignItems: "center",
      }}
    >
      {activeStep !== 0 ? (
        <Link
          component={"button"}
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
          underline="none"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <KeyboardBackspace sx={{ color: "#C0C0C0", mr: "3px" }} />
          <Typography variant="subtitle2" color={"#282c2e"}>
            Back
          </Typography>
        </Link>
      ) : (
        <LocalParking sx={{ color: "#2dc98a", fontSize: "2em" }} />
      )}

      {activeStep === steps.length - 1 ? (
        <Link component={"button"} underline="none" onClick={onSubmit}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#FFF",
              backgroundColor: "#2dc98a",
              borderRadius: "3px",
              padding: "10px 50px",
            }}
          >
            Save
          </Typography>
        </Link>
      ) : (
        <Link
          component={"button"}
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
          underline="none"
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "#FFF",
              backgroundColor: "#2dc98a",
              borderRadius: "3px",
              padding: "10px 50px",
            }}
          >
            Next
          </Typography>
        </Link>
      )}
    </Box>
  );
}

const steps = [
  "Location Address",
  "PinMap",
  "Features",
  "SpaceType",
  "DayPicker",
  "Price",
  "Photos",
];
