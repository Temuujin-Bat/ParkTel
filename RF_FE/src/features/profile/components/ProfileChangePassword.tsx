import { useState } from "react";

// MUI
import { LoadingButton } from "@mui/lab";
import { Container, Box, Typography, Stack } from "@mui/material";

// Hooks
import { useChangePasswordAPI } from "../../../hooks/api/useChangePassword";

// Components
import { ErrorMessagesField, PasswordField } from "../../../components/form";
import PasswordCriteria from "../../../components/PasswordCriteria";

export default function ProfileChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPasswordLengthError, setIsPasswordLengthError] = useState(false);
  const [isPasswordMatchError, setIsPasswordMatchError] = useState(false);

  const {
    mutate: changePassword,
    isPending,
    isError: isOldPasswordIncorrect,
  } = useChangePasswordAPI();

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setIsPasswordMatchError(true);
      return;
    }

    if (newPassword.length < 8 && newPassword.length < 8) {
      setIsPasswordLengthError(true);
      return;
    }

    setIsPasswordMatchError(false);

    changePassword({ oldPassword, newPassword });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: "30px" }}>
      <ErrorMessagesField
        isOldPasswordIncorrect={isOldPasswordIncorrect}
        isPasswordMatchError={isPasswordMatchError}
        isPasswordLengthError={isPasswordLengthError}
      />

      <Box
        sx={{
          mt: "30px",
          border: "1px solid #d3d3d3",
          borderRadius: "5px",
          padding: "20px 30px",
        }}
      >
        <Typography variant="h4" sx={{ mb: "20px" }}>
          Change Your Password
        </Typography>

        <Stack
          sx={{
            mb: "30px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography
            sx={{ mb: { xs: "5px" }, width: "200px" }}
            variant="body2"
          >
            Old password
          </Typography>
          <PasswordField
            name="oldPassword"
            value={oldPassword}
            placeholder="Enter your old password"
            showPassword={showOldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            onToggleShowPassword={() => setShowOldPassword(!showOldPassword)}
            sx={{ width: "100%" }}
            size="small"
          />
        </Stack>

        <Stack
          sx={{
            mb: "20px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography
            sx={{ mb: { xs: "5px" }, width: "200px" }}
            variant="body2"
          >
            New password
          </Typography>
          <PasswordField
            name="newPassword"
            value={newPassword}
            placeholder="Enter your new password"
            showPassword={showNewPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onToggleShowPassword={() => setShowNewPassword(!showNewPassword)}
            sx={{ width: "100%" }}
            size="small"
          />
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
            },
            alignItems: {
              xs: "none",
              sm: "none",
              md: "center",
              lg: "center",
            },
          }}
        >
          <Typography
            sx={{ mb: { xs: "5px" }, width: "200px" }}
            variant="body2"
          >
            Confirm password
          </Typography>
          <PasswordField
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Enter your confirm password"
            showPassword={showConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onToggleShowPassword={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            sx={{ width: "100%" }}
            size="small"
          />
        </Stack>

        <Stack sx={{ ml: { xs: "0", sm: "0", md: "25%", lg: "20%" } }}>
          <PasswordCriteria />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          loading={isPending}
          onClick={handleChangePassword}
          sx={{
            borderRadius: "3px",
            mt: "30px",
            backgroundColor: "#2dc98a",
            "&:hover": {
              backgroundColor: "#22a270",
            },
          }}
        >
          <Typography sx={{ color: "#FFF" }} variant="subtitle2">
            Update Password
          </Typography>
        </LoadingButton>
      </Box>
    </Container>
  );
}
