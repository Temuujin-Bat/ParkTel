import { FormEvent, useEffect, useState } from "react";

// MUI
import { LoadingButton } from "@mui/lab";
import { Container, Box, Typography, Stack, TextField } from "@mui/material";

// Components
import { useAppSelector } from "../../../hooks/useAppStore";
import { getUserDetails } from "../../../store/auth/selectors";
import { useEditProfileAPI } from "../../../hooks/api/useEditProfile";
import { useGetProfileAPI } from "../../../hooks/api/useGetProfile";

export default function ProfileSettings() {
  useGetProfileAPI();
  const userDetails = useAppSelector(getUserDetails);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const { mutate: editProfile, isPending } = useEditProfileAPI();

  useEffect(() => {
    if (userDetails) {
      setFirstName(userDetails?.firstName || "");
      setLastName(userDetails?.lastName || "");
      setEmail(userDetails?.email || "");
      setMobile(userDetails?.mobile || "");
    }
  }, [userDetails]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editProfile({ firstName, lastName, email, mobile });
  };

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        sx={{
          mt: "30px",
          border: "1px solid #d3d3d3",
          borderRadius: "5px",
          padding: "20px 30px",
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" sx={{ mb: "20px" }}>
          Required
        </Typography>

        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography
            sx={{ mb: { xs: "5px" }, width: "180px" }}
            variant="body2"
          >
            First Name
          </Typography>
          <TextField
            name="firstName"
            type="text"
            required
            size="small"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Stack>

        <Stack
          sx={{
            mt: "20px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography
            sx={{ mb: { xs: "5px" }, width: "180px" }}
            variant="body2"
          >
            Last Name
          </Typography>
          <TextField
            name="lastName"
            type="text"
            required
            size="small"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Stack>

        <Typography variant="caption">
          Your public profile only shows your first name. When you book parking
          the parking space owner will see your first and last name.
        </Typography>

        <Stack
          sx={{
            mt: "30px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography
            sx={{ mb: { xs: "5px" }, width: "180px" }}
            variant="body2"
          >
            Email Address
          </Typography>
          <TextField
            name="email"
            type="email"
            required
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Stack>

        <Stack
          sx={{
            mt: "20px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography
            sx={{ mb: { xs: "5px" }, width: "180px" }}
            variant="body2"
          >
            Phone Number
          </Typography>
          <TextField
            name="mobile"
            type="tel"
            required
            size="small"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Stack>

        <LoadingButton
          type="submit"
          fullWidth
          size="large"
          sx={{
            borderRadius: "3px",
            mt: "30px",
            backgroundColor: "#2dc98a",
            "&:hover": {
              backgroundColor: "#22a270",
            },
          }}
          loading={isPending}
        >
          <Typography sx={{ color: "#FFF" }} variant="subtitle2">
            Save Changes
          </Typography>
        </LoadingButton>
      </Box>
    </Container>
  );
}
