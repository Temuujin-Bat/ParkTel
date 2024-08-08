import React, { useState } from "react";

// Third party
import { useNavigate } from "react-router-dom";

// MUI
import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Mail, KeyboardBackspace } from "@mui/icons-material";

// Components
import { useForgotPasswordAPI } from "../../../hooks/api/useForgotPassword";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const {
    mutate: forgotPassword,
    isPending,
    isSuccess,
  } = useForgotPasswordAPI();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    forgotPassword(email);
  };

  return (
    <Container
      maxWidth={"sm"}
      sx={{ mt: "30px" }}
      component={"form"}
      onSubmit={handleSubmit}
    >
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
            Please enter your email address below, and we will send you a link
            to reset your password.
          </Typography>
        </Box>
      </Box>

      {isSuccess && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "5px 30px",
            border: "1px solid #2dc98a",
            borderRadius: "5px",
            my: "30px",
            backgroundColor: "#d0f7eb",
          }}
        >
          <Typography variant="body2">
            If the email provided belongs to a user on the platform, we will
            email you a link to reset your password.
          </Typography>
        </Box>
      )}

      <TextField
        name="email"
        type="email"
        required
        placeholder="Enter email address"
        sx={{ width: "100%", mt: isSuccess ? 0 : "20px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSuccess ? true : false}
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
          "&.Mui-disabled": {
            backgroundColor: "#78e2b8",
            color: "#ffffff",
          },
        }}
        loading={isPending}
        disabled={isSuccess ? true : false}
      >
        <Mail sx={{ mr: "5px" }} />
        <Typography variant="subtitle2">Send reset link</Typography>
      </LoadingButton>

      <Link
        component={"button"}
        underline="none"
        sx={{
          display: "flex",
          mt: "30px",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
            "& .icon, & .text": {
              color: "#22a270",
            },
          },
        }}
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspace
          sx={{ color: "#2dc98a", fontSize: "1.2em", mr: "5px" }}
        />
        <Typography variant="subtitle2" sx={{ color: "#2dc98a" }}>
          Go back
        </Typography>
      </Link>
    </Container>
  );
}
