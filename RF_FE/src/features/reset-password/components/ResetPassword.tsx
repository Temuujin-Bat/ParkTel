import React, { useState } from "react";

// Third party
import { useParams } from "react-router-dom";

// MUI
import { Box, Container, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Mail } from "@mui/icons-material";

// Components
import { useResetPasswordAPI } from "../../../hooks/api/useResetPassword";
import { ErrorMessagesField, PasswordField } from "../../../components/form";
import PasswordCriteria from "../../../components/PasswordCriteria";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPasswordMatchError, setIsPasswordMatchError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const { token } = useParams();
  const { mutate: resetPassword, isPending } = useResetPasswordAPI();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "password" || name === "confirmPassword") {
      setIsPasswordMatchError(false);
    }

    if (name === "password") {
      setIsPasswordError(false);
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setIsPasswordMatchError(true);
      return;
    }

    if (formData.password.length < 8 && formData.confirmPassword.length < 8) {
      setIsPasswordError(true);
      return;
    }

    if (token && formData.password) {
      resetPassword({ token, password: formData.password });
    }
  };

  return (
    <Container
      maxWidth={"sm"}
      sx={{ mt: "30px" }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <ErrorMessagesField
        isPasswordMatchError={isPasswordMatchError}
        isPasswordLengthError={isPasswordError}
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Stack sx={{ display: "flex", flexDirection: "row", mb: "15px" }}>
            <Typography variant="h3">Password reset</Typography>
            <Typography variant="h3" color={"#2dc98a"}>
              .
            </Typography>
          </Stack>

          <Typography variant="body2">
            Enter your new password below.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexDirection: "column",
          mt: "20px",
        }}
      >
        <PasswordField
          name="password"
          placeholder="Enter password"
          value={formData.password}
          showPassword={showPassword}
          onChange={handleChange}
          onToggleShowPassword={() => setShowPassword((prev) => !prev)}
          error={isPasswordMatchError || isPasswordError}
          sx={{ width: "100%" }}
        />
        <PasswordField
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          showPassword={showConfirmPassword}
          onChange={handleChange}
          onToggleShowPassword={() => setShowConfirmPassword((prev) => !prev)}
          error={isPasswordMatchError || isPasswordError}
          sx={{ width: "100%" }}
        />
      </Box>

      <PasswordCriteria />

      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          borderRadius: "0px",
          mt: "30px",
          height: "3.5em",
          backgroundColor: "#2dc98a",
          "&:hover": {
            backgroundColor: "#22a270",
          },
          "&.Mui-disabled": {
            backgroundColor: "#78e2b8",
            color: "#ffffff",
          },
        }}
        loading={isPending}
      >
        <Mail sx={{ mr: "5px" }} />
        <Typography variant="subtitle2">Update Password</Typography>
      </LoadingButton>
    </Container>
  );
}
