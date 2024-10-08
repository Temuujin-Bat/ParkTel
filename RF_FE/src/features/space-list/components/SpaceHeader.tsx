import { Box, Typography, Divider } from "@mui/material";

export default function SpaceHeader() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Hi, Temujin! Let's get you ready to become a space owner.
      </Typography>

      <Typography sx={{ color: "#C0C0C0", fontWeight: "bold" }}>
        Only few steps
      </Typography>

      <Divider
        sx={{
          mb: "30px",
          mt: "20px",
          color: "#C0C0C0",
          borderBottomWidth: "4px",
          width: "60px",
        }}
      />
    </Box>
  );
}
