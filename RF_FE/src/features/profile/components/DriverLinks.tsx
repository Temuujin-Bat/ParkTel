// MUI
import { Box, Link, Slide, Typography } from "@mui/material";

// Third party
import { useLocation } from "react-router-dom";

// Hooks
import { useLogout } from "../../../hooks/useLogout";

export default function DriverLinks() {
  const location = useLocation();
  const { logoutHandler } = useLogout();

  const links = [
    { name: "Active Bookings", url: "/driver" },
    { name: "Past Bookings", url: "/driver/past-bookings" },
    { name: "Profile Settings", url: "/driver/profile-settings" },
    { name: "Change Password", url: "/driver/change-password" },
    { name: "Log Out", action: logoutHandler },
  ];

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
        {links.map((link, index) =>
          !link.action ? (
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
          ) : (
            <Typography
              key={index}
              variant="subtitle1"
              sx={{
                color: "#a4a5a8",
                lineHeight: "2.5em",
                cursor: "pointer",
                "&:hover": { color: "#36383e" },
              }}
              onClick={link.action}
            >
              {link.name}
            </Typography>
          )
        )}
      </Box>
    </Slide>
  );
}
