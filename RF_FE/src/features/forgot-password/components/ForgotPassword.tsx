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

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <Container maxWidth={"sm"} sx={{ mt: "30px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ mb: "20px" }}>
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

      <TextField
        name="email"
        type="email"
        required
        placeholder="Enter email address"
        sx={{ width: "100%" }}
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
