// MUI
import { Google, Facebook, Apple } from "@mui/icons-material";
import { Box, Link, Stack, Typography } from "@mui/material";

export default function ExternalRegister() {
  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {[
          {
            label: "Google",
            icon: <Google sx={{ color: "#4285F4" }} />,
          },
          {
            label: "Facebook",
            icon: <Facebook sx={{ color: "#3b5998" }} />,
          },
          {
            label: "Apple",
            icon: <Apple sx={{ color: "#000000" }} />,
          },
        ].map((option) => (
          <Link
            underline="none"
            key={option.label}
            sx={{
              width: "32%",
            }}
          >
            <Stack
              sx={{
                border: "1px solid #2dc98a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                padding: "10px 0px",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#F2F2F2",
                  cursor: "help",
                },
              }}
            >
              {option.icon}
              <Typography
                variant="subtitle2"
                sx={{ color: "#000000", ml: "5px" }}
              >
                {option.label}
              </Typography>
            </Stack>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
