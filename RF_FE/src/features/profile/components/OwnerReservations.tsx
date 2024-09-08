// MUI
import { Box, Container, Fade } from "@mui/material";
import { SentimentDissatisfiedSharp } from "@mui/icons-material";

// Components
import NoActiveListingBooking from "../../../components/notFound/NoActiveListingBooking.tsx";
import { useGetOwnerReservations } from "../../../hooks/api/useGetOwnerReservations.ts";
import OwnerReservationsList from "./OwnerReservationsList.tsx";

export default function OwnerReservations() {
  const { data: ownerReservations, isPending } = useGetOwnerReservations();

  if (isPending) return null;

  return (
    <Fade in={true} timeout={500}>
      <Container maxWidth="lg" sx={{ mt: "30px" }}>
        <Box sx={{ width: "100%" }}>
          {/* Conditionally render based on whether there are any active bookings */}
          {ownerReservations.length > 0 ? (
            <OwnerReservationsList ownerReservations={ownerReservations} />
          ) : (
            <NoActiveListingBooking
              icon={
                <SentimentDissatisfiedSharp
                  sx={{ margin: "20px", fontSize: "3.5em" }}
                />
              }
              message="You have no upcoming bookings"
            />
          )}
        </Box>
      </Container>
    </Fade>
  );
}
