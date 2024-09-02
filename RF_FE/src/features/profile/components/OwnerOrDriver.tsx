// MUI
import { Box, Link, Typography } from "@mui/material";
import { DirectionsCar, HomeWork } from "@mui/icons-material";

// Third party
import { useNavigate } from "react-router-dom";

export default function OwnerOrDriver({ userRole, setUserRole }) {
  const navigate = useNavigate();

  const handleRoleChange = (role, url: string) => {
    setUserRole(role);

    navigate(url);
  };

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
        alignItems: "center",
        justifyContent: "left",
        mt: "15px",
        position: "relative",
        width: "100%",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "-15px",
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: "#d9d9d9",
          width: "calc(100% + 100vw)",
          marginLeft: "-50vw",
        },
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
          mr: "20px",
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
