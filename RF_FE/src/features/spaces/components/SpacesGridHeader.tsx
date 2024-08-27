// MUI
import {
  InputAdornment,
  Link,
  TextField,
  Typography,
  Breadcrumbs,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { LocationOn, NavigateNext } from "@mui/icons-material";

export default function SpacesGridHeader({ sortType, setSortType }) {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fb",
        borderBottom: "1px solid #cdd9e1",
        padding: "20px 20px 10px 30px",
      }}
    >
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        sx={{ borderBottom: "1px solid #cdd9e1", height: "2em" }}
      >
        <Link underline="none" href="/">
          <Typography
            variant="body2"
            sx={{ color: "#4A697C", "&:hover": { color: "#2dc98a" } }}
          >
            Home
          </Typography>
        </Link>

        <Typography
          variant="body2"
          sx={{ color: "#4A697C", textDecoration: "underline" }}
        >
          Tel Aviv
        </Typography>
      </Breadcrumbs>

      <TextField
        helperText="Only available in Tel Aviv"
        fullWidth
        size="small"
        disabled
        value="Tel Aviv"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOn sx={{ color: "#2dc98a" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Typography
                variant="subtitle2"
                sx={{
                  backgroundColor: "#2dc98a",
                  color: "white",
                  padding: "3px 25px",
                  borderRadius: "3px",
                  mr: "-8px",
                }}
              >
                Daily
              </Typography>
            </InputAdornment>
          ),
        }}
        sx={{
          mt: "15px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderWidth: "1.5px",
              borderColor: "#2dc98a !important",
            },
          },
        }}
      />

      <FormControl
        size="small"
        fullWidth
        sx={{
          marginBottom: "20px",
          backgroundColor: "#f0fbf7",
          mt: "10px",
          "& .MuiOutlinedInput-root": {
            borderColor: "#2dc98a",
            "& fieldset": {
              border: "1.5px solid #2dc98a",
            },
            "&:hover fieldset": {
              borderColor: "#2dc98a",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2dc98a",
            },
          },
        }}
      >
        <Select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <MenuItem value="nearest">
            <Typography variant="body2">Nearest Location</Typography>
          </MenuItem>
          <MenuItem value="lowestPrice">
            <Typography variant="body2">Lowest Price</Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
