// MUI
import { Card, CardContent, Stack, Divider, Skeleton } from "@mui/material";

export default function SpacesGridSkeleton() {
  return (
    <>
      {Array.from(new Array(5)).map((_, id) => (
        <Card
          key={id}
          sx={{
            marginBottom: "20px",
            display: "flex",
            width: "100%",
          }}
        >
          <Skeleton
            variant="rectangular"
            sx={{ width: "30%", height: "140px" }}
          />
          <CardContent
            sx={{
              height: "140px",
              width: "70%",
              position: "relative",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                mb: "10px",
              }}
            >
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="30%" />
            </Stack>

            <Divider sx={{ borderTop: "1px solid #cdd9e1" }} />

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                mt: "15px",
              }}
            >
              <Skeleton variant="text" width="20%" />
              <Skeleton variant="text" width="20%" />
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                position: "absolute",
                bottom: "0",
                left: "0",
              }}
            >
              <Skeleton
                variant="rectangular"
                sx={{ width: "50%", height: "30px" }}
              />
              <Skeleton
                variant="rectangular"
                sx={{ width: "50%", height: "30px" }}
              />
            </Stack>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
