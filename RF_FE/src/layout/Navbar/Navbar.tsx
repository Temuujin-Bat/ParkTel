import { useState } from "react";

// Components

// MUI
import {
  LocalParking,
  AccountCircle,
  Close,
  DragHandle,
} from "@mui/icons-material";
import {
  Link,
  Stack,
  Typography,
  Box,
  Drawer,
  List,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const NavbarList = (
    <Box sx={{ display: "flex" }}>
      <Link
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "3px 5px",
          borderRadius: "2px",
          mr: "10px",
          "&:hover": {
            cursor: "pointer",
            "& .loginTypography": {
              textDecoration: "underline",
              color: "#2dc98a",
            },
          },
        }}
      >
        <AccountCircle sx={{ color: "#2dc98a", mr: "5px" }} />
        <Typography
          className="loginTypography"
          variant="subtitle2"
          sx={{ color: "#FFF" }}
        >
          Log In
        </Typography>
      </Link>

      <Link
        underline="none"
        sx={{
          backgroundColor: "#2dc98a",
          display: "flex",
          alignItems: "center",
          padding: "3px 5px",
          borderRadius: "2px",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#22a270",
          },
        }}
      >
        <Typography variant="subtitle2" sx={{ color: "#101921" }}>
          Sign Up
        </Typography>
      </Link>

      <Divider
        orientation="vertical"
        sx={{
          height: "auto",
          mx: "15px",
          borderColor: "#2dc98a",
        }}
      />

      <Link
        underline="none"
        sx={{
          backgroundColor: "#FFF",
          display: "flex",
          alignItems: "center",
          padding: "3px 5px",
          borderRadius: "2px",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#F2F2F2",
          },
        }}
      >
        <LocalParking
          sx={{
            backgroundColor: "#2dc98a",
            color: "#FFF",
            fontSize: "1em",
            mr: "5px",
          }}
        />

        <Typography variant="subtitle2" sx={{ color: "#000000" }}>
          List Your Space
        </Typography>
      </Link>
    </Box>
  );

  const DrawerList = (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        padding: "20px",
        width: {
          xs: "100vw",
        },
        backgroundColor: "#F2F2F2",
        mt: "50px",
      }}
      onClick={() => setOpen((prev) => !prev)}
    >
      <List>
        {["The Drawer Is Under Development"].map((text) => (
          <Link key={text} underline="none" sx={{ display: "flex" }}>
            <Typography>{text}</Typography>
          </Link>
        ))}
      </List>

      <Box
        sx={{
          position: "absolute",
          left: "0",
          bottom: "0",
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          backgroundColor: "#FFF",
          padding: "20px 15px 30px 15px",
        }}
      >
        <Link
          underline="none"
          href="#"
          sx={{
            width: "50%",
            backgroundColor: "#2dc98a",
            color: "#FFF",
            display: "flex",
            alignItems: "center",
            padding: "10px",
            justifyContent: "center",
            mr: "25px",
            "&:hover": {
              backgroundColor: "#22a270",
            },
          }}
        >
          <Typography variant="subtitle2">List your Space</Typography>
        </Link>

        <Link
          underline="none"
          href="#"
          sx={{
            width: "50%",
            border: "1px solid #2dc98a",
            display: "flex",
            padding: "10px",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#2dc98a",
              "& .loginLogo": {
                color: "#FFF",
              },
              "& .loginTypo": {
                color: "#FFF",
              },
            },
          }}
        >
          <AccountCircle
            className="loginLogo"
            sx={{ color: "#2dc98a", mr: "5px" }}
          />
          <Typography
            className="loginTypo"
            variant="subtitle2"
            sx={{ color: "#2dc98a" }}
          >
            Log in
          </Typography>
        </Link>
      </Box>
    </Box>
  );

  return (
    <>
      <>
        {/* Mobile */}
        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "none",
              md: "none",
              lg: "none",
            },
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            sx={{
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
            underline="none"
          >
            <Typography
              sx={{
                color: "#FFF",
                textTransform: "uppercase",
                border: "3.5px solid #2dc98a",
                padding: "0px 3px",
                mr: "5px",
              }}
              variant="h5"
            >
              Park
            </Typography>
            <Typography
              sx={{ color: "#FFF", textTransform: "uppercase", mr: "5px" }}
              variant="h5"
            >
              Tel
            </Typography>
            <Typography sx={{ color: "#2dc98a" }} variant="h5">
              .
            </Typography>
          </Link>

          <Link component={"button"} onClick={() => setOpen((prev) => !prev)}>
            {!open ? (
              <DragHandle
                sx={{
                  color: "#2dc98a",
                  border: "3.5px solid #78e2b8",
                  display: "flex",
                  fontSize: "1.5em",
                  padding: "0px 4px",
                  boxSizing: "content-box",
                }}
              />
            ) : (
              <Close
                sx={{
                  color: "#2dc98a",
                  border: "3.5px solid #78e2b8",
                  display: "flex",
                  fontSize: "1.5em",
                  padding: "0px 4px",
                  boxSizing: "content-box",
                }}
              />
            )}
          </Link>
        </Box>

        {/* Desktop */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
            },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Link
            href="/"
            sx={{ height: "40px", display: "flex", alignItems: "center" }}
            underline="none"
          >
            <Typography
              sx={{
                color: "#FFF",
                textTransform: "uppercase",
                border: "3.5px solid #2dc98a",
                padding: "0px 3px",
                mr: "5px",
              }}
              variant="h5"
            >
              Park
            </Typography>
            <Typography
              sx={{ color: "#FFF", textTransform: "uppercase", mr: "5px" }}
              variant="h5"
            >
              Tel
            </Typography>

            <Typography sx={{ color: "#2dc98a" }} variant="h5">
              .
            </Typography>
          </Link>

          <Stack>{NavbarList}</Stack>
        </Box>
      </>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={isSmUp ? false : open}
        onClick={() => setOpen((prev) => !prev)}
        transitionDuration={{
          enter: 500,
          exit: 300,
        }}
        sx={{ zIndex: 1200 }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}

// #78e2b8 - lighter green
// #2dc98a - green
// #22a270 - darker green
// #FFFFFF - white
// #F2F2F2 - darker white
// #0072bc - blue
