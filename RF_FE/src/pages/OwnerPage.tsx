// MUI
import { Box, Container } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Components
import { OwnerLinks, OwnerListing } from "../features/profile";
import { useGetUserSpaceListAPI } from "../hooks/api/useGetUserSpaceList";
import LoadingMUI from "../components/LoadingMUI";

export default function OwnerPage() {
  const location = useLocation();
  const isOnSpaceOwnerPage = location.pathname === "/space-owner";
  const isOnEditSpace = /\/space-owner\/edit\/[^\/]+$/.test(location.pathname);

  const { isPending } = useGetUserSpaceListAPI();

  return (
    <>
      {isPending ? (
        <LoadingMUI />
      ) : (
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", mt: "30px" }}>
            {!isOnEditSpace && <OwnerLinks />}

            <Outlet />

            {isOnSpaceOwnerPage && <OwnerListing />}
          </Box>
        </Container>
      )}
    </>
  );
}
