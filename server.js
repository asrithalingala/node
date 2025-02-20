const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(morgan("dev")); // Log HTTP requests
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Routes
app.use("/employees", employeeRoutes);

// Handle errors globally
app.use(errorHandler); // Custom error handler if any errors occur

// Catch-all route for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
