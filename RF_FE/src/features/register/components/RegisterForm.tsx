// MUI
import { Box, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export default function RegisterForm() {
  return (
    <Box component={"form"}>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "10px" }}
      >
        <TextField placeholder="Enter email address" sx={{ width: "50%" }} />
        <TextField placeholder="Enter email address" sx={{ width: "50%" }} />
      </Box>

      <TextField
        placeholder="Enter email address"
        sx={{ width: "100%", mb: "10px" }}
      />

      <TextField
        placeholder="Enter password"
        sx={{ width: "100%", mb: "10px" }}
      />

      <Box
        sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "10px" }}
      >
        <TextField placeholder="Enter email address" sx={{ width: "50%" }} />
        <TextField placeholder="Enter email address" sx={{ width: "50%" }} />
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
