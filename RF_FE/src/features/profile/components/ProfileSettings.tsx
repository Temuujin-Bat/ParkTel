// MUI
import { LoadingButton } from "@mui/lab";
import { Container, Box, Typography, Stack, TextField } from "@mui/material";

export default function ProfileSettings() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: "30px",
          border: "1px solid #d3d3d3",
          borderRadius: "5px",
          padding: "20px 30px",
        }}
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
          <Typography sx={{ mr: "15px", mb: { xs: "5px" } }} variant="body2">
            First Name
          </Typography>
          <TextField name="firstName" type="text" required size="small" />
        </Stack>

        <Stack
          sx={{
            mt: "20px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography sx={{ mr: "15px", mb: { xs: "5px" } }} variant="body2">
            Last Name
          </Typography>
          <TextField name="lastName" type="text" required size="small" />
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
          <Typography sx={{ mr: "15px", mb: { xs: "5px" } }} variant="body2">
            Email Address
          </Typography>
          <TextField name="email" type="email" required size="small" />
        </Stack>

        <Stack
          sx={{
            mt: "20px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography sx={{ mr: "15px", mb: { xs: "5px" } }} variant="body2">
            Phone Number
          </Typography>
          <TextField name="phoneNumber" type="tel" required size="small" />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          sx={{ backgroundColor: "#2dc98a", mt: "40px" }}
        >
          <Typography sx={{ color: "#FFF" }} variant="subtitle2">
            Save Changes
          </Typography>
        </LoadingButton>
      </Box>
    </Container>
  );
}
