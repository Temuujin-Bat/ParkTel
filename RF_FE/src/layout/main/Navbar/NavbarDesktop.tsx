// Components
import NavbarList from "./NavbarList";

// MUI
import { Link, Typography, Box } from "@mui/material";

export default function NavbarDesktop() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "flex",
          md: "flex",
          lg: "flex",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Link
        href="/"
        sx={{ height: "40px", display: "flex", alignItems: "center" }}
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

      {/* Navbar List */}
      <NavbarList />
    </Box>
  );
}
