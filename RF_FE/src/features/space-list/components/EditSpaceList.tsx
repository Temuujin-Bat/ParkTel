// MUI
import { Box, Container, Fade, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components
import OwnerEditSteps from "./EditSpaceListSteps";
import { useGetUserSingleSpaceListAPI } from "../../../hooks/api/useGetSingleSpaceList";

// Third party
import { useParams } from "react-router-dom";
import EditSpaceSkeleton from "./EditSpaceSkeleton";

export default function EditSpaceList() {
  const { id } = useParams<{ id: string }>();

  const { isPending } = useGetUserSingleSpaceListAPI(id as string);

  return (
    <Fade in={true} timeout={500}>
      <Container maxWidth={"lg"}>
        <Grid container sx={{ position: "relative" }}>
          <Grid xs={12} sm={9} md={9} lg={9}>
            {isPending ? <EditSpaceSkeleton /> : <OwnerEditSteps />}
          </Grid>

          <Grid xs={0} sm={3} md={3} lg={3}>
            <Box
              sx={{
                width: "100%",
                height: "90vh",
                backgroundColor: "#2dc98a",
                mt: "30px",
              }}
            />
          </Grid>

          <Stack
            sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              position: "absolute",
              bottom: "-15px",
              right: "150px",
              width: "250px",
            }}
          >
            <Stack component={"img"} />
          </Stack>
        </Grid>
      </Container>
    </Fade>
  );
  3;
}
