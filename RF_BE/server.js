const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

const port = process.env.PORT || 1010;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Server connected to MongoDB successfully!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
