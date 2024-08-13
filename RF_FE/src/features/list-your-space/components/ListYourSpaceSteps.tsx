import { useState } from "react";

// MUI
import { Box, Typography } from "@mui/material";

// Components
import {
  SpaceHeader,
  SpaceAddress,
  SpaceMap,
  SpaceFeatures,
  SpaceType,
  SpaceDayPicker,
  SpacePrice,
  SpacePhotos,
  SpaceButtons,
} from "../index";

export default function ListYourSpaceSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [addressLine, setAddressLine] = useState("");
  const [coordinates, setCoordinates] = useState({
    latitude: 32.0853,
    longitude: 34.7818,
  });
  const [features, setFeatures] = useState({
    "Covered parking": false,
    "Security camera": false,
    "On-site staff": false,
    "Underground parking": false,
    "Disabled access": false,
    "Electric charging": false,
  });
  const [type, setType] = useState("");
  const [selectedDays, setSelectedDays] = useState({
    Sun: false,
    Mon: false,
    Tues: false,
    Weds: false,
    Thurs: false,
    Fri: false,
    Sat: false,
  });
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <SpaceAddress
            addressLine={addressLine}
            setAddressLine={setAddressLine}
          />
        );
      case 1:
        return (
          <SpaceMap coordinates={coordinates} setCoordinates={setCoordinates} />
        );
      case 2:
        return <SpaceFeatures features={features} setFeatures={setFeatures} />;
      case 3:
        return <SpaceType type={type} setType={setType} />;
      case 4:
        return (
          <SpaceDayPicker
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
          />
        );
      case 5:
        return <SpacePrice price={price} setPrice={setPrice} />;
      case 6:
        return <SpacePhotos photos={photos} setPhotos={setPhotos} />;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("Saving...");
  };

  return (
    <Box sx={{ width: "100%", padding: "30px" }}>
      <SpaceHeader />

      <Box>{renderStepContent(activeStep)}</Box>

      <SpaceButtons
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        onSubmit={submitHandler}
      />
    </Box>
  );
}
