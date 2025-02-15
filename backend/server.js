const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");


// database connection


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/weather", weatherRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
