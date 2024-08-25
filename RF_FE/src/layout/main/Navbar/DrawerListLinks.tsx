// MUI
import { Link, Typography, List } from "@mui/material";
import { TLinksType } from "./types";

export default function DrawerListLinks({ links }: TLinksType) {
  return (
    <List
      sx={{
        display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
        flexDirection: "column",
        mt: "30px",
      }}
    >
      {links.map((link, index) =>
        link.action ? (
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
        ) : (
          <Link key={index} underline="none" href={link.url}>
            <Typography
              variant="subtitle1"
              sx={{
                color: location.pathname === link.url ? "#36383e" : "#a4a5a8",
                lineHeight: "2.5em",
                "&:hover": { color: "#36383e" },
              }}
            >
              {link.name}
            </Typography>
          </Link>
        )
      )}
    </List>
  );
}
