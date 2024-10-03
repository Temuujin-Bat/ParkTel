// MUI
import { Box, Link, Skeleton, Stack, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";

// Hooks
import { useGetProfileAPI } from "../../../hooks/api/useGetProfile";
import { useLogoutAPI } from "../../../hooks/api/useLogout";

export default function BookSpaceDetails() {
  const { data: userDetails, isPending } = useGetProfileAPI();
  const { mutate: logout } = useLogoutAPI();

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
        <Person sx={{ border: "3px solid #2dc98a", mr: "10px" }} />
        <Typography variant="h4">Your details</Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "30px",
          paddingBottom: "10px",
          borderBottom: "1px solid #adbfca",
        }}
      >
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ color: "#4A697C" }} variant="body2">
            Email:{" "}
          </Typography>
          {!isPending ? (
            <Typography variant="subtitle2">
              &nbsp;{userDetails.email}
            </Typography>
          ) : (
            <Skeleton variant="text" sx={{ width: "140px" }} />
          )}
        </Stack>

        <Link
          underline="none"
          sx={{
            backgroundColor: "#e8eff3",
            padding: "5px",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#f8f9fa",
              "& .MuiTypography-root": {
                color: "#212529",
              },
            },
          }}
          onClick={() => logout()}
        >
          <Typography variant="subtitle2" sx={{ color: "#4a697c" }}>
            Log Out
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "30px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #adbfca",
            paddingBottom: "10px",
          }}
        >
          <Typography sx={{ color: "#4A697C" }} variant="body2">
            First Name:
          </Typography>
          {!isPending ? (
            <Typography sx={{ color: "#4A697C" }} variant="subtitle2">
              {userDetails.firstName}
            </Typography>
          ) : (
            <Skeleton variant="text" width={100} />
          )}
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #adbfca",
            paddingBottom: "10px",
            mt: "10px",
          }}
        >
          <Typography sx={{ color: "#4A697C" }} variant="body2">
            Last Name:
          </Typography>
          {!isPending ? (
            <Typography sx={{ color: "#4A697C" }} variant="subtitle2">
              {userDetails.lastName}
            </Typography>
          ) : (
            <Skeleton variant="text" width={100} />
          )}
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "10px",
          }}
        >
          <Typography sx={{ color: "#4A697C" }} variant="body2">
            Mobile number:
          </Typography>
          {!isPending ? (
            <Typography sx={{ color: "#4A697C" }} variant="subtitle2">
              {userDetails.mobile}
            </Typography>
          ) : (
            <Skeleton variant="text" width={120} />
          )}
        </Stack>
      </Box>
    </>
  );
}
