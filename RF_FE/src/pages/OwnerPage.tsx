import { useState } from "react";

// MUI
import { Box, Container } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Components
import { OwnerLinks, OwnerListing, OwnerOrDriver } from "../features/profile";

export default function OwnerPage() {
  const location = useLocation();
  const isOnSpaceOwnerPage = location.pathname === "/space-owner";
  const isOnEditSpace = /\/space-owner\/edit\/[^/]+$/.test(location.pathname);

  const [userRole, setUserRole] = useState(() => {
    if (location.pathname.startsWith("/space-owner")) {
      return "owner";
    } else if (location.pathname.startsWith("/driver")) {
      return "driver";
    }
    return "owner";
  });

  return (
    <Container maxWidth="lg">
      <OwnerOrDriver userRole={userRole} setUserRole={setUserRole} />

      <Box sx={{ display: "flex" }}>
        {!isOnEditSpace && <OwnerLinks />}

        <Outlet />

        {isOnSpaceOwnerPage && <OwnerListing />}
      </Box>
    </Container>
  );
}
