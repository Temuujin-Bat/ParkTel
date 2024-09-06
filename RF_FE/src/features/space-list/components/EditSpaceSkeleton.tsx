// MUI
import { Box, Skeleton, Stack } from "@mui/material";

export default function EditSpaceSkeleton() {
  return (
    <Box sx={{ width: "100%", padding: "30px" }}>
      <Skeleton variant="text" width="90%" sx={{ height: "80px" }} />
      <Skeleton
        variant="text"
        width="23%"
        sx={{ height: "20px", mb: "10px" }}
      />
      <Skeleton
        variant="text"
        width="13%"
        sx={{ height: "20px", mb: "20px" }}
      />
      <Skeleton variant="text" width="49%" height={"100%"} />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "86px",
        }}
      >
        <Skeleton variant="text" width="49%" height={"100%"} />
        <Skeleton variant="text" width="49%" height={"100%"} />
      </Stack>

      <Skeleton
        variant="rectangular"
        width="100%"
        height={56}
        sx={{ marginTop: "10px" }}
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mt: "30px",
        }}
      >
        <Skeleton variant="text" width="10%" sx={{ height: "80px" }} />
        <Skeleton variant="text" width="30%" sx={{ height: "80px" }} />
      </Stack>
    </Box>
  );
}
