// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Skeleton } from "@mui/material";

export default function OwnerListingGridSkeleton() {
  return (
    <>
      {Array.from(new Array(3)).map((_, index) => (
        <Grid
          key={index}
          container
          spacing={1}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ mb: { xs: "20px", sm: "20px", md: "20px", lg: "20px" } }}
        >
          <Grid xs={12} sm={4} md={5} lg={5}>
            <Skeleton
              variant="rectangular"
              height="220px"
              sx={{ borderRadius: "5px" }}
            />
          </Grid>

          <Grid xs={12} sm={8} md={7} lg={7}>
            <Skeleton
              variant="rectangular"
              sx={{
                borderRadius: "5px",
                padding: "20px",
                height: { xs: "150px", sm: "220px", md: "220px", lg: "220px" },
              }}
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
}
