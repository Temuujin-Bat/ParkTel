import { Typography, Fade } from "@mui/material";

export default function HomePage() {
  return (
    <Fade in={true} timeout={500}>
      <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
        deleniti rem rerum, voluptatem perferendis modi, blanditiis animi sint
        nulla velit architecto consequatur accusamus eligendi enim est sed
        laudantium esse dolores?
      </Typography>
    </Fade>
  );
}
