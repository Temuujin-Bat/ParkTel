// MUI
import { AppBar, Toolbar } from "@mui/material";

// Components
import Navbar from "./Navbar";

const ApplicationBar = () => (
  <AppBar position="fixed" sx={{ backgroundColor: "#101921", zIndex: 1201 }}>
    <Toolbar>
      <Navbar />
    </Toolbar>
  </AppBar>
);

export { ApplicationBar };
