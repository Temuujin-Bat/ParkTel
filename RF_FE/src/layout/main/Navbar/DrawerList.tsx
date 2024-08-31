import { useState } from "react";

// MUI
import { Box, Stack } from "@mui/material";

// Components
import { useAuth } from "../../../hooks/useAuth";
import { useLogout } from "../../../hooks/useLogout";
import DrawerListLinks from "./DrawerListLinks";
import DrawerListButtons from "./DrawerListButtons";
import DrawerListOwnerDriver from "./DrawerListOwnerDriver";
import { useGetProfileAPI } from "../../../hooks/api/useGetProfile";
import LoadingMUI from "../../../components/LoadingMUI";
import { TUserRole } from "./types";

// Third party
import { useLocation } from "react-router-dom";

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

  const { isLoggedIn } = useAuth();
  const { isPending } = useGetProfileAPI();

  const { logoutHandler } = useLogout(handleClose);

  const ownerLinks = [
    { name: "Your Listing", url: "/space-owner" },
    { name: "Your Reservations", url: "/space-owner/your-reservations" },
    { name: "Profile Settings", url: "/space-owner/profile-settings" },
    { name: "Change Password", url: "/space-owner/change-password" },
    { name: "Log Out", action: logoutHandler },
  ];

  const driverLinks = [
    { name: "Active Bookings", url: "/driver" },
    { name: "Past Bookings", url: "/driver/past-bookings" },
    { name: "Profile Settings", url: "/driver/profile-settings" },
    { name: "Change Password", url: "/driver/change-password" },
    { name: "Log Out", action: logoutHandler },
  ];

  return (
    <>
      {isPending ? (
        <LoadingMUI />
      ) : (
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
          <DrawerListOwnerDriver
            userRole={userRole}
            setUserRole={setUserRole}
          />

          <Stack sx={{ borderBottom: "1px solid #979797", mt: "20px" }} />

          {userRole === "owner" ? (
            <DrawerListLinks links={ownerLinks} />
          ) : userRole === "driver" ? (
            <DrawerListLinks links={driverLinks} />
          ) : (
            <div>Not Found (Typo)</div>
          )}

          <DrawerListButtons isLoggedIn={isLoggedIn} />
        </Box>
      )}
    </>
  );
}
