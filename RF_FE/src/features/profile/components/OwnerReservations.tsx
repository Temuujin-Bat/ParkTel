// MUI
import { Container } from "@mui/material";

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
    <Container maxWidth="lg" sx={{ mt: "20px" }}>
      <OwnerReservationsLinks />

      <Outlet />

      {isOnSpaceOwnerPage && <OwnerReservationsActive />}
    </Container>
  );
}
