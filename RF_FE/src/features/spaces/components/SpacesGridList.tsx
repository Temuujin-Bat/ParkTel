// MUI
import {
  Link,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Divider,
  Tooltip,
  Paper,
} from "@mui/material";
import { ErrorOutline, DirectionsWalk } from "@mui/icons-material";

export default function SpacesGridList({
  sortedParkingSpots,
  setSelectedSpot,
  setOpen,
}) {
  return (
    <>
      {sortedParkingSpots.map((spot, id) => (
        <Card
          key={id}
          sx={{
            marginBottom: "20px",
            display: "flex",
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "30%", height: "140px", objectPosition: "0% 10%" }}
            image={spot.photos[0]}
          />

          <CardContent
            sx={{
              height: "140px",
              width: "70%",
              position: "relative",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                mb: "10px",
              }}
            >
              <Typography variant="subtitle1">
                {spot.addressLine}, Tel Aviv
              </Typography>

              <Typography variant="subtitle1">{spot.price}NIS</Typography>
            </Stack>

            <Divider sx={{ borderTop: "1px solid #cdd9e1" }} />

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                mt: "15px",
              }}
            >
              {spot.timeInMinutes !== undefined ? (
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <DirectionsWalk
                    sx={{ color: "#adbfca", fontSize: "1.5em", mr: "3px" }}
                  />
                  <Typography
                    sx={{ mr: "3px" }}
                    variant="subtitle2"
                    component={"span"}
                  >
                    {Math.floor(spot.timeInMinutes)}
                  </Typography>
                  mins
                </Typography>
              ) : (
                <Tooltip title="User location is unavailable">
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <DirectionsWalk
                      sx={{ color: "#adbfca", fontSize: "1.5em", mr: "3px" }}
                    />
                    <Typography
                      sx={{ mr: "3px" }}
                      variant="subtitle2"
                      component={"span"}
                    >
                      NaN
                    </Typography>
                    mins
                  </Typography>
                </Tooltip>
              )}

              <Tooltip
                title={
                  <Paper
                    sx={{
                      backgroundColor: "white",
                      margin: "-20px",
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: "bold",
                        borderBottom: "1px solid #2dc98a",
                        lineHeight: "30px",
                        mb: "10px",
                      }}
                    >
                      Guaranteed
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#4a697c" }}>
                      Your space is for you and you only to use for the duration
                      of your booking, and your space owner knows this.
                    </Typography>
                  </Paper>
                }
                arrow
              >
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  variant="subtitle2"
                >
                  <ErrorOutline
                    sx={{ color: "#adbfca", mr: "3px", fontSize: "1.5em" }}
                  />
                  Guaranteed
                </Typography>
              </Tooltip>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                position: "absolute",
                bottom: "0",
                left: "0",
              }}
            >
              <Link
                underline="none"
                sx={{
                  backgroundColor: "white",
                  width: "50%",
                  borderTop: "1px solid #e8eff3",
                  padding: "6px",
                  "&:hover": { cursor: "pointer" },
                }}
                onClick={() => {
                  setSelectedSpot(spot);
                  setOpen((prev) => !prev);
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "center", color: "#4a697c" }}
                >
                  View Details
                </Typography>
              </Link>

              <Link
                underline="none"
                sx={{
                  backgroundColor: "#2dc98a",
                  width: "50%",
                  padding: "6px",
                  "&:hover": {
                    backgroundColor: "#22a270",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Book Now
                </Typography>
              </Link>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
