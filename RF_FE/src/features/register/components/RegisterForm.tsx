import React, { useState } from "react";

// MUI
import { Box, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

// Components
import { useRegisterAPI } from "../../../hooks/api/useRegister";
import {
  MobileField,
  PasswordField,
  ErrorMessagesField,
} from "../../../components/form";
import PasswordCriteria from "../../../components/PasswordCriteria";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isMobileError, setIsMobileError] = useState(false);
  const [isPasswordMatchError, setIsPasswordMatchError] = useState(false);
  const [isPasswordLengthError, setIsPasswordLengthError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (
      (name === "firstName" || name === "lastName") &&
      /[^a-zA-Z\s]/.test(value)
    ) {
      return;
    }

    if (name === "mobile" && !/^\d*$/.test(value)) {
      return;
    }

    if (name === "mobile") {
      setIsMobileError(false);
    }

    if (name === "password" || name === "confirmPassword") {
      setIsPasswordMatchError(false);
    }

    if (name === "password") {
      setIsPasswordLengthError(false);
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { mutate: register, isPending, isError } = useRegisterAPI();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const israeliMobileRegex = /^05\d{8}$/;
    if (!israeliMobileRegex.test(formData.mobile)) {
      setIsMobileError(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setIsPasswordMatchError(true);
      return;
    }

    if (formData.password.length < 8 && formData.confirmPassword.length < 8) {
      setIsPasswordLengthError(true);
      return;
    }

    register({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
    });
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <ErrorMessagesField
        isError={isError}
        isMobileError={isMobileError}
        isPasswordMatchError={isPasswordMatchError}
        isPasswordLengthError={isPasswordLengthError}
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <TextField
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleChange}
          sx={{ width: "50%", mb: "10px" }}
        />
        <TextField
          name="lastName"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={handleChange}
          sx={{ width: "50%", mb: "10px" }}
        />
      </Box>

      <TextField
        name="email"
        type="email"
        placeholder="Email address"
        required
        value={formData.email}
        error={isError}
        onChange={handleChange}
        sx={{
          width: "100%",
          mb: "10px",
        }}
      />

      <MobileField
        name="mobile"
        placeholder="Mobile Number: 05*-*******"
        value={formData.mobile}
        onChange={handleChange}
        error={isMobileError}
        sx={{ width: "100%", mb: "10px" }}
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <PasswordField
          name="password"
          placeholder="Enter password"
          value={formData.password}
          showPassword={showPassword}
          onChange={handleChange}
          onToggleShowPassword={() => setShowPassword((prev) => !prev)}
          error={isPasswordMatchError || isPasswordLengthError}
        />
        <PasswordField
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          showPassword={showConfirmPassword}
          onChange={handleChange}
          onToggleShowPassword={() => setShowConfirmPassword((prev) => !prev)}
          error={isPasswordMatchError || isPasswordLengthError}
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
        }}
        loading={isPending}
      >
        <Typography variant="subtitle2">Create account</Typography>
      </LoadingButton>
    </Box>
  );
}
