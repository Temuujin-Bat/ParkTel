// MUI
import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";

// Components
import { ExternalLogin, LoginForm } from "../index";

export default function Login() {
  return (
    <>
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
              <Typography variant="h3">Log in</Typography>
              <Typography variant="h3" color={"#2dc98a"}>
                .
              </Typography>
            </Stack>

            <Typography variant="body2">
              Log into your ParkTel account.
            </Typography>
          </Box>

          <ExternalLogin />

          <Divider sx={{ my: "15px" }}>
            <Typography variant="subtitle2" color="textSecondary">
              or
            </Typography>
          </Divider>

          <LoginForm />
        </Box>
      </Container>
      <Container maxWidth={"sm"} sx={{ mt: "25px" }}>
        <Link
          sx={{
            color: "#2dc98a",
            "&:hover": { color: "#22a270", cursor: "pointer" },
          }}
          href="/forgot-password"
        >
          <Typography variant="subtitle2">Forgotten your password?</Typography>
        </Link>
      </Container>
      <Divider sx={{ mt: "55px", mb: "20px" }} />
      <Container
        maxWidth={"xs"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: "30px",
        }}
      >
        <Typography variant="body2" sx={{ mr: { xs: "3px", md: "20px" } }}>
          Don't have an account?
        </Typography>
        <Link
          underline="none"
          sx={{
            color: "#2dc98a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #2dc98a",
            padding: {
              xs: "5px 10px",
              md: "5px 15px",
            },
            "&:hover": {
              color: "#22a270",
              cursor: "pointer",
              backgroundColor: "#22a270",
              "& .accountLogo": {
                color: "#000000",
              },
            },
          }}
          href="/register"
        >
          <AccountCircle
            className="accountLogo"
            sx={{ color: "#2dc98a", mr: "5px", fontSize: "1.2em" }}
          />
          <Typography variant="subtitle2" sx={{ color: "#000000" }}>
            Sign up for free
          </Typography>
        </Link>
      </Container>
      ;
    </>
  );
}
