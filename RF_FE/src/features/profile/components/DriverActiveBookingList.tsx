// MUI
import { AccessTime, CalendarToday, LocationOn } from "@mui/icons-material";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function DriverActiveBookingList({ driverBooking }) {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: "30px" }}>
        Your Active Bookings
      </Typography>
      <Grid container spacing={4}>
        {driverBooking.map((booking) => (
          <Grid xs={12} sm={6} md={6} lg={4} key={booking._id}>
            <Card sx={{ height: "100%" }}>
              <Box
                sx={{
                  height: "200px",
                  backgroundImage: `url(${booking.spaceListID.photos[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <CardContent>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <LocationOn />
                  <Typography>{booking.spaceListID.addressLine}</Typography>
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
                    {new Date(booking.enterAfter).toLocaleDateString()}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <AccessTime />
                  <Typography>
                    {new Date(booking.enterAfter).toLocaleTimeString()} till{" "}
                    {new Date(booking.exitBefore).toLocaleTimeString()}{" "}
                    {/* Adjusted for booking time */}
                  </Typography>
                </Stack>

                <Typography>{booking.spaceListID.price} nis</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
