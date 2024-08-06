import React, { useState } from "react";

// MUI
import { Mail } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

// Components
import { useLoginAPI } from "../../../hooks/api/useLogin";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { mutate: login } = useLoginAPI();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({ email: formData.email, password: formData.password });
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <TextField
        name="email"
        type="email"
        required
        placeholder="Enter email address"
        sx={{ width: "100%", mb: "10px" }}
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        name="password"
        type="password"
        required
        placeholder="Enter password"
        sx={{ width: "100%" }}
        value={formData.password}
        onChange={handleChange}
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
      >
        <Mail sx={{ mr: "5px" }} />
        <Typography variant="subtitle2">Log in with Email</Typography>
      </LoadingButton>
    </Box>
  );
}
