// Third Party
import { Outlet } from "react-router-dom";

// MUI
import { styled } from "@mui/system";
import { Box, Toolbar } from "@mui/material";

// Components
import { ApplicationBar } from "./Navbar";

const MainStyled = styled("main")(() => ({
  width: "100%",
}));

const MainLayout = () => (
  <Box height="100%" display="flex">
    <ApplicationBar />
    <MainStyled>
      <Toolbar />
      <Outlet />
    </MainStyled>
  </Box>
);

export { MainLayout };
