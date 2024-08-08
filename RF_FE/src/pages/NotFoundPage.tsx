// MUI
import { Container, Fade, Link, Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Fade in={true} timeout={500}>
      <Container maxWidth="md" sx={{ padding: "60px" }}>
        <Typography variant="h2">
          Sorry, we couldn't find the page you were looking for.
        </Typography>

        <Link
          underline="none"
          sx={{
            cursor: "pointer",
          }}
          href="/"
        >
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              padding: "10px 15px",
              backgroundColor: "#2dc98a",
              color: "#FFF",
              mt: "30px",
              "&:hover": {
                backgroundColor: "#22a270",
              },
            }}
          >
            Go Home
          </Typography>
        </Link>
      </Container>
    </Fade>
  );
}
