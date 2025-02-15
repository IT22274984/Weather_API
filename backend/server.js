const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");


// database connection


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/weather", weatherRoutes);

// Export app for serverless functions
module.exports = app;