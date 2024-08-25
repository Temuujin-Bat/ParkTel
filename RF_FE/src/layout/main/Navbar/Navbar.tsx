import { useState } from "react";

// MUI
import { Drawer, useTheme, useMediaQuery } from "@mui/material";

// Components
import DrawerList from "./DrawerList";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Mobile */}
      <NavbarMobile open={open} setOpen={setOpen} />

      {/* Desktop */}
      <NavbarDesktop />

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={!isSmUp && open}
        onClose={handleClose}
        transitionDuration={{
          enter: 500,
          exit: 300,
        }}
        sx={{ zIndex: 1200 }}
      >
        <DrawerList handleClose={handleClose} />
      </Drawer>
    </>
  );
}
