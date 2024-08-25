// MUI
import { Box, Container } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Components
import { DriverActiveBooking, OwnerLinks } from "../features/profile";

export default function DriverPage() {
  const location = useLocation();
  const isOnSpaceOwnerPage = location.pathname === "/driver";
  const isOnEditSpace = /\/driver\/edit\/[^\/]+$/.test(location.pathname);

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex" }}>
        {!isOnEditSpace && <OwnerLinks />}

        <Outlet />

        {isOnSpaceOwnerPage && <DriverActiveBooking />}
      </Box>
    </Container>
  );
}
