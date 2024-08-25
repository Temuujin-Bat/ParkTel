// MUI
import { Box, Link, Slide, Typography } from "@mui/material";

// Third party
import { useLocation } from "react-router-dom";

const links = [
  { name: "Your Listing", url: "/space-owner" },
  { name: "Your Reservations", url: "/space-owner/your-reservations" },
  { name: "Profile Settings", url: "/space-owner/profile-settings" },
  { name: "Change Password", url: "/space-owner/change-password" },
  { name: "Log Out", url: "log-out" },
];

export default function OwnerLinks() {
  const location = useLocation();

  return (
    <Slide in={true} timeout={600} direction="right">
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          flexDirection: "column",
          width: "30%",
          mt: "30px",
        }}
      >
        {links.map((link, index) => (
          <Link key={index} underline="none" href={link?.url}>
            <Typography
              variant="subtitle1"
              sx={{
                color: location.pathname === link.url ? "#36383e" : "#a4a5a8",
                lineHeight: "2.5em",
                "&:hover": { color: "#36383e" },
              }}
            >
              {link?.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Slide>
  );
}

// #a4a5a8
// #36383e
