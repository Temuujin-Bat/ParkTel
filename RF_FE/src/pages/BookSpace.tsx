import { useState } from "react";

// Third party
import { useParams } from "react-router-dom";

// MUI
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components
import {
  BookSpaceButton,
  BookSpaceCheckout,
  BookSpaceDetails,
  BookSpaceSession,
  BookSpaceVehicle,
} from "../features/book-space";
import { getSingleSpaceSpaceList } from "../store/spaceList/selectors";

// Hooks
import { useAppSelector } from "../hooks/useAppStore";
import { useGetUserSingleSpaceListAPI } from "../hooks/api/useGetSingleSpaceList";

export default function BookSpace() {
  const { id } = useParams();
  const [enterAfter, setEnterAfter] = useState("");
  const [exitBefore, setExitBefore] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleError, setVehicleError] = useState(false);

  const { isPending } = useGetUserSingleSpaceListAPI(id ? id : "");

  const singleList = useAppSelector(getSingleSpaceSpaceList);

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        {/* Your parking session */}
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            mt: "40px",
            border: "1px solid #adbfca",
            borderTop: "3px solid #2dc98a",
          }}
        >
          <BookSpaceSession
            enterAfter={enterAfter}
            setEnterAfter={setEnterAfter}
            exitBefore={exitBefore}
            setExitBefore={setExitBefore}
            singleList={singleList}
          />
        </Grid>
        {/* Your details */}
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            mt: "20px",
            border: "1px solid #adbfca",
            borderTop: "3px solid #2dc98a",
          }}
        >
          <BookSpaceDetails />
        </Grid>
        {/* Your vehicle */}
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            mt: "20px",
            border: "1px solid #adbfca",
            borderTop: "3px solid #2dc98a",
          }}
        >
          <BookSpaceVehicle
            vehicleNumber={vehicleNumber}
            setVehicleNumber={setVehicleNumber}
            vehicleError={vehicleError}
            setVehicleError={setVehicleError}
          />
        </Grid>
        {/* Checkout */}
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            mt: "20px",
            border: "1px solid #adbfca",
            borderTop: "3px solid #2dc98a",
          }}
        >
          <BookSpaceCheckout singleList={singleList} />
        </Grid>

        {/* Button */}
        <Grid xs={12} sm={12} md={12} lg={12}>
          <BookSpaceButton
            vehicleNumber={vehicleNumber}
            singleList={singleList}
            enterAfter={enterAfter}
            exitBefore={exitBefore}
            vehicleError={vehicleError}
            setVehicleError={setVehicleError}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
