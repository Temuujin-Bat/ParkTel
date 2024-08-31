// Third party
import Lottie from "lottie-react";

// MUI
import { Slide, Box, Typography, Stack } from "@mui/material";
import {
  DirectionsCarFilled,
  LocationOn,
  NotificationsSharp,
} from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

// Components
import spacesCars from "../../../static/animations/spacesCar.json";

export default function SpacesDialogHowToPark() {
  return (
    <>
      <Box
        sx={{
          padding: "0px 30px",
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
          position: "relative",
        }}
      >
        <Lottie
          animationData={spacesCars}
          loop={true}
          style={{
            height: "200px",
            position: "absolute",
          }}
        />
        <Timeline position="alternate">
          <Slide in={true} timeout={600} direction="left">
            <TimelineItem
              sx={{
                mb: "40px",
                mr: "-20px",
                overflow: "hidden",
              }}
            >
              <TimelineOppositeContent sx={{ m: "auto 0" }}>
                <Typography
                  sx={{
                    border: "4px solid #2dc98a",
                    display: "inline-block",
                    padding: "3px 12px",
                  }}
                  variant="subtitle1"
                >
                  1
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <LocationOn
                    sx={{
                      fontSize: "1.3em",
                      ml: "-5px",
                      mr: "10px",
                      color: "#2dc98a",
                    }}
                  />
                  <Typography variant="subtitle1">After payment</Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: "#101921" }}>
                  You'll be immediately supplied with the full address & entry
                  details for your space
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>

          <Slide in={true} timeout={600} direction="right">
            <TimelineItem sx={{ mb: "40px", mr: "20px" }}>
              <TimelineOppositeContent sx={{ m: "auto 0" }}>
                <Typography
                  sx={{
                    border: "4px solid #2dc98a",
                    display: "inline-block",
                    padding: "3px 12px",
                  }}
                  variant="subtitle1"
                >
                  2
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <NotificationsSharp
                    sx={{
                      fontSize: "1.3em",
                      color: "#2dc98a",
                      mr: "10px",
                    }}
                  />
                  <Typography variant="subtitle1">
                    Space owner notified
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: "#101921" }}>
                  The space owner or car park operator will be notified of your
                  booking
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>

          <Slide in={true} timeout={600} direction="left">
            <TimelineItem sx={{ mr: "-20px" }}>
              <TimelineOppositeContent sx={{ m: "auto 0" }}>
                <Typography
                  sx={{
                    border: "4px solid #2dc98a",
                    display: "inline-block",
                    padding: "3px 12px",
                  }}
                  variant="subtitle1"
                >
                  3
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <DirectionsCarFilled
                    sx={{
                      fontSize: "1.3em",
                      ml: "-5px",
                      mr: "10px",
                      color: "#2dc98a",
                    }}
                  />
                  <Typography variant="subtitle1">Arrive & park</Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: "#101921" }}>
                  Simply arrive at your space, park your vehicle and enjoy your
                  day.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        </Timeline>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", sm: "none", md: "none", lg: "none" },
        }}
      >
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem
            sx={{
              alignItems: "center",
            }}
          >
            <TimelineSeparator>
              <Typography
                sx={{
                  border: "4px solid #2dc98a",
                  display: "inline-block",
                  padding: "3px 12px",
                }}
                variant="subtitle1"
              >
                1
              </Typography>
            </TimelineSeparator>
            <TimelineContent>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <LocationOn
                  sx={{
                    fontSize: "1.3em",
                    ml: "-5px",
                    mr: "10px",
                    color: "#2dc98a",
                  }}
                />
                <Typography variant="subtitle1">After payment</Typography>
              </Stack>

              <Typography variant="body2" sx={{ color: "#101921" }}>
                You'll be immediately supplied with the full address & entry
                details for your space
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem
            sx={{
              alignItems: "center",
            }}
          >
            <TimelineSeparator>
              <Typography
                sx={{
                  border: "4px solid #2dc98a",
                  display: "inline-block",
                  padding: "3px 12px",
                }}
                variant="subtitle1"
              >
                2
              </Typography>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <NotificationsSharp
                  sx={{
                    fontSize: "1.3em",
                    ml: "-5px",
                    mr: "10px",
                    color: "#2dc98a",
                  }}
                />
                <Typography variant="subtitle1">
                  Space owner notified
                </Typography>
              </Stack>

              <Typography variant="body2" sx={{ color: "#101921" }}>
                The space owner or car park operator will be notified of your
                booking
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem
            sx={{
              alignItems: "center",
            }}
          >
            <TimelineSeparator>
              <Typography
                sx={{
                  border: "4px solid #2dc98a",
                  display: "inline-block",
                  padding: "3px 12px",
                }}
                variant="subtitle1"
              >
                3
              </Typography>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <DirectionsCarFilled
                  sx={{
                    fontSize: "1.3em",
                    ml: "-5px",
                    mr: "10px",
                    color: "#2dc98a",
                  }}
                />
                <Typography variant="subtitle1">Arrive & park</Typography>
              </Stack>

              <Typography variant="body2" sx={{ color: "#101921" }}>
                Simply arrive at your space, park your vehicle and enjoy your
                day.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </>
  );
}
