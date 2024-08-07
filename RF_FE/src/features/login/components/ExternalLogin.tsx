// MUI
import { Google, Facebook, Apple } from "@mui/icons-material";
import { Box, Link, Stack, Typography } from "@mui/material";

export default function ExternalLogin() {
  return (
    <Box>
      {[
        {
          label: "Log in with Google",
          icon: <Google sx={{ color: "#4285F4" }} />,
        },
        {
          label: "Log in with Facebook",
          icon: <Facebook sx={{ color: "#3b5998" }} />,
        },
        {
          label: "Log in with Apple",
          icon: <Apple sx={{ color: "#000000" }} />,
        },
      ].map((option) => (
        <Link underline="none" key={option.label}>
          <Stack
            sx={{
              width: "100%",
              border: "1px solid #2dc98a ",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              padding: "10px 20px",
              borderRadius: "5px",
              mb: "10px",
              "&:hover": {
                backgroundColor: "#F2F2F2",
                cursor: "help",
              },
            }}
          >
            {option.icon}
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Typography variant="subtitle2" color={"#000000"}>
                {option.label}
              </Typography>
            </Box>
          </Stack>
        </Link>
      ))}
    </Box>
  );
}
