// MUI
import { Warning } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function ErrorField({ text }: { text: string }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "5px 30px",
        border: "1px solid #dc3545",
        borderRadius: "5px",
        mb: "20px",
      }}
    >
      <Warning sx={{ mr: "30px", color: "#dc3545", fontSize: "2em" }} />
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}
