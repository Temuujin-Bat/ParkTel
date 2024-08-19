// MUI
import { AccountCircle } from "@mui/icons-material";
import { Link, Typography, Box, List } from "@mui/material";

// Components
import { useAuth } from "../../../hooks/useAuth";
import { useAppSelector } from "../../../hooks/useAppStore";
import { getUserDetails } from "../../../store/auth/selectors";

const links = [
  { name: "Your Listing", url: "/space-owner" },
  { name: "Your Reservations", url: "/space-owner/your-reservations" },
  { name: "Profile Settings", url: "/space-owner/profile-settings" },
  { name: "Change Password", url: "/space-owner/change-password" },
  { name: "Log Out", url: "log-out" },
];

export default function DrawerList({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isLoggedIn } = useAuth();
  const userDetails = useAppSelector(getUserDetails);

  if (!userDetails) {
    return <p>Loading...</p>; // Or some loading indicator
  }

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        height: "100%",
        padding: "20px",
        width: "80vw",
        backgroundColor: "#F2F2F2",
        mt: "50px",
        [theme.breakpoints.down("xs")]: {
          width: "100vw",
        },
        [theme.breakpoints.between("xs", "sm")]: {
          width: "100vw",
        },
        [theme.breakpoints.between("sm", "md")]: {
          width: "60vw",
        },
      })}
      onClick={() => setOpen((prev) => !prev)}
    >
      {userDetails && userDetails.role === "owner" && (
        <List
          sx={{
            display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
            flexDirection: "column",
            mt: "30px",
          }}
        >
          {links.map((link) => (
            <Link underline="none" href={link?.url}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: location.pathname === link.url ? "#36383e" : "#a4a5a8",
                  lineHeight: "2.5em",
                  "&:hover": { color: "#36383e" },
                }}
              >
                {link?.name}
              </Typography>
            </Link>
          ))}
        </List>
      )}

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
          href="#"
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
            href="#"
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
            href="#"
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
    </Box>
  );
}
