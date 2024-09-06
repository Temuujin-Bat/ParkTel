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
} from "..";
import { getSingleSpaceSpaceList } from "../../../store/spaceList/selectors";
import { TListYourSpace } from "../types";

// Hooks
import { useAppSelector } from "../../../hooks/useAppStore";
import { useEditSpaceListAPI } from "../../../hooks/api/useEditSpaceList";

// Third party
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

export default function EditSpaceListSteps() {
  const spaceListDetails = useAppSelector(getSingleSpaceSpaceList);
  const { id } = useParams();

  const [activeStep, setActiveStep] = useState(0);
  const [addressLine, setAddressLine] = useState(
    spaceListDetails?.addressLine || ""
  );
  const [coordinates, setCoordinates] = useState({
    latitude: Number(spaceListDetails?.coordinates?.latitude) || 32.0853,
    longitude: Number(spaceListDetails?.coordinates?.longitude) || 34.7818,
  });
  const [features, setFeatures] = useState({
    "Covered parking": spaceListDetails?.features?.["Covered parking"] || false,
    "Security camera": spaceListDetails?.features?.["Security camera"] || false,
    "On-site staff": spaceListDetails?.features?.["On-site staff"] || false,
    "Underground parking":
      spaceListDetails?.features?.["Underground parking"] || false,
    "Disabled access": spaceListDetails?.features?.["Disabled access"] || false,
    "Electric charging":
      spaceListDetails?.features?.["Electric charging"] || false,
  });
  const [type, setType] = useState(spaceListDetails?.type || "");
  const [selectedDays, setSelectedDays] = useState({
    Sun: spaceListDetails?.selectedDays?.Sun || false,
    Mon: spaceListDetails?.selectedDays?.Mon || false,
    Tues: spaceListDetails?.selectedDays?.Tues || false,
    Weds: spaceListDetails?.selectedDays?.Weds || false,
    Thurs: spaceListDetails?.selectedDays?.Thurs || false,
    Fri: spaceListDetails?.selectedDays?.Fri || false,
    Sat: spaceListDetails?.selectedDays?.Sat || false,
  });
  const [price, setPrice] = useState(spaceListDetails?.price || "");
  const [photos, setPhotos] = useState<string[]>(
    spaceListDetails?.photos || []
  );

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

  const { mutate: editSpaceList, isPending } = useEditSpaceListAPI();
  const { enqueueSnackbar } = useSnackbar();

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (photos.length === 0) {
      enqueueSnackbar("Please add at least one photo.", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
      return;
    }

    const updatedData: TListYourSpace = {
      addressLine,
      coordinates,
      features,
      type,
      selectedDays,
      price,
      photos,
    };

    if (id) {
      editSpaceList({ id, updatedData });
    }
  };

  return (
    <Box sx={{ width: "100%", padding: "30px" }}>
      <SpaceHeader />

      <Box>{renderStepContent(activeStep)}</Box>

      <SpaceButtons
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        onSubmit={submitHandler}
        isPending={isPending}
      />
    </Box>
  );
}
