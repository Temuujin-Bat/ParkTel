import { useState } from "react";

// MUI
import { Box, Container } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Components
import {
  DriverActiveBooking,
  OwnerLinks,
  OwnerOrDriver,
} from "../features/profile";

export default function DriverPage() {
  const location = useLocation();
  const isOnSpaceOwnerPage = location.pathname === "/driver";
  const isOnEditSpace = /\/driver\/edit\/[^/]+$/.test(location.pathname);

  const [userRole, setUserRole] = useState(() => {
    if (location.pathname.startsWith("/driver")) {
      return "driver";
    } else if (location.pathname.startsWith("/space-owner")) {
      return "owner";
    }
    return "driver";
  });

  return (
    <Container maxWidth="lg">
      <OwnerOrDriver userRole={userRole} setUserRole={setUserRole} />

      <Box sx={{ display: "flex" }}>
        {!isOnEditSpace && <OwnerLinks />}

        <Outlet />

        {isOnSpaceOwnerPage && <DriverActiveBooking />}
      </Box>
    </Container>
  );
}
