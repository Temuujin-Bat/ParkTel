const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const updateExpiredBookings = require("./utils/updateExpiredBookings");

dotenv.config();
const app = express();

const authRoutes = require("./routes/auth");
const spaceListRoutes = require("./routes/spaceList");
const userRoutes = require("./routes/user");
const bookingRoutes = require("./routes/booking");

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const allowedOrigins = ["http://localhost:5173", "http://localhost"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan("combined"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/spaceList", spaceListRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/book", bookingRoutes);

const port = process.env.PORT || 1010;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Server connected to MongoDB successfully!");

    updateExpiredBookings();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
