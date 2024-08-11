import { useState } from "react";

// MUI
import { Box, Typography, Link } from "@mui/material";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

// Components
import Step1LocationAddress from "./Step1LocationAddress";
import Step1LocationPinMap from "./Step1LocationPinMap";
import Step1LocationFeatures from "./Step1LocationFeatures";
import Step1LocationTypeSpace from "./Step1LocationTypeSpace";
import Step1LocationHeader from "./Step1LocationHeader";

const steps = ["Location Address", "Pin Map", "Features", "Type of Space"];

const Step1Location = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSave = () => {
    alert("Save successful!");
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Step1LocationAddress />;
      case 1:
        return <Step1LocationPinMap />;
      case 2:
        return <Step1LocationFeatures />;
      case 3:
        return <Step1LocationTypeSpace />;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Step1LocationHeader />

      <Box>{renderStepContent(activeStep)}</Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: { xs: "90%", sm: "70%", md: "70%", lg: "70%" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "60px 10px",
          alignItems: "center",
        }}
      >
        {activeStep !== 0 ? (
          <Link component={"button"} onClick={handleBack}>
            <Typography>Back</Typography>
          </Link>
        ) : (
          <LocalParkingIcon sx={{ color: "#2dc98a", fontSize: "2em" }} />
        )}

        {activeStep === steps.length - 1 ? (
          <Link component={"button"} onClick={handleSave}>
            <Typography variant="subtitle2">Save</Typography>
          </Link>
        ) : (
          <Link component={"button"} onClick={handleNext} underline="none">
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
    </Box>
  );
};

export default Step1Location;
