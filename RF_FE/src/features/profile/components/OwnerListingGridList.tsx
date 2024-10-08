// Third party
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

// MUI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// Components
import { getUserSpaceList } from "../../../store/spaceList/selectors";

// Hooks
import { useDeleteUserSpaceListAPI } from "../../../hooks/api/useDeleteUserSpaceList";
import { useAppSelector } from "../../../hooks/useAppStore";

export default function OwnerListingGridList() {
  const navigate = useNavigate();
  const myListings = useAppSelector(getUserSpaceList);

  const { mutate: deleteSpaceList } = useDeleteUserSpaceListAPI();

  const deleteHandler = (id: string) => {
    deleteSpaceList(id);
  };

  return (
    <Grid container spacing={1}>
      {myListings.map((listing, index) => (
        <Grid key={index} container spacing={1} xs={12} sm={12} md={12} lg={12}>
          <Grid
            xs={12}
            sm={4}
            md={5}
            lg={5}
            sx={{ mb: { xs: "0px", sm: "20px", md: "20px", lg: "20px" } }}
          >
            <Box
              sx={{
                height: {
                  xs: "300px",
                  sm: "240px",
                  md: "250px",
                  lg: "250px",
                },
                border: "1px solid #979797",
                overflow: "hidden",
                backgroundColor: "#f2f2f2",
                borderRadius: "5px",
              }}
            >
              <Stack
                sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                component={"img"}
                src={listing?.photos![0]}
              />
            </Box>
          </Grid>

          <Grid
            xs={12}
            sm={8}
            md={7}
            lg={7}
            sx={{ mb: { xs: "50px", sm: "30px", md: "20px", lg: "20px" } }}
          >
            <Box
              sx={{
                height: {
                  xs: "300px",
                  sm: "240px",
                  md: "250px",
                  lg: "250px",
                },
                padding: "20px",
                border: "1px solid #979797",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "5px",
              }}
            >
              <Stack sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h4">
                  Parking on {listing.addressLine}, Tel Aviv
                </Typography>
              </Stack>

              <Box>
                <Stack
                  sx={{
                    width: "100%",
                    backgroundImage:
                      "linear-gradient(to right, #2dc98a, #1b6e54)",
                    height: "10px",
                    borderRadius: "20px",
                  }}
                />

                <Stack
                  sx={{
                    mt: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                  }}
                >
                  <Typography variant="subtitle2">
                    You're 100% done with your listing
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    mb: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                  }}
                >
                  <Typography variant="body2" sx={{ color: "#b7b7b9" }}>
                    Last updated on{" "}
                    {format(
                      new Date(listing.updatedAt ?? new Date()),
                      "do MMMM yyyy"
                    )}
                  </Typography>
                </Stack>
              </Box>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <LoadingButton
                  sx={{
                    backgroundColor: "#2dc98a ",
                    borderRadius: "3px",
                    flex: 1,
                    textAlign: "center",
                    height: "35px",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#22a270",
                    },
                  }}
                  onClick={() => navigate(`/space-owner/edit/${listing?._id}`)}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#FFF", padding: "5px 12px" }}
                  >
                    Edit
                  </Typography>
                </LoadingButton>
                <LoadingButton
                  sx={{
                    border: "1px solid #4a555e",
                    borderRadius: "3px",
                    flex: 1,
                    textAlign: "center",
                    height: "35px",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f2f2f2",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#4a555e",
                      padding: "5px 12px",
                    }}
                  >
                    Preview
                  </Typography>
                </LoadingButton>

                <LoadingButton
                  sx={{
                    border: "1px solid #b14646",
                    borderRadius: "3px",
                    flex: 1,
                    textAlign: "center",
                    height: "35px",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f2f2f2",
                    },
                  }}
                  onClick={() => {
                    if (listing?._id) {
                      deleteHandler(listing._id);
                    }
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#b14646", padding: "5px 12px" }}
                  >
                    Delete
                  </Typography>
                </LoadingButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
