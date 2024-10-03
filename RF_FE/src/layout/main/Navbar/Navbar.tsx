import { useState } from "react";

// MUI
import { Drawer } from "@mui/material";

// Components
import DrawerList from "./DrawerList";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile */}
      <NavbarMobile open={open} setOpen={setOpen} />

      {/* Desktop */}
      <NavbarDesktop />

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen((prev) => !prev)}
        transitionDuration={{
          enter: 300,
          exit: 300,
        }}
        keepMounted
        sx={{ zIndex: 1200 }}
      >
        <DrawerList handleClose={() => setOpen((prev) => !prev)} />
      </Drawer>
    </>
  );
}
