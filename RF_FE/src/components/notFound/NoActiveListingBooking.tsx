// MUI
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export default function NoActiveListingBooking() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          border: "1px solid #979797",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "#f2f2f2",
            borderRadius: "100%",
            mt: "50px",
          }}
        >
          <SentimentVeryDissatisfiedIcon
            sx={{ margin: "20px", fontSize: "3.5em" }}
          />
        </Stack>

        <Typography variant="h5" sx={{ mt: "20px" }}>
          You have no active listings
        </Typography>

        <Stack
          sx={{
            width: "60%",
            backgroundColor: "#979797",
            height: "1px",
            borderRadius: "20px",
            my: "30px",
          }}
        />

        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Your reservations will show up here when drivers start to book
        </Typography>

        <Link
          underline="none"
          sx={{
            mt: "30px",
            mb: "50px",
            backgroundColor: "#2dc98a",
            borderRadius: "3px",
            padding: "10px 20px",
            "&:hover": { backgroundColor: "#22a270" },
          }}
          href="/list-your-space"
        >
          <Typography variant="subtitle2" color={"#FFF"}>
            List another space
          </Typography>
        </Link>
      </Box>
    </Container>
  );
}