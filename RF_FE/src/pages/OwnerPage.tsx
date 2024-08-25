// MUI
import { Box, Container } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Components
import { OwnerLinks, OwnerListing } from "../features/profile";

export default function OwnerPage() {
  const location = useLocation();
  const isOnSpaceOwnerPage = location.pathname === "/space-owner";
  const isOnEditSpace = /\/space-owner\/edit\/[^\/]+$/.test(location.pathname);

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex" }}>
        {!isOnEditSpace && <OwnerLinks />}

        <Outlet />

        {isOnSpaceOwnerPage && <OwnerListing />}
      </Box>
    </Container>
  );
}
