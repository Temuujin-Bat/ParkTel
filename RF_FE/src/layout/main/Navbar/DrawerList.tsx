// MUI
import { AccountCircle } from "@mui/icons-material";
import { Link, Typography, Box, List } from "@mui/material";

// Components
import { useAuth } from "../../../hooks/useAuth";

export default function DrawerList({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        height: "100%",
        padding: "20px",
        width: "80vw",
        backgroundColor: "#F2F2F2",
        mt: "50px",
        [theme.breakpoints.down(400)]: {
          width: "100vw",
        },
      })}
      onClick={() => setOpen((prev) => !prev)}
    >
      <List>
        {["The Drawer Is Under Development"].map((text) => (
          <Link key={text} underline="none" sx={{ display: "flex" }}>
            <Typography>{text}</Typography>
          </Link>
        ))}
      </List>

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
