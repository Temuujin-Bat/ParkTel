import React from "react";

// Third party
import { TransitionProps } from "notistack";

// MUI
import { Dialog, Slide, Box, Typography, Link } from "@mui/material";
import { Lock, Close } from "@mui/icons-material";

// Components
import { SpacesDialogHeader } from "../index";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SpacesDialog({ parkingSpots, open, setOpen }) {
  return (
    <Dialog
      sx={dialogStyles}
      fullScreen
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
      PaperProps={{ sx: paperStyles }}
    >
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #2dc98a",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1">
          {parkingSpots[0]?.addressLine}
        </Typography>

        <Close onClick={() => setOpen(false)} style={{ cursor: "pointer" }} />
      </Box>

      <SpacesDialogHeader parkingSpots={parkingSpots} />

      <Box
        sx={{
          padding: "15px 30px",
          backgroundColor: "#f8f9fb",
          borderTop: "1px solid #cdd9e1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          underline="none"
          sx={{
            backgroundColor: "#2dc98a",
            "&:hover": {
              backgroundColor: "#22a270",
              cursor: "pointer",
            },
            width: "100%",
            display: "flex",
            padding: "15px 0",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lock sx={{ mr: "10px", color: "#4a697c" }} />
          <Typography variant="subtitle2" sx={{ color: "#FFF" }}>
            Book now securely
          </Typography>
        </Link>
      </Box>
    </Dialog>
  );
}

const dialogStyles = {
  m: {
    xs: "60px 0px 0px 0px",
    sm: "100px 0px 0px 0px",
    md: "100px 0px 100px 0px",
    lg: "100px 0px 100px 0px",
  },
};

const paperStyles = {
  borderRadius: {
    xs: "15px 15px 0 0",
    sm: "15px 15px 0 0",
    md: "15px 15px 15px 15px",
  },
  display: "flex",
  flexDirection: "column",
  maxWidth: {
    xs: "100%",
    sm: "100%",
    md: "60%",
    lg: "42%",
  },
  width: "100%",
};
