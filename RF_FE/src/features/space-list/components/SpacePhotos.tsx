// MUI
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Link,
  Slide,
} from "@mui/material";
import { CloudUpload, Delete } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components
import { convertToBase64 } from "../../../utils/helpers/ConvertToBase64";
import { TListYourSpace } from "../types";

export default function SpacePhotos({
  photos = [],
  setPhotos,
}: TListYourSpace) {
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const base64Photos = await Promise.all(
      files.map((file) => convertToBase64(file))
    );

    setPhotos!([...photos, ...base64Photos]);
  };

  const handleDeletePhoto = (index: number) => {
    const updatedPhotos = photos!.filter((_, i) => i !== index);

    if (updatedPhotos) {
      setPhotos!(updatedPhotos);
    }
  };

  return (
    <Slide in={true} timeout={600} direction="right">
      <Box>
        <Typography variant="h5" sx={{ mb: "20px" }}>
          Show drivers what your space looks like
        </Typography>

        <Typography variant="body2" sx={{ mb: "10px" }}>
          Add atleast 1 photo***
        </Typography>

        <Box
          sx={{
            border: "2px dashed #ccc",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            padding: "40px",
            mb: "40px",
          }}
        >
          <Link
            underline="none"
            component="label"
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#2dc98a",
              padding: "20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <CloudUpload sx={{ color: "#FFF", mr: "10px" }} />
            <Typography sx={{ color: "#FFF" }} variant="subtitle2">
              Upload Photos
            </Typography>
            <input
              type="file"
              hidden
              multiple
              accept="image/*"
              onChange={handleFileUpload}
            />
          </Link>

          <Typography variant="body2" sx={{ mt: "10px" }}>
            Drop your photos here or click to upload
          </Typography>
          <Typography variant="caption">
            Max 5 photos, JPG/PNG, up to 5MB each
          </Typography>
        </Box>

        {photos.length > 0 && (
          <Grid container spacing={5}>
            {photos.map((photo, index) => (
              <Grid xs={3} key={index}>
                <Box sx={{ position: "relative" }}>
                  <Avatar
                    src={photo}
                    variant="square"
                    sx={{ width: "100%", height: "100px" }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      color: "red",
                      top: -25,
                      right: -25,
                    }}
                    onClick={() => handleDeletePhoto(index)}
                  >
                    <Delete sx={{ fontSize: "30px" }} />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Slide>
  );
}
