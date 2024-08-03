import { ReactElement } from "react";

// MUI
import { Fade } from "@mui/material";

export default function PagesTransition({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <Fade in={true} timeout={500}>
      {children}
    </Fade>
  );
}
