// MUI
import { Mail } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export default function LoginForm() {
  return (
    <Box component={"form"}>
      <TextField
        placeholder="Enter email address"
        sx={{ width: "100%", mb: "10px" }}
      />
      <TextField placeholder="Enter password" sx={{ width: "100%" }} />
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
