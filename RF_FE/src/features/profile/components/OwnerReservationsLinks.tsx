// MUI
import { Box, Container, Link, Typography } from "@mui/material";

export default function OwnerReservationsLinks() {
  const links = [
    { name: "Active Reservations", url: "/space-owner/your-reservations" },
    {
      name: "Completed Reservations",
      url: "/space-owner/your-reservations/completed",
    },
    {
      name: "Cancelled Reservations",
      url: "/space-owner/your-reservations/cancelled",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {links.map((link, index) => (
          <Link key={index} underline="none" href={link.url}>
            <Typography
              variant="subtitle2"
              sx={{
                color: location.pathname === link.url ? "#36383e" : "#a4a5a8",
                backgroundColor:
                  location.pathname === link.url ? "#f0f0f0" : "",
                padding:
                  location.pathname === link.url ? "10px 20px" : "10px 20px",
                borderRadius: "4px",
                "&:hover": { color: "#36383e" },
              }}
            >
              {link.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
