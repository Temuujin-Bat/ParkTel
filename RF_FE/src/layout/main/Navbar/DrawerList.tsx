import { useState } from "react";

// MUI
import { Box, Stack } from "@mui/material";

// Hooks
import { useAuth } from "../../../hooks/useAuth";
import { useLogoutAPI } from "../../../hooks/api/useLogout";

// Third party
import { useLocation } from "react-router-dom";

// Components
import DrawerListLinks from "./DrawerListLinks";
import DrawerListButtons from "./DrawerListButtons";
import DrawerListOwnerDriver from "./DrawerListOwnerDriver";
import DrawerListLinksLogout from "./DrawerListLinksLogout";
import { TUserRole } from "./types";

export default function DrawerList({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const location = useLocation();
  const [userRole, setUserRole] = useState<TUserRole>(() => {
    if (location.pathname.startsWith("/space-owner")) {
      return "owner";
    } else if (location.pathname.startsWith("/driver")) {
      return "driver";
    }
    return "owner";
  });

  const isLoggedIn = useAuth();

  const { mutate: logout } = useLogoutAPI();

  const ownerLinks = [
    { name: "Your Listing", url: "/space-owner" },
    { name: "Your Reservations", url: "/space-owner/your-reservations" },
    { name: "Profile Settings", url: "/space-owner/profile-settings" },
    { name: "Change Password", url: "/space-owner/change-password" },
    { name: "Log Out", action: () => logout() },
  ];

  const driverLinks = [
    { name: "Active Bookings", url: "/driver" },
    { name: "Profile Settings", url: "/driver/profile-settings" },
    { name: "Change Password", url: "/driver/change-password" },
    { name: "Log Out", action: () => logout() },
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
      onClick={handleClose}
    >
      {isLoggedIn && (
        <>
          <DrawerListOwnerDriver
            userRole={userRole}
            setUserRole={setUserRole}
          />
          <Stack sx={{ borderBottom: "1px solid #979797", mt: "20px" }} />
        </>
      )}

      {userRole === "owner" && isLoggedIn ? (
        <DrawerListLinks links={ownerLinks} />
      ) : userRole === "driver" && isLoggedIn ? (
        <DrawerListLinks links={driverLinks} />
      ) : (
        <DrawerListLinksLogout />
      )}

      <DrawerListButtons isLoggedIn={isLoggedIn} />
    </Box>
  );
}
