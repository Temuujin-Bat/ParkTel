// MUI
import { LocalParking, AccountCircle } from "@mui/icons-material";
import { Link, Typography, Box, Divider } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth";

export default function NavbarList() {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: "flex" }}>
      {isLoggedIn() ? (
        <Link
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "3px 5px",
            borderRadius: "2px",
            mr: "10px",
            border: "1px solid #2dc98a",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#2dc98a",
              ".MuiSvgIcon-root": {
                color: "#FFF",
              },
            },
          }}
          href="/register"
        >
          <AccountCircle sx={{ color: "#2dc98a", mr: "5px" }} />
          <Typography variant="subtitle2" sx={{ color: "#FFFFFF" }}>
            My Account
          </Typography>
        </Link>
      ) : (
        <>
          <Link
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "3px 5px",
              borderRadius: "2px",
              mr: "10px",
              "&:hover": {
                cursor: "pointer",
                "& .loginTypography": {
                  textDecoration: "underline",
                  color: "#2dc98a",
                },
              },
            }}
            href="/login"
          >
            <AccountCircle sx={{ color: "#2dc98a", mr: "5px" }} />
            <Typography
              className="loginTypography"
              variant="subtitle2"
              sx={{ color: "#FFF" }}
            >
              Log In
            </Typography>
          </Link>

          <Link
            underline="none"
            sx={{
              backgroundColor: "#2dc98a",
              display: "flex",
              alignItems: "center",
              padding: "3px 5px",
              borderRadius: "2px",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#22a270",
              },
            }}
            href="/register"
          >
            <Typography variant="subtitle2" sx={{ color: "#101921" }}>
              Sign Up
            </Typography>
          </Link>

          <Divider
            orientation="vertical"
            sx={{
              height: "auto",
              mx: "15px",
              borderColor: "#2dc98a",
            }}
          />
        </>
      )}

      <Link
        underline="none"
        sx={{
          backgroundColor: "#FFF",
          display: "flex",
          alignItems: "center",
          padding: "3px 5px",
          borderRadius: "2px",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#F2F2F2",
          },
        }}
      >
        <LocalParking
          sx={{
            backgroundColor: "#2dc98a",
            color: "#FFF",
            fontSize: "1em",
            mr: "5px",
          }}
        />

        <Typography variant="subtitle2" sx={{ color: "#000000" }}>
          List Your Space
        </Typography>
      </Link>
    </Box>
  );
}
