// MUI
import { Box, Stack, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";

export default function BookSpaceCheckout({ singleList }) {
  const price = Math.floor(singleList.price);
  const serviceFee = Math.floor(price * 0.15);
  const totalPrice = price + serviceFee;

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <Lock sx={{ border: "3px solid #2dc98a", mr: "10px" }} />
        <Typography variant="h4">Checkout</Typography>
      </Stack>

      <Box
        sx={{
          margin: "30px",
          border: "1px solid #8aa4b3",
          backgroundColor: "#f8f9fb",
          borderRadius: "3px",
          padding: "20px 25px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ borderBottom: "1px solid #2dc98a", paddingBottom: "5px" }}
        >
          Price breakdown:
        </Typography>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            my: "10px",
          }}
        >
          <Typography variant="body2">Booking (13th Sep):</Typography>
          <Typography variant="subtitle2">{singleList.price} nis</Typography>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #adbfca",
            paddingBottom: "10px",
          }}
        >
          <Typography variant="body2">Service fee:</Typography>
          <Typography variant="subtitle2">
            {Math.floor(singleList.price * 0.15)} nis
          </Typography>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "10px",
          }}
        >
          <Typography variant="subtitle2">Total due today:</Typography>
          <Typography variant="subtitle1">{totalPrice} nis</Typography>
        </Stack>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "30px",
          mt: "30px",
        }}
      >
        <Link
          underline="none"
          sx={{
            backgroundColor: "#2dc98a",
            width: "100%",
            borderRadius: "3px",
            padding: "10px",
            "&:hover": { cursor: "pointer" },
          }}
          onClick={handlePay}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "#FFF", textAlign: "center" }}
          >
            Pay
          </Typography>
        </Link>
      </Box> */}
    </>
  );
}
