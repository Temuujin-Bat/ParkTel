import { useCallback, useMemo, useState } from "react";

// MUI
import { Box, Typography } from "@mui/material";

// Hooks
import { useAddSpaceListAPI } from "../../../hooks/api/useAddSpaceList";

// Third party
import { useSnackbar } from "notistack";

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
  const { formData, updateField } = useSpaceForm();
  const { mutate: addSpaceList, isPending } = useAddSpaceListAPI(setActiveStep);
  const { enqueueSnackbar } = useSnackbar();

  const steps = useMemo(
    () => [
      <SpaceAddress
        addressLine={formData.addressLine}
        setAddressLine={(val) => updateField("addressLine", val)}
      />,
      <SpaceMap
        coordinates={formData.coordinates}
        setCoordinates={(val) => updateField("coordinates", val)}
      />,
      <SpaceFeatures
        features={formData.features}
        setFeatures={(val) => updateField("features", val)}
      />,
      <SpaceType
        type={formData.type}
        setType={(val) => updateField("type", val)}
      />,
      <SpaceDayPicker
        selectedDays={formData.selectedDays}
        setSelectedDays={(val) => updateField("selectedDays", val)}
      />,
      <SpacePrice
        price={formData.price}
        setPrice={(val) => updateField("price", val)}
      />,
      <SpacePhotos
        photos={formData.photos}
        setPhotos={(val) => updateField("photos", val)}
      />,
    ],
    [formData, updateField]
  );

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (formData.photos.length === 0) {
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

    addSpaceList(formData);
  };

  return (
    <Box sx={{ width: "100%", padding: "30px" }}>
      <SpaceHeader />

      <Box>{steps[activeStep] || <Typography>Unknown step</Typography>}</Box>

      <SpaceButtons
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        onSubmit={submitHandler}
        isPending={isPending}
      />
    </Box>
  );
}

// Custom Hook for handling form state
function useSpaceForm() {
  const [formData, setFormData] = useState({
    addressLine: "",
    coordinates: { latitude: 32.0853, longitude: 34.7818 },
    features: {
      "Covered parking": false,
      "Security camera": false,
      "On-site staff": false,
      "Underground parking": false,
      "Disabled access": false,
      "Electric charging": false,
    },
    type: "",
    selectedDays: {
      Sun: false,
      Mon: false,
      Tues: false,
      Weds: false,
      Thurs: false,
      Fri: false,
      Sat: false,
    },
    price: "",
    photos: [] as string[],
  });

  const updateField = useCallback(
    <T extends keyof typeof formData>(
      field: T,
      value: React.SetStateAction<(typeof formData)[T]>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]:
          typeof value === "function"
            ? (
                value as (
                  prevState: (typeof formData)[T]
                ) => (typeof formData)[T]
              )(prev[field])
            : value,
      }));
    },
    []
  );

  return { formData, updateField };
}
