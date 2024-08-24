// MUI
import { AccountCircle } from "@mui/icons-material";
import { Link, Typography, Box } from "@mui/material";

export default function DrawerListButtons({
  isLoggedIn,
}: {
  isLoggedIn: () => boolean;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "0",
        bottom: "0",
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: "#FFF",
        padding: "20px 15px 30px 15px",
      }}
    >
      <Link
        underline="none"
        href="/list-your-space"
        sx={{
          width: "50%",
          backgroundColor: "#2dc98a",
          color: "#FFF",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          justifyContent: "center",
          flex: "1",
          mr: "25px",
          "&:hover": {
            backgroundColor: "#22a270",
          },
        }}
      >
        <Typography variant="subtitle2">List your Space</Typography>
      </Link>

      {isLoggedIn() ? (
        <Link
          underline="none"
          href="/space-owner"
          sx={{
            width: "50%",
            border: "1px solid #2dc98a",
            display: "flex",
            padding: "10px",
            alignItems: "center",
            justifyContent: "center",
            flex: "1",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#2dc98a",
              "& .loginLogo": {
                color: "#FFF",
              },
              "& .loginTypo": {
                color: "#FFF",
              },
            },
          }}
        >
          <AccountCircle
            className="loginLogo"
            sx={{ color: "#2dc98a", mr: "5px" }}
          />
          <Typography
            className="loginTypo"
            variant="subtitle2"
            sx={{ color: "#2dc98a" }}
          >
            My Account
          </Typography>
        </Link>
      ) : (
        <Link
          underline="none"
          href="/login"
          sx={{
            width: "50%",
            border: "1px solid #2dc98a",
            display: "flex",
            padding: "10px",
            alignItems: "center",
            justifyContent: "center",
            flex: "1",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#2dc98a",
              "& .loginLogo": {
                color: "#FFF",
              },
              "& .loginTypo": {
                color: "#FFF",
              },
            },
          }}
        >
          <AccountCircle
            className="loginLogo"
            sx={{ color: "#2dc98a", mr: "5px" }}
          />
          <Typography
            className="loginTypo"
            variant="subtitle2"
            sx={{ color: "#2dc98a" }}
          >
            Log in
          </Typography>
        </Link>
      )}
    </Box>
  );
}
