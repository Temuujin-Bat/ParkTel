import { useState } from "react";

// MUI
import { Box, Typography, Stack, Link } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

// Components
import {
  SpacesDialogOverview,
  SpacesDialogReviews,
  SpacesDialogHowToPark,
} from "../index";

export default function SpacesDialogHeader({ parkingSpots }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          padding: "25px 30px",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          backgroundColor: "#f8f9fb",
          borderBottom: "1px solid #cdd9e1",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            borderTop: "1px solid #8aa4b3",
            borderRight: "1px solid #8aa4b3",
            borderBottom: "0px solid #8aa4b3",
            borderLeft: "1px solid #8aa4b3",
            backgroundColor: "white",
            padding: "5px",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#4a697c" }} variant="body2">
              Enter after
            </Typography>
            <Typography variant="subtitle1">
              12pm{" "}
              <Typography
                variant="subtitle2"
                component={"span"}
                sx={{ color: "101921" }}
              >
                (today)
              </Typography>
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#4a697c" }} variant="body2">
              Exit before
            </Typography>
            <Typography variant="subtitle1">
              1am{" "}
              <Typography
                variant="subtitle2"
                component={"span"}
                sx={{ color: "101921" }}
              >
                (tomorrow)
              </Typography>
            </Typography>
          </Stack>
          <ArrowForward
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#2dc98a",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              width: "50%",
              padding: "5px",
              borderTop: "1px solid #8aa4b3",
              borderRight: "0px solid #8aa4b3",
              borderBottom: "1px solid #8aa4b3",
              borderLeft: "1px solid #8aa4b3",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#4a697c" }} variant="body2">
                Booking price
              </Typography>
              <Typography variant="subtitle1">
                {parkingSpots?.price}{" "}
                <Typography
                  variant="subtitle2"
                  component={"span"}
                  sx={{ color: "101921" }}
                >
                  (nis)
                </Typography>
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              border: "1px solid #8aa4b3",
              width: "50%",
              padding: "5px",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#4a697c" }} variant="body2">
                To destination
              </Typography>
              <Typography variant="subtitle1">
                {Math.floor(parkingSpots?.timeInMinutes)}{" "}
                <Typography
                  variant="subtitle2"
                  component={"span"}
                  sx={{ color: "101921" }}
                >
                  (mins)
                </Typography>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          backgroundColor: "#F8F9FB",
          border: "1px solid #adbfca",
          margin: "30px",
          flex: 1,
          overflowY: "auto",
          padding: "5px",
        }}
      >
        <Link
          underline="none"
          sx={{
            padding: "7px",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            color: activeTab === "overview" ? "#fff" : "#4a697c",
            backgroundColor: activeTab === "overview" ? "#000" : "transparent",
            boxShadow:
              activeTab === "overview" ? "inset 0 0 0 3px gray" : "none",
            transition: "color 0.8s ease, background-color 0.3s ease",
            "&:hover": { cursor: "pointer" },
          }}
          onClick={() => setActiveTab("overview")}
        >
          <Typography variant="subtitle2">Overview</Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            flex: 1,
            padding: "7px",
            display: "flex",
            justifyContent: "center",
            color: activeTab === "reviews" ? "#fff" : "#4a697c",
            backgroundColor: activeTab === "reviews" ? "#000" : "transparent",
            boxShadow:
              activeTab === "reviews" ? "inset 0 0 0 3px gray" : "none",
            transition: "color 0.8s ease, background-color 0.3s ease",
            "&:hover": { cursor: "pointer" },
          }}
          onClick={() => setActiveTab("reviews")}
        >
          <Typography variant="subtitle2">Reviews</Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            flex: 1,
            padding: "7px",
            display: "flex",
            justifyContent: "center",
            color: activeTab === "howToPark" ? "#fff" : "#4a697c",
            backgroundColor: activeTab === "howToPark" ? "#000" : "transparent",
            boxShadow:
              activeTab === "howToPark" ? "inset 0 0 0 3px gray" : "none",
            transition: "color 0.8s ease, background-color 0.3s ease",
            "&:hover": { cursor: "pointer" },
          }}
          onClick={() => setActiveTab("howToPark")}
        >
          <Typography variant="subtitle2">How to Park</Typography>
        </Link>
      </Box>

      {activeTab === "overview" && (
        <SpacesDialogOverview parkingSpots={parkingSpots} />
      )}

      {activeTab === "reviews" && <SpacesDialogReviews />}

      {activeTab === "howToPark" && <SpacesDialogHowToPark />}
    </Box>
  );
}
