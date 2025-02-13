const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/weather", weatherRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
