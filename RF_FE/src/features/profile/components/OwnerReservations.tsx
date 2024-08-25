// MUI
import { Container, Fade } from "@mui/material";

// Components
import OwnerReservationsLinks from "./OwnerReservationsLinks";
import OwnerReservationsActive from "./OwnerReservationsActive";

// Third party
import { Outlet, useLocation } from "react-router-dom";

export default function OwnerReservations() {
  const location = useLocation();
  const isOnSpaceOwnerPage =
    location.pathname === "/space-owner/your-reservations";

  return (
    <Fade in={true} timeout={500}>
      <Container maxWidth="lg" sx={{ mt: "30px" }}>
        <OwnerReservationsLinks />

        <Outlet />

        {isOnSpaceOwnerPage && <OwnerReservationsActive />}
      </Container>
    </Fade>
  );
}
