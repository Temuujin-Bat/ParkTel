// MUI
import { Box, Typography, Stack, Link } from "@mui/material";
import { ArrowRightAlt, Map } from "@mui/icons-material";

export default function SpacesDialogOverview({ parkingSpots }) {
  return (
    <Box sx={{ padding: "0px 30px" }}>
      <Stack sx={{ width: "100%", height: "300px" }}>
        <Stack
          component={"img"}
          src={parkingSpots?.photos[0]}
          sx={{ height: "100%", objectFit: "contain" }}
        />
      </Stack>

      <Link
        sx={{
          mt: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          textDecoration: "underline",
          "&:hover": {
            cursor: "pointer",
            "& .typo": { color: "#2dc98a" },
            textDecoration: "underline",
            textDecorationColor: "#2dc98a",
          },
        }}
        href={`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${parkingSpots?.coordinates?.latitude},${parkingSpots?.coordinates?.longitude}`}
        target="_blank"
      >
        <Map sx={{ mr: "10px", color: "#2dc98a" }} />
        <Typography
          className="typo"
          variant="subtitle1"
          sx={{ color: "black" }}
        >
          Open Street View
        </Typography>
        <ArrowRightAlt sx={{ color: "black", ml: "10px" }} />
      </Link>
    </Box>
  );
}
