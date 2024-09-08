// MUI
import { Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// Hooks
import { useCreateBookingAPI } from "../../../hooks/api/useCreateBooking";

export default function BookSpaceButton({
  vehicleNumber,
  singleList,
  enterAfter,
  exitBefore,
  vehicleError,
  setVehicleError,
}) {
  const { mutate: createBooking, isPending } = useCreateBookingAPI();

  const handlePay = () => {
    if (!vehicleNumber) {
      setVehicleError(!vehicleError);
      return;
    }

    createBooking({
      id: singleList._id,
      vehicleNumber,
      enterAfter,
      exitBefore,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "30px -8px",
        mt: "30px",
      }}
    >
      <LoadingButton
        fullWidth
        variant="contained"
        sx={{
          borderRadius: "3px",
          padding: "10px",
          backgroundColor: "#2dc98a",
          "&:hover": {
            backgroundColor: "#22a270",
          },
        }}
        onClick={handlePay}
        loading={isPending}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#FFF", textAlign: "center" }}
        >
          Pay
        </Typography>
      </LoadingButton>
    </Box>
  );
}
