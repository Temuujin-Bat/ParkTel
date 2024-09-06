import { useState } from "react";

// MUI
import { Box, Container } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Components
import {
  DriverActiveBooking,
  DriverLinks,
  OwnerOrDriver,
} from "../features/profile";

export default function DriverPage() {
  const location = useLocation();
  const isOnDriverPage = location.pathname === "/driver";

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
        <DriverLinks />

        <Outlet />

        {isOnDriverPage && <DriverActiveBooking />}
      </Box>
    </Container>
  );
}
