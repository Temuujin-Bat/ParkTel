import React, { useState } from "react";

// MUI
import { Box, List, ListItem, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Circle } from "@mui/icons-material";

// Components
import { useRegisterAPI } from "../../../hooks/api/useRegister";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { mutate: register } = useRegisterAPI();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        onChange={handleChange}
        sx={{ width: "100%", mb: "10px" }}
      />

      <TextField
        name="mobile"
        placeholder="Mobile Number: 05*-*******"
        required
        value={formData.mobile}
        onChange={handleChange}
        sx={{ width: "100%", mb: "10px" }}
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <TextField
          name="password"
          type="password"
          placeholder="Enter password"
          required
          value={formData.password}
          onChange={handleChange}
          sx={{ width: "50%" }}
        />
        <TextField
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          required
          onChange={handleChange}
          sx={{ width: "50%" }}
        />
      </Box>

      <Box>
        <Typography
          variant="body2"
          sx={{ lineHeight: ".1em", fontSize: ".8em", mt: "20px", mb: "10px" }}
        >
          Passwords must:
        </Typography>
        <List>
          {[
            "Be at least 8 characters long",
            "Include at least one upper-case character",
            "Include at least one lower-case character",
            " Include at least one numerical digit",
          ].map((option, index) => (
            <ListItem key={index}>
              <Circle sx={{ fontSize: ".5em", mr: "10px" }} />
              <Typography
                variant="body2"
                sx={{ lineHeight: ".1em", fontSize: ".7em" }}
              >
                {option}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>

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
        <Typography variant="subtitle2">Create account</Typography>
      </LoadingButton>
    </Box>
  );
}
