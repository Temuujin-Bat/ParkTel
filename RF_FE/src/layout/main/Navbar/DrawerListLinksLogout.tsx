// MUI
import { Link, Typography, List } from "@mui/material";

export default function DrawerListLinksLogout() {
  return (
    <List
      sx={{
        display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
        flexDirection: "column",
      }}
    >
      {links.map((link, index) => (
        <Link key={index} underline="none" href={link.url}>
          <Typography
            variant="h4"
            sx={{
              color: location.pathname === link.url ? "#36383e" : "#a4a5a8",
              lineHeight: "2.5em",
              "&:hover": { color: "#36383e" },
            }}
          >
            {link.name}
          </Typography>
        </Link>
      ))}
    </List>
  );
}

const links = [
  { name: "Home", url: "/" },
  { name: "Parking Spots", url: "/tel-aviv-spaces" },
  { name: "Login", url: "/login" },
  { name: "Register", url: "/register" },
];
