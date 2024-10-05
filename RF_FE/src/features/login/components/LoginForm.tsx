import React, { useState } from "react";

// MUI
import { Mail, VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

// Hooks
import { useLoginAPI } from "../../../hooks/api/useLogin";

// Components
import ErrorField from "../../../components/form/ErrorField";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { mutate: login, isPending, isError } = useLoginAPI();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({ email: formData.email, password: formData.password });
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      {isError && (
        <ErrorField text="We were unable to authenticate you with the details you provided" />
      )}

      <TextField
        name="email"
        type="email"
        required
        placeholder="Enter email address"
        autoComplete="email"
        sx={{ width: "100%", mb: "10px" }}
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        name="password"
        type={showPassword ? "text" : "password"}
        required
        placeholder="Enter password"
        sx={{ width: "100%" }}
        value={formData.password}
        onChange={handleChange}
        autoComplete="current-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
                sx={{ p: 2 }}
              >
                {showPassword ? (
                  <VisibilityOff sx={{ fontSize: ".8em" }} />
                ) : (
                  <Visibility sx={{ fontSize: ".8em" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

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
        <Mail sx={{ mr: "5px" }} />
        <Typography variant="subtitle2">Log in with Email</Typography>
      </LoadingButton>
    </Box>
  );
}
