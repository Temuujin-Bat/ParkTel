import { Box } from "@mui/material";
import Step1Location from "./Step1Location";
import Step2Booking from "./Step2Booking";
import Step3Pictures from "./Step3Pictures";

export default function ListYourSpaceSteps() {
  return (
    <Box sx={{ padding: "30px" }}>
      <Step1Location />
      <Step2Booking />
      <Step3Pictures />
    </Box>
  );
}
