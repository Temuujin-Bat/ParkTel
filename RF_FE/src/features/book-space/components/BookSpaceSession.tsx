import { useEffect } from "react";

// MUI
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowForward, LocalParking } from "@mui/icons-material";

export default function BookSpaceSession({
  enterAfter,
  setEnterAfter,
  exitBefore,
  setExitBefore,
  singleList,
}) {
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    setEnterAfter(today.toLocaleString("en-GB", options));
    setExitBefore(tomorrow.toLocaleString("en-GB", options));
  }, []);

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <LocalParking sx={{ border: "3px solid #2dc98a", mr: "10px" }} />
        <Typography variant="h4">Your parking session</Typography>
        <Typography variant="h4" sx={{ color: "#2dc98a" }}>
          .
        </Typography>
      </Stack>
      <Box
        sx={{
          margin: "30px",
          border: "1px solid #2dc98a",
          borderRadius: "3px",
        }}
      >
        <Stack sx={{ backgroundColor: "#2dc98a", padding: "10px 20px" }}>
          <Typography variant="subtitle1" sx={{ color: "#FFF" }}>
            Booking details
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <Stack>
            <Typography sx={{ mb: "5px" }} variant="subtitle2">
              Enter after:
            </Typography>
            <Stack
              sx={{
                backgroundColor: "#f0fbf7",
                border: "1px solid #2dc98a",
                borderRadius: "3px",
                padding: "10px",
              }}
            >
              <Typography variant="subtitle2">{enterAfter}</Typography>
            </Stack>
          </Stack>

          <IconButton
            sx={{
              alignSelf: "center",
              mt: "20px",
            }}
          >
            <ArrowForward sx={{ color: "#2dc98a" }} />
          </IconButton>

          <Stack>
            <Typography sx={{ mb: "5px" }} variant="subtitle2">
              Exit before:
            </Typography>
            <Stack
              sx={{
                backgroundColor: "#f0fbf7",
                border: "1px solid #2dc98a",
                borderRadius: "3px",
                padding: "10px",
              }}
            >
              <Typography variant="subtitle2">{exitBefore}</Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            backgroundColor: "#f8f9fb",
          }}
        >
          <Stack
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "1px solid #adbfca",
              padding: "5px",
            }}
          >
            <Typography sx={{ color: "#4a697c" }} variant="body2">
              Duration
            </Typography>
            <Typography variant="subtitle2">24 hours</Typography>
          </Stack>

          <Stack
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "1px solid #adbfca",
              borderLeft: "1px solid #adbfca",
              padding: "5px",
            }}
          >
            <Typography sx={{ color: "#4a697c" }} variant="body2">
              Booking price
            </Typography>
            <Typography variant="subtitle2">{singleList?.price} nis</Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
