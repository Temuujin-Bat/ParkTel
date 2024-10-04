// MUI
import { AccessTime, CalendarToday, LocationOn } from "@mui/icons-material";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function OwnerReservationsList({ ownerReservations }) {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: "30px" }}>
        Your Active Bookings
      </Typography>
      <Grid container spacing={4}>
        {ownerReservations.map((reservation) => (
          <Grid xs={12} sm={6} md={6} lg={4} key={reservation._id}>
            <Card sx={{ height: "100%" }}>
              {/* <Box
                sx={{
                  height: "200px",
                  backgroundImage: `url(${reservation.spaceListID.photos[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              /> */}

              <CardContent>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <LocationOn />
                  <Typography>{reservation.spaceListID.addressLine}</Typography>
                </Stack>

                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CalendarToday />
                  <Typography>
                    {new Date(reservation.enterAfter).toLocaleDateString()} till{" "}
                    {new Date(reservation.exitBefore).toLocaleDateString()}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <AccessTime />
                  <Typography>
                    {new Date(reservation.enterAfter).toLocaleTimeString()} till{" "}
                    {new Date(reservation.exitBefore).toLocaleTimeString()}{" "}
                  </Typography>
                </Stack>

                {/* <Typography>{reservation.spaceListID.price} nis</Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
