// MUI
import { Box, Link, Typography } from "@mui/material";
import { TListYourSpace, TSelectedDays } from "../types";

export default function SpaceDayPicker({
  selectedDays,
  setSelectedDays,
}: TListYourSpace) {
  const handleDayClick = (day: keyof TSelectedDays) => {
    if (setSelectedDays) {
      setSelectedDays((prevSelectedDays) => ({
        ...prevSelectedDays,
        [day]: !prevSelectedDays[day],
      }));
    }
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: "20px" }}>
        When is your parking lot is available?
      </Typography>

      <Typography variant="body2" sx={{ mb: "10px" }}>
        Select the days that your parking lot is free
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {selectedDays &&
          Object.keys(selectedDays).map((day) => (
            <Link
              underline="none"
              key={day}
              onClick={() => handleDayClick(day as keyof TSelectedDays)}
              sx={{
                height: "60px",
                width: "60px",
                mr: "20px",
                mb: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "200px",
                border: "2px solid #2dc98a",
                backgroundColor: selectedDays![day as keyof TSelectedDays]
                  ? "#2dc98a"
                  : "transparent",
                "&:hover": { cursor: "pointer", backgroundColor: "#2dc98a" },
                "&:hover .MuiTypography-root": {
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: selectedDays![day as keyof TSelectedDays]
                    ? "#FFF"
                    : "#000",
                }}
              >
                {day}
              </Typography>
            </Link>
          ))}
      </Box>
    </Box>
  );
}
