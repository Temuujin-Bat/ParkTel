// MUI
import { Box } from "@mui/material";

// Components
import { useAuth } from "../../../hooks/useAuth";
import { useAppSelector } from "../../../hooks/useAppStore";
import { getUserDetails } from "../../../store/auth/selectors";
import { useLogout } from "../../../hooks/useLogout";
import DrawerListLinks from "./DrawerListLinks";
import DrawerListButtons from "./DrawerListButtons";

export default function DrawerList({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isLoggedIn } = useAuth();
  const userDetails = useAppSelector(getUserDetails);

  const { logoutHandler } = useLogout(setOpen);

  const links = [
    { name: "Your Listing", url: "/space-owner" },
    { name: "Your Reservations", url: "/space-owner/your-reservations" },
    { name: "Profile Settings", url: "/space-owner/profile-settings" },
    { name: "Change Password", url: "/space-owner/change-password" },
    { name: "Log Out", action: logoutHandler },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        padding: "20px",
        backgroundColor: "#F2F2F2",
        mt: "50px",
        width: {
          xs: "100vw",
          sm: "60vw",
        },
      }}
      onClick={() => setOpen((prev) => !prev)}
    >
      {userDetails && userDetails.role === "owner" && (
        <DrawerListLinks links={links} />
      )}

      <DrawerListButtons isLoggedIn={isLoggedIn} />
    </Box>
  );
}
