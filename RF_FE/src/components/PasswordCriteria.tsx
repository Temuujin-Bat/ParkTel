// MUI
import { Box, Typography, List, ListItem } from "@mui/material";
import { Circle } from "@mui/icons-material";

export default function PasswordCriteria() {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{ lineHeight: ".1em", fontSize: ".8em", mt: "20px", mb: "10px" }}
      >
        Passwords must:
      </Typography>
      <List>
        {["Be at least 8 characters long"].map((option, index) => (
          <ListItem key={index}>
            <Circle sx={{ fontSize: ".5em", mr: "10px" }} />
            <Typography
              variant="body2"
              sx={{ lineHeight: ".1em", fontSize: ".7em" }}
            >
              {option}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
