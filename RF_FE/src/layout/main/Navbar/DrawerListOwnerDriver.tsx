// MUI
import { Box, Link, Typography } from "@mui/material";
import { DirectionsCar, HomeWork } from "@mui/icons-material";

// Third party
import { useNavigate } from "react-router-dom";

// Hooks
import { useEditProfileAPI } from "../../../hooks/api/useEditProfile";

// Components
import { TDrawerListOwnerDriverProps, TUserRole } from "./types";

export default function DrawerListOwnerDriver({
  userRole,
  setUserRole,
}: TDrawerListOwnerDriverProps) {
  const navigate = useNavigate();

  const { mutate: editRole } = useEditProfileAPI();

  const handleRoleChange = (role: TUserRole, url: string) => {
    setUserRole(role);
    editRole({ role });
    navigate(url);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        mt: "15px",
      }}
    >
      <Link
        onClick={() => handleRoleChange("owner", "/space-owner")}
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
          },
          backgroundColor: userRole === "owner" ? "#d9d9d9" : "",
          padding: userRole === "owner" ? "10px 20px" : "10px 20px",
          borderRadius: "4px",
        }}
      >
        <HomeWork
          sx={{
            color: userRole === "owner" ? "#36383e" : "#a4a5a8",
            fontSize: "1.3em",
            mr: "7px",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            color: userRole === "owner" ? "#36383e" : "#a4a5a8",
          }}
        >
          Owner
        </Typography>
      </Link>

      <Link
        onClick={() => handleRoleChange("driver", "/driver")}
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
          },
          backgroundColor: userRole === "driver" ? "#d9d9d9" : "",
          padding: userRole === "driver" ? "10px 20px" : "10px 20px",
          borderRadius: "4px",
        }}
      >
        <DirectionsCar
          sx={{
            color: userRole === "driver" ? "#36383e" : "#a4a5a8",
            fontSize: "1.3em",
            mr: "7px",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            color: userRole === "driver" ? "#36383e" : "#a4a5a8",
          }}
        >
          Driver
        </Typography>
      </Link>
    </Box>
  );
}
