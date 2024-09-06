// MUI
import { Box, Skeleton } from "@mui/material";

export default function ProfileSettingsSkeleton() {
  return (
    <Box
      sx={{
        mt: "30px",
        border: "1px solid #d3d3d3",
        borderRadius: "5px",
        padding: "20px 30px",
      }}
    >
      <Skeleton variant="text" width={210} height={40} />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={40}
        sx={{ mt: "20px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={40}
        sx={{ mt: "20px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={40}
        sx={{ mt: "50px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={40}
        sx={{ mt: "20px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={46}
        sx={{ mt: "20px" }}
      />
    </Box>
  );
}
