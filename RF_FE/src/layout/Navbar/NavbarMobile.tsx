// MUI
import { Close, DragHandle } from "@mui/icons-material";
import { Link, Typography, Box } from "@mui/material";

export default function NavbarMobile({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          sm: "none",
          md: "none",
          lg: "none",
        },
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        sx={{
          height: "40px",
          display: "flex",
          alignItems: "center",
        }}
        underline="none"
      >
        <Typography
          sx={{
            color: "#FFF",
            textTransform: "uppercase",
            border: "3.5px solid #2dc98a",
            padding: "0px 3px",
            mr: "5px",
          }}
          variant="h5"
        >
          Park
        </Typography>
        <Typography
          sx={{ color: "#FFF", textTransform: "uppercase", mr: "5px" }}
          variant="h5"
        >
          Tel
        </Typography>
        <Typography sx={{ color: "#2dc98a" }} variant="h5">
          .
        </Typography>
      </Link>

      <Link component={"button"} onClick={() => setOpen((prev) => !prev)}>
        {!open ? (
          <DragHandle
            sx={{
              color: "#2dc98a",
              border: "3.5px solid #78e2b8",
              display: "flex",
              fontSize: "1.5em",
              padding: "0px 4px",
              boxSizing: "content-box",
            }}
          />
        ) : (
          <Close
            sx={{
              color: "#2dc98a",
              border: "3.5px solid #78e2b8",
              display: "flex",
              fontSize: "1.5em",
              padding: "0px 4px",
              boxSizing: "content-box",
            }}
          />
        )}
      </Link>
    </Box>
  );
}
