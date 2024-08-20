// MUI
import { Circle } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Container,
  Box,
  Typography,
  Stack,
  TextField,
  List,
  ListItem,
} from "@mui/material";

export default function ProfileChangePassword() {
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
          Change Your Password
        </Typography>

        <Stack
          sx={{
            mb: "20px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography sx={{ mr: "15px", mb: { xs: "5px" } }} variant="body2">
            Old password
          </Typography>
          <TextField name="firstName" type="text" required size="small" />
        </Stack>

        <Stack
          sx={{
            mb: "20px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography sx={{ mr: "15px", mb: { xs: "5px" } }} variant="body2">
            New password
          </Typography>
          <TextField name="firstName" type="text" required size="small" />
        </Stack>

        <Stack
          sx={{
            mb: "20px",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          }}
        >
          <Typography sx={{ mr: "15px", mb: { xs: "5px" } }} variant="body2">
            Confirm password
          </Typography>
          <TextField name="firstName" type="text" required size="small" />
        </Stack>

        <Box>
          <Typography
            variant="caption"
            sx={{
              lineHeight: ".1em",
              mt: "20px",
              mb: "10px",
            }}
          >
            Passwords must:
          </Typography>
          <List>
            {["Be at least 8 characters long"].map((option, index) => (
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
          fullWidth
          size="large"
          sx={{ backgroundColor: "#2dc98a", mt: "40px" }}
        >
          <Typography sx={{ color: "#FFF" }} variant="subtitle2">
            Update Password
          </Typography>
        </LoadingButton>
      </Box>
    </Container>
  );
}
